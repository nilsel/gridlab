

$('document').ready(function(){

  $('.tile').hover(
    function(){
      $(this).find('.tile-img').addClass('hoover');
    },
    function(){
      $(this).find('.tile-img').removeClass('hoover');
    });

  $('.tile.flipmode .link').click(
    function(){
      // console.log($(this).parents('.tile'));
      $(this).parents('.tile').toggleClass('flipped');
  });

  $('.grid-item .tile-img').click(function(){
    var elem = $(this).find('img');
    elem.addClass('slide-out-blurred-top');
    setTimeout(function(){
      elem.removeClass('slide-out-blurred-top').addClass('slide-in-blurred-top');
    }, 1000);
  })

  $('.grid-item strong').click(function(){
    $(this).parent().find('.tile-img img').trigger('click');
  });


  $("select[data-widget=chosenSelect]").chosen();
  $("select[data-widget=chosenSelect]").chosen().change(
    function(e){
      // console.log('yay i changed', e.target.value);
      $(this).parents('.tile').find('.tile-img img').trigger('click');

    }
  );


});