!function(){function e(s){if(void 0===typeof $||!$.fn||!$.fn.jquery)throw new Error("jquery not found");if(!s.anchors)throw new Error("no anchors params found,please check");s=$.extend({activeClass:"active",autoHide:!0,autoHideThreshold:200,useFade:!1,sideBar:$(".sidebar")},s);var t=[],e=s.anchors;$(e).each(function(e,o){$('[href="#'+o+'"]').click(function(){$("body,html").animate({scrollTop:$("#"+o).offset().top}),$(this).addClass(s.activeClass).siblings().removeClass(s.activeClass)}),t.push($("#"+o).offset().top)});var i=0;$(window).scroll(function(){var a=$(this).scrollTop();s.autoHide&&(a>s.autoHideThreshold?s.useFade?s.sideBar.fadeIn():s.sideBar.show():s.useFade?s.sideBar.fadeOut():s.sideBar.hide()),$(t).each(function(e,o){o<=a+1&&(i=e)}),$(e).each(function(e,o){$('[href="#'+o+'"]').removeClass(s.activeClass)}),$('[href="#'+e[i]+'"]').addClass(s.activeClass)})}"object"==typeof module&&"object"==typeof module.exports?module.exports=e:window.buildBar=e}();