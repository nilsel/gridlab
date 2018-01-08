

$('document').ready(function(){

  $('.tile').hover(
    function(){
      $(this).find('.tile-img').addClass('hoover');
    },
    function(){
      $(this).find('.tile-img').removeClass('hoover');
    });

  $('.tile.flipmode').click(
    function(){
      // console.log($(this).parents('.tile'));
      // $(this).parents('.tile').toggleClass('flipped');
      $(this).toggleClass('flipped');
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

  $('.grid-item[data-mode="link"]').click(function(){
    console.log($(this).attr('data-target'));
    window.location = $(this).attr('data-target');
  })



/* set vars */
var firstChar = false,
    visible = false,
    pissed = false,
    $document = $(document),
    $spotlightWrapper = $('#spotlight_wrapper'),
    $spotlight = $('#spotlight');

function hideSpotlight(){
  $spotlightWrapper.hide();
  $spotlight.val('');
  visible = false;
}

function showSpotlight(){
  $spotlightWrapper.show();
  $spotlight.focus();
  visible = true;
}


/* add listener for keydown to detect shortcut */
$document.on('keydown',function(event){
  //17 = CTRL
  //32 = SPACE
  
  //save char code in var if it is ctrl
  if(event.which == 17){
    firstChar = event.which;
  }
  
  //if firstchar is ctrl and the current keydown event char is space, continue
  if(firstChar == 17 && event.which == 32){

    //check if spotlight is already visible
    if(!visible){

      //show spotlight
      showSpotlight();

    } else {

      //hide spotlight
      hideSpotlight();

    }
    
    //delete firstchar var
    firstChar = false;
    
  }  
  
  
  if(event.which == 13 && !pissed){
    pissed = true;

    var inputText = $spotlight.val();
    setTimeout(function(){ alert('input: ' + inputText); }, 0);
    hideSpotlight();
  }
  
});

// delete firstchar var on keyup to ensure "shortcut" behaviour and that ther spotlight doesn't show up if not wanted
$document.on('keyup',function(){
  firstChar = false;
});

// stop propagating if clicked within the spotlight
$spotlight.on('click', function(e){
    e.stopPropagation();
});

// hide spotlight when clicked anywhere
$document.on('click',function(){
  hideSpotlight();
});



});
