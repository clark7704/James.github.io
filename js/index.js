/**
 * Created by rimi on 2016/12/23.
 */
layui.use('element', function(){
    var element = layui.element();


    element.on('tab(nav)', function(data){
        console.log(data);
    });
});