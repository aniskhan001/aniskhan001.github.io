---
title: "OOP থেকে কি শিখলাম? 🎯"
date: 2020-05-09
tags: ["oop", "solid"]
# showToc: true
TocOpen: false
draft: false
hidemeta: false
comments: true
description: "You might think the world is object-oriented. But it's not! 🇧🇩"
disableHLJS: false # to disable highlightjs
disableShare: false
hideSummary: false
searchHidden: false
ShowReadingTime: true
ShowBreadCrumbs: true
ShowPostNavLinks: true
---

{{< figure
    src="/img/tech/oop.jpeg"
    caption="A sample program of mine, but not directly related to OOP or SOLID"
    class=big-picture
    align=center
>}}

আমরা যারা ভার্সিটিতে কম্পিউটার সায়েন্স বা অন্যান্য ইঞ্জিনিয়ারিং বিষয়ে পড়াশুনা করে এসেছি বা এখনো করছি, মোটামুটি সবারই Object Oriented Programming বা OOP শিখতে হয়েছে। যেখানে Encapsulation, Inheritence, Polymorphism ইত্যাদি বিষয়গুলো থাকে। এবং প্রায় সময়ই OOP বোঝার জন্য কিছু সাধারণ উদাহরণ আমরা দেখে এসেছি.. যেমন Vehicle নামে একটা class. এখান থেকে কমন জিনিসগুলো যেমন চাকা, বডি, ইত্যাদি নিয়ে গাড়ি, বাস, ট্রাক ইত্যাদি object হতে পারে। গাড়ির ক্লাস থেকে আবার কিছু অবজেক্ট রং পরিবর্তন করে লাল গাড়ি, নীল গাড়ি, সবুজ গাড়ি ইত্যাদি হতে পারে। অনেকে পরিবারের সম্পর্ক দিয়ে বোঝার চেষ্টা করে.. যেমন দাদা থেকে বাবা, বাবা থেকে তুমি, থাক ওইদিকে আর না গেলাম।

এই সকল উদাহরণ দিয়ে হয়ত Encapsulation, Inheritence, Polymorphism ইত্যাদি বোঝানো যায়, কিন্তু এই রকম চিন্তা করতে কোড লিখতে গেলে বেশীরভাগ ক্ষেত্রেই সেটা ভাল সফটওয়্যার হয় না। কেন হয় না জানতে পারলাম [SOLID principles](https://en.wikipedia.org/wiki/SOLID) নিয়ে ঘাটাঘাটি করতে গিয়ে বিখ্যাত Uncle Bob এর একটা বক্তৃতা শুনে। সেখানে উনি OO বা Object Oriented approach এর ব্যাপারে এই কথাটা বলেনঃ

>“You may have heard that OO is modeling the real world. Nonsense! You may have heard that OO is closer to the way we think. No! These things were made up by marketing people in order to sell the idea to executives who didn't know what the programs were.

>OO is about managing dependencies by selectively reinvert certain key dependencies in your architecture so that you can prevent rigidity, fragility, and non-reusability.”

_-- Robert C. Martin a.k.a. "Uncle Bob"_

তার মানে শুধু ক্লাস আর অবজেক্ট নিয়ে চিন্তা করলেই হবে না। চিন্তা করতে হবে প্রোগ্রামের ফ্লো আসলে কোন দিক থেকে কোন দিকে যাচ্ছে, এবং এর কারণে সফটওয়্যারটা rigid, fragile, and non-reusable হয়ে যায় কিনা? বাংলায় বললে, একরোখা ফ্লো এর কারণে সফটওয়্যারটি "ঘাড় ত্যাড়া" হয়ে যায় কিনা? বেশ কিছু সময়েই দেখা যায় আমাদের লেখা সফটওয়্যারগুলো একটা সময় এমন ঘাড় ত্যাড়া হয়ে যায় যে পরবর্তীতে ছোট একটা পরিবর্তন আনতে গিয়ে অনেক অপ্রয়োজনীয় জায়গায় কোড পরিবর্তন করা লাগে। এটা সফটওয়্যার ডেভেলপমেন্টে খুবই কমন একটা সমস্যা, প্রায়ই হয়। কয়েকদিন আগে আমিও এই সমস্যায় পরেছিলাম। একটা মডিউলে ছোট একটা পরিবর্তন আনতে গিয়ে আরো ৫টা মডিউলে হাত দেয়া লেগেছিল, যাদের সাথে কোন রকম সংযোগ থাকার কথা ছিল না। ফ্লো ঠিক ঠাক মত সাজিয়ে কিভাবে এই সমস্যার সমাধান করা যায় ভিডিওতে দেখানো হয়েছে। লিঙ্ক নিচে দেয়া আছে।

এছাড়াও সাবেক উইনিক্স মেম্বার ও গো প্রোগ্রামিং ল্যাঙ্গুয়েজ এর জনক Rob Pike তার _"Concurrency Is Not Parallelism"_ টপিক নিয়ে কথা বলার সময়ও এরকম কিছু বলেছেনঃ

>“If you looked at the programming languages of today, you probably get this idea that the world is object-oriented. But it's not! It's actually parallel.

>You got everything from the lowest level like machines and up through networking and so on, then all the way up to users, planets, the universe, etc. All these things are happening simultaneously in the world. And yet the computing tools that we have are not really good at expressing that worldview.”

_-- Rob Pike_

আসলে ভার্সিটি সিলেবাসে ওই রকম প্রোজেক্ট ভিত্তিক প্র্যাকটিকাল কিছু নেই বলে এই সমস্যা গুলো তখন বোঝা যায় না। এবং OOP সম্পর্কে একটা ভুল ধারণা নিয়েই আমরা বেশীর ভাগ কম্পিউটার সায়েন্স গ্র্যাজুয়েট ইঞ্জিনিয়ার হয়ে বের হই। পরবর্তীতে একটু মাঝারি কিংবা বড় সফটওয়্যারে কাজ করতে গেলে ঠিক মত সিস্টেম ডিজাইন করতে পারি না। কোন রকম if-else ব্যবহার করে সিস্টেম বানিয়ে ফেলি, তারপর যখন নতুন ফীচার সফটওয়্যারে যোগ করা লাগে ঐ পরিস্থিতিতে চলমান সফটওয়্যারের কোড পরিবর্তন করতে গিয়ে হিমশিম খাই। কারণ ঐ সফটওয়্যার দিয়ে কোম্পানির হাজার হাজার টাকার ব্যবসা চলছে, একটু এদিক সেদিক হলেই ডেভেলপারের ১২টা বেজে যাবে। এই সময় ব্যাপারটা এমন হয়ে দাঁড়ায় যে, আমার বানানো সফটওয়্যারকে আমি নিয়ন্ত্রণ করতে পারছি না, উল্টা আমার বানানো সফটওয়্যারটাই আমাকে নিয়ন্ত্রণ করতে চাচ্ছে। অনেকটা মা-বাবার অবাধ্য সন্তানের মত।

ভার্সিটিতে যেটা শিখাচ্ছে সেটা প্রাথমিক শিক্ষা এবং অবশ্যই অনেক গুরুত্বপূর্ণ। প্রাথমিক কম্পিউটার সায়েন্স শিখা মানেই যে সব জেনে গেলাম, ব্যাপারটা এরকম না। প্রাথমিক শিক্ষার পরেও নিজের ইচ্ছায় এ বিষয়গুলো নিয়ে ঘাটাঘাটি করতে হবে, জানতে হবে, একটু জানলে আরো বেশী জানার আগ্রহ থাকতে হবে। চাকরীজীবনে ঢুকেও আমাদের অনেক নতুন নতুন বিষয় জানা লাগে, শেখা লাগে। শেখার আসলেই কোন শেষ নেই। ২-১ যুগ আগে হয়ত শেখা কষ্ট ছিল.. ভাল বই কম ছিল, থাকলে কোনটা ভাল বই জানা ছিল না, ইন্টারনেট ব্যবহার কষ্টকর ছিল, সেখানেও এত রিসোর্স ছিল না। কিন্তু এখন শেখার প্লাটফর্ম অনেক সহজ, যে কোন কিছুই একটু ইন্টারনেটে সার্চ দিলেই পাওয়া যায়। Google, Quora, StackOverflow, Reddit, বিভিন্ন রকমের প্রোগ্রামিং ব্লগ অনেক অনেক রিসোর্স এখন সহজলভ্য!

তাই ভুল ভাবে OOP না বুঝে আমরা যেন ভবিষ্যতে ঘাড় ত্যাড়া সফটওয়্যার না বানাই সেদিকে খেয়াল রাখতে হবে। সেক্ষেত্রে SOLID principles জেনে নিলে এ সকল সমস্যা ভালভাবে সমাধান করা যাবে আশা করা যায়। ইচ্ছা আছে, উদাহরণ সহ SOLID এর প্রত্যেকটা প্রিন্সিপ্যাল নিয়ে ব্লগ সিরিজ লেখার। আল্লাহ্‌ ভরসা!

### 🎬 Video links

- [Uncle Bob’s talk on SOLID principle](https://www.youtube.com/watch?v=zHiWqnTWsn4)
- [Rob Pike - 'Concurrency Is Not Parallelism'](https://www.youtube.com/watch?v=cN_DpYBzKso)
