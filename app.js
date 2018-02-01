$(document).ready(function(){

  var drag = $('#drag');
  var container = $('#container');
  var after = $('.after');


  //creating drag
  Draggable.create(drag, {
    type: 'left',
    bounds: container,
    onDrag: updateImages
  });

  function updateImages(){
    TweenLite.set(after, {width: drag.css('left')});
  }


  //styling header and nav hover
  $('nav').hover( function(){
    $('header, nav, footer, #container').css({
      'color':'#00ffff',
      'border-color':'#00ffff',
      'border-style': 'solid'
    })
  }, function(){
    $('header, nav, footer, #container').css({
      'color':'#000',
      'border-color':'#fff',
      'border-style': 'solid'});
  // });
  });


    //intro animation
    animateTo(749);

   //when page loads animate covers
  $('.start').on('click', function(){
    animateTo(749)
  });

  //middle of page
  $('.middle').on('click', function(){
    animateTo(375);
  });

  //opening all
  $('.end').on('click', function(){
    animateTo(0)
  });

   //setting speed of drag
  function animateTo(_left) {
    TweenLite.to(drag, .8, {left:_left, onUpdate: updateImages});
  }

   //click on container to move drag
  container.on('click', function(){
    var eventLeft = event.clientX - container.offset().left;
    animateTo(eventLeft);
  });


});
