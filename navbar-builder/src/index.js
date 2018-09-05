(function() {
    /**
     * 场景：右侧一个快捷导航，点击可以使页面快读滚动到对应位置；
     * 滚动页面，右侧对应的导航可以加上active的class
     * 基于jquery
     * @param options {}
     * @param options.anchors ：元素的ID列表，比如['yuwen','shuxue','yingyu']
     * @param options.activeClass ：链接选中态的class名称
     */
    if (typeof module === "object" && typeof module.exports === "object") {
        module.exports = buildBar;
    } else {
        window.buildBar = buildBar;
    }

    function buildBar(options) {
        if (typeof $ !== undefined && $.fn && $.fn.jquery) {
            if (!options.anchors) {
                throw new Error("no anchors params found,please check");
            }

            options = $.extend({
                "activeClass": 'active',
                "autoHide": true,
                "autoHideThreshold": 200,
                "useFade": false,
                "sideBar": $(".sidebar")
            }, options);
            var eleScrollTopArr = [];
            var anchors = options.anchors;
            //遍历arr，添加click事件，同时取出对应元素距离顶部的高度
            $(anchors).each(function(index, e) {
                //点击链接，让页面滚动
                $('[href="#' + e + '"]').click(function() {
                    $('body,html').animate({
                        scrollTop: $('#' + e).offset().top
                    });
                    $(this).addClass(options.activeClass).siblings().removeClass(options.activeClass);
                });

                eleScrollTopArr.push($('#' + e).offset().top);
            });
            //先定义取消所有激活状态的函数
            function removeActiveAll() {
                $(anchors).each(function(index, e) {
                    $('[href="#' + e + '"]').removeClass(options.activeClass);
                })
            }
            //滚动的时候，让对应的链接激活,同时移除其他连接的激活状态
            var activeIndex = 0;
            $(window).scroll(function() {
                var stop = $(this).scrollTop();
                //隐藏和显示导航区域
                if (options.autoHide) {
                    if (stop > options.autoHideThreshold) {
                        options.useFade ? options.sideBar.fadeIn() : options.sideBar.show();
                    } else {
                        options.useFade ? options.sideBar.fadeOut() : options.sideBar.hide();
                    }
                }

                //循环遍历高度阈值，超过的加上激活class
                $(eleScrollTopArr).each(function(index, hold) {
                        if (stop + 1 >= hold) {
                            //获取到当前该激活的index
                            activeIndex = index;
                        }
                    })
                    //先取消其他激活状态
                removeActiveAll();
                //当前的选中
                $('[href="#' + anchors[activeIndex] + '"]').addClass(options.activeClass);
            })

        } else {
            throw new Error('jquery not found');
        }
    }
})();