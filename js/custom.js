$(document).ready(function(){
    //smoothScroll
		$('a').smoothScroll({
		offset:10,
		speed:600,
  
  
    });
  
  //viewportChecker
  	$('*[data-animate]').addClass('hidee').each(function(){
      $(this).viewportChecker({
        classToAdd: 'showw animated ' + $(this).data('animate'),
        classToRemove: 'hidee',
        offset: '30%'
      });
    });
  
  //-------
  
  
});
