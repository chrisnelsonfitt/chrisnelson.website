var portfolio_load = $('.portfolio-full');
var form = $("#forms");
var lightbox = $("#lightbox");
var photography = $("#photography");
var responsive = $("#responsive");
var video_player = $("#video-player");
var web_app = $("#web-app");
var svg = $("#svg");
var design = $("#design");
var accessible = $("#accessible");
var gallery_item = $(".gallery-item");
var ajax_close = $(".close-expandable")
//Show gallery Items as you scroll over them
   $(window).scroll( function(){
       //Check where each item is located
       gallery_item.each( function(i){
            var bottom_of_object = $(this).offset().top +    $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() +         $(window).height();
            if( bottom_of_window > bottom_of_object ){
            //When the item is completely in view allow items to be clicked
            $(this).css("pointer-events","inherit");
            //When the item is completely in view change opacity to full
            $(this).animate({'opacity':'1'},300);
           }
       }); 
   });


//Open Ajax File and scroll to expanded version.
gallery_item.click(function() {
     $("html, body").animate({
         scrollTop: $("#toLocation").offset().top
     }, 500);
});
    //Load Ajax Pages
form.click(function () {
    portfolio_load.load("ajax-files/form.html");
});
lightbox.click(function(){
    portfolio_load.load("ajax-files/lightbox.html");
});
photography.click(function(){
    portfolio_load.load("ajax-files/photography.html");
});
responsive.click(function(){
    portfolio_load.load("ajax-files/responsive.html");   
});
video_player.click(function(){
    portfolio_load.load("ajax-files/video.html");  
});
web_app.click(function(){
    portfolio_load.load("ajax-files/web-app.html");   
});
svg.click(function(){
    portfolio_load.load("ajax-files/svg.html");  
});
design.click(function(){
    portfolio_load.load("ajax-files/design.html");  
});
accessible.click(function(){
    portfolio_load.load("ajax-files/accessible.html"); 
     
});
