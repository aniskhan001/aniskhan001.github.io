---
title: "How I reduced the size of a Docker image"
date: 2018-06-09
tags: ["docker", "python", "sanic"]
# showToc: true
TocOpen: false
draft: false
hidemeta: false
comments: true
# description: "Docky docky!"
disableHLJS: false # to disable highlightjs
disableShare: false
hideSummary: false
searchHidden: false
ShowReadingTime: true
ShowBreadCrumbs: true
ShowPostNavLinks: true
---

December 2017, at work, I had to deploy a micro-service very very quickly to support the core service of ours. The framework I used for this one was [Sanic](https://github.com/sanic-org/sanic), (_a micro-framework written in Python 3.5 with Async support_). So, I get the python image first along with dependencies in a `requirements.txt` file. This is how it went:

```Dockerfile
FROM python:3.6
ENV PYTHONUNBUFFERED 1

ENV TZ=Asia/Dhaka
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

RUN mkdir /app
ADD requirements.txt ./app/
WORKDIR /app
RUN pip install -r requirements.txt
COPY ./code ./app
EXPOSE 5000
```

After building this Dockerfile, the size of the image was **780 MB!**

Since I was in a hurry, (*translation: I actually didn’t have good optimization knowledge in Docker, LOL*) I just stared on that monstrous size for a small service and let it pass on to production. Then when I got time recently to think about optimization, gathered some knowledge from online and rewrote the file to this:

```Dockerfile
FROM alpine:3.7

RUN mkdir /app
WORKDIR /app
COPY requirements.txt ./

RUN apk add --no-cache python3 python3-dev build-base && \
    python3 -m ensurepip && \
    rm -r /usr/lib/python*/ensurepip && \
    pip3 install --upgrade pip setuptools && \
    pip3 install -r requirements.txt && \
    apk del python3-dev build-base && \
    rm -r /root/.cache

ENV PYTHONUNBUFFERED 1
ENV TZ=Asia/Dhaka
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

COPY ./code ./
CMD ["python3", "app.py"]

EXPOSE 5000
```

This one looks messy, but far more optimized. After building the image with this new Dockerfile it is only **79 MB** now!

## So this is how I reduced the image size

First of all, we were getting a standard python image with lots of pre-installed tools which we might not require. Instead, I’m getting an **alpine** based image for the second example and installing only things which are required to run this particular app.\
(_[extra read: **is alpine worth it?**](https://nickjanetakis.com/blog/alpine-based-docker-images-make-a-difference-in-real-world-apps)_)

```Dockerfile
# nope, nope, nope
FROM python:3.6

# yeah!
FROM alpine:3.7
```

Then in the next section, notice I’m running multiple statements at once to have fewer layers. Separate RUN commands create separate layers to an image which can potentially increase the size.

```Dockerfile
# Multiple RUN at once, for glory!
RUN apk add --no-cache python3 python3-dev build-base && \
    python3 -m ensurepip && \
    rm -r /usr/lib/python*/ensurepip && \
    pip3 install --upgrade pip setuptools && \
    pip3 install -r requirements.txt && \
    apk del python3-dev build-base && \
    rm -r /root/.cache
```

But there’s a drawback to this method as well. Once we change something to this RUN command, a rebuild would take more time since it won’t be able to take its state from the previous layer. But once again, we generally don’t add or remove packages often, so I guess this is admissible.

Last but not least, it’s always better to clean up rm -r files and directories which aren’t required by the app. Also, be sure to add unnecessary files and directories inside [`.dockerignore`](https://docs.docker.com/engine/reference/builder/#dockerignore-file) as well so that it won’t go inside the image.

### Why does it matter?

* Less image size means less bandwidth cost. Imagine a CD pipeline that does frequent deployments where it can save more server costs
* Less room for security breach since we have fewer tools and dependency packages inside the image to explore
* Faster deployments (obviously) with small-sized image

---

To readers, I’m continuously learning Docker through working with it, and I found this might be an interesting story to share with everyone. Let me know your thoughts on this and share if you have any suggestions or any more tip to make Dockerfile even more optimized. Thanks for reading my story!
