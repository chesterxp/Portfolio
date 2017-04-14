$(document).ready(function () {
  //---------------------------smoothScroll-------------------------//
  $('a').smoothScroll({
    offset: 10
    , speed: 600
  , });
  //--------------------------//smoothScroll-------------------------//
  
  
  //-----------------------viewportChecker-------------------------------//
  $('*[data-animate]').addClass('hidee').each(function () {
    $(this).viewportChecker({
      classToAdd: 'showw animated ' + $(this).data('animate')
      , classToRemove: 'hidee'
      , offset: '30%'
    });
  });
  //-----------------------//viewportChecker-------------------------------//
  
  
  //-----------------------------form-------------------------------------//
  $('#userName').change(function () {
    var name = $(this).val();
    var regName = /^[a-zA-ZąćęłńóśżźĄĆĘŁŃÓŚŻŹ]{3,}$/;
    if (!name.match(regName)) {
      document.getElementById('userNameError').innerHTML = "Podaj prawidłowe imie";
    }
    else {
      document.getElementById('userNameError').innerHTML = "";
    };
  });
  $('#userTel').change(function () {
    var tel = $(this).val();
    var regTel = /[0-9]{9,}/;
    if (!tel.match(regTel)) {
      document.getElementById('userTelError').innerHTML = "Podaj prawidłowy nr telefonu";
    }
    else {
      document.getElementById('userTelError').innerHTML = "";
    };
  });
  $('#userEmail').change(function () {
    var mail = $(this).val();
    var regEmail = /^[a-z0-9\._%-]+@[a-z0-9\.-]+\.[a-z]{2,4}$/i;
    if (!mail.match(regEmail)) {
      document.getElementById('userEmailError').innerHTML = "Podaj prawidłowy adres email";
    }
    else {
      document.getElementById('userEmailError').innerHTML = "";
    };
  });
  $('#userMessage').change(function () {
    var textarea = $(this).val();
    var regText = /[^\s{2}] /;
    if (!textarea.match(regText)) {
      document.getElementById('userMessageError').innerHTML = "Podaj prawidłową treśc";
    }
    else {
      document.getElementById('userMessageError').innerHTML = "";
    };
  });
  //-----------------------------//form-------------------------------------//
  
  //-----------------------------ScrollUp-------------------------------------//
  $(window).scroll(function(){
    if($(this).scrollTop()>800){
      $('#scrollUp').fadeIn(2000);
      $('#nav2').fadeIn(2000);
    }
    else {
      $('#scrollUp').fadeOut();
      $('#nav2').fadeOut();
    }
  });
  //-----------------------------//ScrollUp-------------------------------------//
  
    //-----------------------------Nav2-------------------------------------//
//  $('#nav2').hover(function () {
//   $(this).stop().animate({
//     'left': 0
//   });
// }, function () {
//   $(this).stop().animate({
//     'left': '-50px'
//   });
// });
    //-----------------------------//Nav2-------------------------------------//
  
});