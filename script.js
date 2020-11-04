console.log('Mansi Website!');


//on hover, highlights nav elements - HOME
var container = document.getElementById("container");
container.onmouseover = container.onmouseout = homeHover;

function homeHover(H)
{
 if (H.type =='mouseover'){
   H.target.style.background = "#003462"
 }
  if (H.type =='mouseout'){
   H.target.style.background = '' 
    
  }
}

//on hover, highlights nav elements - ABOUT
var container1 = document.getElementById("container1");
container1.onmouseover = container1.onmouseout = homeHover1;

function homeHover1(H)
{
 if (H.type =='mouseover'){
   H.target.style.background = "#C9C9F4"
 }
  if (H.type =='mouseout'){
   H.target.style.background = '' 
    
  }
}

//on hover, highlights nav elements - ART
var container2 = document.getElementById("container2");
container2.onmouseover = container2.onmouseout = homeHover2;

function homeHover2(H)
{
 if (H.type =='mouseover'){
   H.target.style.background = "#C9C9F4"
 }
  if (H.type =='mouseout'){
   H.target.style.background = '' 
    
  }
}

//on hover, highlights nav elements - COMPUTER SCIENCE
var container3 = document.getElementById("container3");
container3.onmouseover = container3.onmouseout = homeHover3;

function homeHover3(H)
{
 if (H.type =='mouseover'){
   H.target.style.background = "#C9C9F4"
 }
  if (H.type =='mouseout'){
   H.target.style.background = '' 
    
  }
}