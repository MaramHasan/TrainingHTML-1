// When the DOM is ready
$(function() {
  
    // Init ScrollMagic Controller
    var scrollMagicController = new ScrollMagic();
    
    // Create Animation for 0.5s
    var tween = TweenMax.to('#scene', 0.5, 
        {left: 300,
        
        }
    );
    var tween1 = TweenMax.to('#m ', 0.5, 
    {scale:(2.5,0),
    
    }
);
    // Create the Scene and trigger when visible
    var scene = new ScrollScene({
      triggerElement: '#scene',
      offset: 200 /* offset the trigger 150px below #scene's top */
    })
    .setTween([tween,tween1])
    .addTo(scrollMagicController);
    
    // Add debug indicators fixed on right side
     scene.addIndicators();
  });

