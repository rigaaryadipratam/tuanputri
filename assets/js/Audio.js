var x = document.getElementById("myAudio"); 

function playAudio() { 
  	if (x.paused){ 
    	x.play();
    }
	else{ 
    	x.pause();
    }	 
} 

$(function () {
  $('[data-toggle="tips1"]').tooltip()
})


//Get the button:
var mybutton = document.getElementById("play_btn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mybutton.style.opacity = "0.7";
  } else {
    mybutton.style.opacity = "initial";
  }
}

