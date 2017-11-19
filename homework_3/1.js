


var picture = document.createElement("img");
var parrent = document.getElementById("slider");
parrent.appendChild(picture); 
var images = ['img/cat1.jpg', 'img/cat2.jpg', 'img/cat3.jpg', 'img/cat4.jpg', 'img/cat5.jpg', 'img/cat6.jpg', 'img/cat7.jpg', 'img/cat8.jpg'];
var current_position = 0;
var next = document.getElementsByClassName("NextSlide");
var prev = document.getElementsByClassName("PrevSlide");
var transperent = 1;
next[0].addEventListener("click", nextSlide);
prev[0].addEventListener("click", prevSlide);

window.onload = function()
{
  picture.setAttribute("src", images[current_position]);
}

function start()
{
	next[0].removeEventListener("click", nextSlide);
	prev[0].removeEventListener("click", prevSlide);
  var start = setInterval(function () {
   	if(transperent >= 0){
   	parrent.style.opacity = transperent;
   	transperent -= 0.1;
   }
   else clearInterval(start);
   }, 50); 
}

function end()
{
   var end = setInterval(function () {
   if(transperent <= 1){
   	parrent.style.opacity = transperent;
   	transperent += 0.1;
   }
   else clearInterval(end);
   
} , 50);
setTimeout(function () {
next[0].addEventListener("click", nextSlide);
prev[0].addEventListener("click", nextSlide);
}, 700);
	
}



function nextSlide()
{  
   
   start();
   setTimeout(function ()
    {
   	if(current_position < images.length-1)
	{
		current_position +=1;
		picture.setAttribute("src", images[current_position]);
    }
    else
    {
    	current_position = 0;
    	picture.setAttribute("src", images[current_position]);
    }
    end();
   }, 900);


}

function prevSlide()
{
	start();

	setTimeout(function (){
	if(current_position > 0)
	{
		current_position -=1; 
	 	picture.setAttribute("src", images[current_position]);
    }
    else
    {
    	current_position = images.length-1;
    	picture.setAttribute("src", images[current_position]);
    }
    end();
} , 700); 
}

