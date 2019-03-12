$('.demo.sidebar')
  .sidebar('setting', 'transition', 'overlay')
  .sidebar('toggle')
;

$('.ui.basic.modal')
  .modal('show')
;

$(document)
.ready(function() {

  // show dropdown on hover
  $('.main.menu  .ui.dropdown').dropdown({
    on: 'hover'
  });
})
;