
var provdata = null;
var provdataview = null;

attachProvBtnCB = function(provdata, what) {
    var label;
    if (what === "reset_to_prov") {
	label = "Reset to Provisioning";
	$("#prov-btn").unbind();
	$("#prov-btn").bind('click', function() {
            provdataview = prov_show(provdata, "reset_to_prov");
	});
    } else if (what === "prov") {
	label = "Provisioning";
	$("#prov-btn").unbind();
	$("#prov-btn").bind('click', function() {
            provdataview = prov_show(provdata, "prov");
	});
    } else {
	return;
    }
    console.log("Show button");
    $("#div-prov-btn ul li a").html(label);
    $("#div-prov-btn").show();
};

var createHTMLPage = function() {
    $("#header #back").hide();
    $("#header #home").hide();
    $("#page_content").html("");
    $("#header #title").text("Goally Setup");
    $("#page_content").append($("<div/>", {"id":"div-prov-btn"})
			      .append($("<ul/>", {"data-role":"listview","data-inset":true, "data-divider-theme":"d", id: "ul-prov-btn"})
			              .append($("<li/>", {"data-role":"fieldcontain", "data-theme":"c"})
			                      .append($("<a/>", {"href":"#", "id":"prov-btn", "data-theme":"c", "data-shadow":"false"})
			                              .append("")))));
    
    $("#div-prov-btn").hide();
};

var show = function() {

    console.log("show called");
    createHTMLPage();
    provdata = prov_init();
    provdataview = prov_show(provdata, "prov");
};

var pageLoad = function() {
    commonInit();
    $("#home").bind("click", function() {
        console.log("Home Click Event");
        if (provdataview !== null) {
            provdataview.hide();
            provdata.destroy();
            provdata = null;
            provdataview = null;
        }
        show();
        $("#page_content").trigger("create");
    });
    show();
};
