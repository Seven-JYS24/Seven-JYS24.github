$(function () {
    // body...
    // 广告轮播图
    $('[data-toggle="tooltip"]').tooltip();
    function resize(){
       var windowWidth = $(window).width();
        var isSmallScreen = windowWidth < 768;
        $('#main_ad > .carousel-inner > .item').each(function(i,item){
            var $item =$(item);
            var imgSrc = $item.data(isSmallScreen ? 'img-xs' : 'img-lg');
            $item.css('backgroundImage','url("'+imgSrc+'")');
            if(isSmallScreen){
                $item.html('<img src="'+imgSrc+'" alt="" />');
            }else{
                $item.empty();
            }
        });
    }
    $(window).on('resize',resize).trigger('resize');
    /**
     * 控制标签页的宽度
     */
   var $ulContainer = $('.nav-tabs');
    var width =30;
    $ulContainer.children().each(function (index,element) {
        // body...
        width += element.clientWidth;
    });
    // 判断当前ul宽度是否超出屏幕，如果超出就显示滚动条
    if(width > $(window).width()){
        $ulContainer.css('width',width).parent().css('overflow-x','scroll');
    }
   /**
    * 给a注册点击事件
    */
   var newsTitle = $('.news-title');
    $('#news .nav-stacked a').on('click',function () {
        // 获取当前点击元素
        $this = $(this);
        //获取对应的title值
        var title = $this.data('title');
        newsTitle.text(title);
    })
});