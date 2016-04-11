/**
 * Website start here
 */

$(document).ready(function ($) {
	loading();
	if ($(window).width() > 1200  ) {
		$('#fullpage').fullpage({
			anchors: ['firstPage', 'secondPage' , '3rdPage', '4thpage', '5thpage' , '6thpage', '7thpage', '8thpage', '9thpage', '10thpage', '11thpage', '12thpage', 'last'],
			navigation: true,
			navigationPosition: 'right',
			scrollBar: true,
			normalScrollElements: '.modal,#section24',
      fitToSection: false,
		 });

	}
	if ($(window).width() < 1200  ) { 
		$('#fullpage').fullpage({
			responsiveWidth: 1025
		});
	}
	  if ($(window).width() < 1200  ) { 
		$("#section1 .outer").attr('id', 'secondPage');
		 $('.btn-1').click(function(){			
			var val = $(this).attr('href');
			$('html,body').animate({
				scrollTop: $(val).offset().top
			}, 500);
		});
		$("#section12 .block-comment").attr('id', 'lastPage');
		 $('#go_to_comment').click(function(){			
			var val = $(this).attr('href');
			$('html,body').animate({
				scrollTop: $(val).offset().top
			}, 500);
		});
	  }
    
    var $window = $(window),
         flexslider;

    // tiny helper function to add breakpoints
    function getGridSize() {
        return (window.innerWidth < 600) ? 2 :
              (window.innerWidth < 769) ? 4 :
               (window.innerWidth < 1025) ? 5 :
               (window.innerWidth < 1368) ? 7 : 8;
    }

      

      $window.load(function() {
        $('.flexslider').flexslider({
          animation: "slide",
          animationSpeed: 1200,
          slideshowSpeed: 14000,
          animationLoop: false,
          itemWidth: 100,
          itemMargin: 40,
          move: 4,
          minItems: getGridSize(), // use function to pull in initial value
          maxItems: getGridSize(), // use function to pull in initial value
          start: function(slider){
            $('body').removeClass('loading');
            flexslider = slider;
          }
         
        });
      });

      // check grid size on resize event
      $window.resize(function() {
        var gridSize = getGridSize();

        flexslider.vars.minItems = gridSize;
        flexslider.vars.maxItems = gridSize;
      });

       $(window).scroll(function () {
            var e = $(window).scrollTop();
            if (e > 320) {
                $('#fp-nav').css("display", "block");
            } else {
               $('#fp-nav').css("display", "none");
            }
        }); 
       $('.left-side ul').css("height", $window.height() -100 );
	 if ($(window).width() < 1200  ) {  
		 if($(".btn-top").length > 0){
			$(window).scroll(function () {
				var e = $(window).scrollTop();
				if (e > 300) {
					$(".btn-top").show()
				} else {
					$(".btn-top").hide()
				}
			});
			$(".btn-top").click(function () {
				$('body,html').animate({
					scrollTop: 0
				})
			});
		}
	 } 
});
function onReady(){    
    $('#loading').fadeOut(500, function(){
        $(this).remove();
    });   
}
function loading() {
    var startTime = new Date().getTime();
    $('<div id="loading"><img src="./loading.gif" /></div>').appendTo('body');
    var allImages = $('img'),
    imgLength = allImages.length,
    countImage = 0;
    for(var i = 0; i < imgLength; i++){
        var img = new Image();
        img.onload = function(){
            countImage++;
            if(countImage == imgLength){
                var endTime = new Date().getTime();
                if(endTime - startTime > 500){
                    onReady();
                }else{
                    setTimeout(function(){
                        onReady();
                    },500 - (endTime - startTime));
                }
            }
        };
        img.onerror = function(){
            countImage++;if(countImage == imgLength){
               var endTime = new Date().getTime();
                if(endTime - startTime > 2000){
                    onReady();
                }else{
                    setTimeout(function(){
                        onReady();
                    },1000 - (endTime - startTime));
                }
            }
        };
        img.src = allImages.eq(i).attr('src');
    }    
}