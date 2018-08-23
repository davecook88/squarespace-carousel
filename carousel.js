var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
var wrapper = $('.social-search-wrapper')
wrapper.css("border-right","none")
var carousel = $(".code-block");
var page = $(".outer-wrapper")
var wrapper = $(".content-inner-wrapper")
var pagePadding = page.css("margin-left")
var pagePaddingInt = parseInt(pagePadding.substr(0,pagePadding.length - 2))
var pageMargin = wrapper.css("padding-left")
var pageMarginInt = parseInt(pageMargin.substr(0,pageMargin.length - 2))
var carouselMinusMargin = pagePaddingInt+pageMarginInt
if (isMobile){ 
  carouselMinusMargin += 15
}
carousel.css({
  "width":"100vw",
  "margin-left":"-" + carouselMinusMargin + "px",
  "padding":"0px",
});
var carouselLink = $(".carousel-link")
  carouselLink.css({
      "color":"black",
      "text-decoration":"none"
  })
 var carouselItem = $(".carousel-item")
 if (!isMobile){  
  carouselItem.css({
      "height":"50vh"
 })
 else {
   carouselItem.css({
      "height":"100%"
 })
 }
