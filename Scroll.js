
// global vars
var viewer  = document.querySelector('.viewer'),
    frame_count  = 2,
    offset_value =50;

// init controller
var controller = new ScrollMagic.Controller();
/*
// build pinned scene
new ScrollMagic.Scene({
 triggerElement: '#sticky',
 duration: (frame_count * offset_value) + 'px',
})
.setPin('#sticky')
.addIndicators()
.addTo(controller);
*/
// build step frame scene
for (var i = 0, l = frame_count; i <= l; i++) {
  new ScrollMagic.Scene({
      triggerElement:('.frame'+i),
      offset:i * offset_value,
   
  
    })
    
    .setClassToggle(viewer, 'frame' + i)
  //  .addIndicators()
    .addTo(controller);
}