console.log("Your index.js file is loaded correctly!");

$(document).ready(function(){

    //Check to see if the window is top if not then display button
    $(window).scroll(function(){
       if ($(this).scrollTop() > 100) {
            $('.scroll_up_button, arrow').fadeIn();
        } else {
            $('.scroll_up_button, arrow').fadeOut();
        }
    });

    //Click event to scroll to top
    $('.scroll_up_button, arrow').click(function(){
       $('html, body').animate({scrollTop : 0},800);
        return false;
   });

}); 





