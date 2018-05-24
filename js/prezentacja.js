var slideIndex = 1;


// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

//obsluga klawiatury
$(document).keydown(function(event) {
  if(event.keyCode == 37){
    showSlides(slideIndex -= 1);
  }
  if (event.keyCode == 39){
    showSlides(slideIndex += 1);
  }
  
});


function showSlides(n) {
  var i;
  var dots = document.querySelectorAll(".dots");
  var slides = document.querySelectorAll(".myslides");


  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display ='block'; 
  dots[slideIndex-1].className += " active";
}

showSlides(slideIndex);