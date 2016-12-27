/**
 * Created by rimi on 2016/12/23.
 */

//加载layui导航模块
layui.use('element', function(){
    var element = layui.element();
    element.on('tab(nav)', function(data){
        console.log(data);
    });
});

//xs页面时点击导航内容自动回收
$(".layui-nav-item a").click(function () {
    if ($(window).width() < 768) {
        $('.bs-js-navbar-scrollspy').collapse('hide')
    }
});