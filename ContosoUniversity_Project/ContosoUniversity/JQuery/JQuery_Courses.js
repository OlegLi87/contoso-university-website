﻿$(document).ready(function () {
    $("body").addClass("active");
    $("ul a").css("color", "#25262d");
    $("#courses").css("background-color", "#025d66");
    $("#courses").css("color", "#e6e7ef");


    $("li").hover(function () {
        $("ul").css("box-shadow", "11px 10px 50px 0px rgba(127,177,184,1)");
        $("ul").css("transition", "1s");
        $("ul a").css("color", "#e0f7f9");
        $("ul a").css("transition", "1s");
        $("ul a").css("background", "#181928");
        $("#courses").css("background-color", "#e0f7f9");
        $("#courses").css("color", "#181928");

    }, function () {
        $("ul").css("box-shadow", "none");
        $("ul").css("transition", "1s");
        $("ul a").css("color", "#25262d");
        $("ul a").css("transition", "1s");
        $("ul a").css("background", "#d8e9ff");
        $("#courses").css("background-color", "#025d66");
        $("#courses").css("color", "#e6e7ef");

    })

})