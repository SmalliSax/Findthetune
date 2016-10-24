$(document).ready(function(){

if(/iPhone|iPod|Android|iPad/.test(window.navigator.platform)){
$(document)
.on('focus', 'textarea,input,select', function(e) {
$('.footer, .navbar-fixed-top').css('position', 'absolute');
})
.on('blur', 'textarea,input,select', function(e) {
$('.footer, .navbar-fixed-top').css('position', '');
});
}
  
  var i = -1;
  
   var getMessage = function () {
            var msgs = ['Repeat: ON',
                'Repeat: OFF'
         ];
          i++;
            if (i === msgs.length) {
                i = 0;
            }
            return msgs[i];
        };

  $('.repeatTrack').click(function(){
    toastr.success(getMessage);
  });

//   var senseSpeed = 5;
//   var previousScroll = 0;
//   $(window).scroll(function(event){
//    var scroller = $(this).scrollTop();
//    if (scroller-senseSpeed > previousScroll){
//     $(".container-fluid").filter(':not(:animated)').fadeOut();
//   } else if (scroller+senseSpeed < previousScroll) {
//     $(".container-fluid").filter(':not(:animated)').fadeIn(200);
//   }
//   previousScroll = scroller;
// });

  $('.toggler').click(function(){
    $('#popupWindow').toggle('1000');
    $("i",this).toggleClass("fa fa-chevron-up fa fa-chevron-down");

  });

  $('.playHistory').click(function(){
    var hidden = $('.playlist');
    if (hidden.hasClass('visible')){
      hidden.animate({"right":"-1000px"}, "slow").removeClass('visible');
    } else {
      hidden.animate({"right":"0px"}, "slow").addClass('visible');
    }
  });


});