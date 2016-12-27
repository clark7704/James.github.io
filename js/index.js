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
//
$(".layui-nav-item a").click(function () {      //xs页面时点击导航内容自动回收
    if ($(window).width() < 751) {
        $('.bs-js-navbar-scrollspy').collapse('hide')
    }
});