document.getElementById("slider-left").onclick = sliderLeft;
let left= 0;

function sliderLeft(){
   let polosa = document.getElementById("polosa");
   left=left-128;
   if(left< -384) {
       left=0;
   }
   polosa.style.left = left+'px';
}