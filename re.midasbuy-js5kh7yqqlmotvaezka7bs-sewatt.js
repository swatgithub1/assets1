/*
    *****************
    Website : sewatthoster.id
    Contact : @SEWATT
    APi GeoLocation : ipapi.biz
    *****************
    CLEAN AND MINIFIED CODE
    SUPER COMPRESSOR
    THIN AND LIGHT CODE
    *****************
*/
var scrollT1=0,scrollT2=0,scrollTimer=null,setPosition=function(a){a?setPosition.isBottom||($(".pay-sec,.wrap").addClass("pay-sec-flex"),$(".pay-sec").show(),$(".footer").addClass("show").show(),setPosition.isBottom=1):($(".pay-sec,.wrap").removeClass("pay-sec-flex"),$(".footer").removeClass("show"),setPosition.isBottom=0)};function isScrollEnd(){(scrollT2=$(document).scrollTop())==scrollT1&&($(".follow").removeClass("scrollStar"),clearTimeout(scrollTimer))}window.showClauseBg=function(){$(".clause-bg").show(),$(".clause-box-pop").show()},window.hideClauseBg=function(){$(".clause-box-pop").hide(),setTimeout(function(){$(".clause-bg").fadeOut()},100)},window.showBirthBox=function(){$("#birthBox").show(),$("body").css({overflow:"hidden"})},window.hideBirthBox=function(){$("#birthBox").hide(),$("body").css({overflow:"auto"})},$(function(){$(window).innerHeight()>$(document).height()?setPosition(1):$(window).on("scroll",throttle(function(){var a=$(document).height();$(".wrap").hasClass("pay-sec-flex")&&(a=768>=$(window).width()?1*a-120:1*a-180);var b=Math.ceil($(window).scrollTop()+window.innerHeight)>=a;setPosition(b),clearTimeout(scrollTimer),$(".follow").addClass("scrollStar"),scrollTimer=setTimeout(isScrollEnd,100),scrollT1=$(document).scrollTop()},200)),$(".clause-bg,.clause-box-pop .close").on("click",function(){window.hideClauseBg()})}),report.view("topupv2"),report.setPage("topupv2"),report.performance("topupv2")