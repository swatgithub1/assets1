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
function setNavPosition(){$(".banner-wrap .nav-box li").each(function(){if($(this).hasClass("active")){var a=$(".banner-wrap .nav-box li").index(this);$(".banner-wrap .nav-box li").get(0).getBoundingClientRect().width;var b=window.innerWidth,c=$(this).outerWidth(!0),d=(b-c)/2-20,e=$(".banner-wrap .nav-box li").get(a).offsetLeft,f=d-e;if(f>0){$(".banner-wrap .nav-box .main").get(0).scrollLeft=0;return}$(".banner-wrap .nav-box .main").get(0).scrollLeft=200}})}$(function(){setNavPosition()})