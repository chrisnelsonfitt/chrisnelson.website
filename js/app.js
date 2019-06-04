var portfolio_load = $('.portfolio-full');
var form = $("#forms");
var lightbox = $("#lightbox");
var photography = $("#photography");
var responsive = $("#responsive");
var video_player = $("#video-player");
var web_app = $("#web-app");
var svg = $("#svg");
var design = $("#design");
var indreams = $("#indreams");
var accessible = $("#accessible");
var gallery_item = $(".gallery-item");
var ajax_close = $(".close-expandable");
var nerro = $("#nerro");
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
nerro.click(function(){
  portfolio_load.load("ajax-files/nerro.html");
});
indreams.click(function(){
  portfolio_load.load("ajax-files/dreamswrapper.html");
});


$(function() {

    // Get the form.
    var form = $('#ajax-contact');

    // Get the messages div.
    var formMessages = $('#form-messages');

    // Set up an event listener for the contact form.
    $(form).submit(function(e) {
        // Stop the browser from submitting the form.
        e.preventDefault();

        // Serialize the form data.
        var formData = $(form).serialize();

        // Submit the form using AJAX.
        $.ajax({
            type: 'POST',
            url: $(form).attr('action'),
            data: formData
        })
        .done(function(response) {
            // Make sure that the formMessages div has the 'success' class.
            $(formMessages).removeClass('error');
            $(formMessages).addClass('success');

            // Set the message text.
            $(formMessages).text("Message sent");

            // Clear the form.
            $('#name').val('');
            $('#email').val('');
            $('#message').val('');
            $('#phone').val('');
        })
        .fail(function(data) {
            // Make sure that the formMessages div has the 'error' class.
            $(formMessages).removeClass('success');
            $(formMessages).addClass('error');

            // Set the message text.
            if (data.responseText !== '') {
                $(formMessages).text(data.responseText);
            } else {
                $(formMessages).text('An error occured and your message could not be sent.');
            }
        });

    });

});
