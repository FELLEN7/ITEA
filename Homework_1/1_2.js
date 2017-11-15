



var child = document.createElement("header");
var a = document.createElement("a");
var App = document.getElementById("App");
a.setAttribute("href", "http://google.com.ua");
App.appendChild(child, App);
child.appendChild(a, child[0]);
var img = document.createElement("img");
img.setAttribute("src","https://www.google.com.ua/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png");
a.appendChild(img, a[0]);

var div = document.createElement("div");
div.classList.add("menu");
App.appendChild(div, App);
var a = []
for(var i=0; i<3; i++)
{ 
	a[i] = document.createElement("a");
	a[i].setAttribute("href", "#");
	div.appendChild(a[i],div);
}

