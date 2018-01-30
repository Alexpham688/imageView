$(document).ready(function(){

  var drag = $('#drag');
  var container = $('#container');
  var after = $('.after');

  Draggable.create(drag, {
    type: 'left',
    bounds: container,
    onDrag: updateImages
  });

  function updateImages(){
    TweenLite.set(after, {width: drag.css('left')});
  }
  //intro animation
  animateTo(375);

  $('.start').on('click', function(){
    animateTo(750);
  });

  $('.middle').on('click', function(){
    animateTo(375)
  })
  $('.end').on('click', function(){
    animateTo(0);
  });

  function animateTo(_left) {
    TweenLite.to(drag, 1, {left:_left, onUpdate: updateImages});
  }

  container.on('click', function(){
    var eventLeft = event.clientX - container.offset().left;
    animateTo(eventLeft);
  });

});