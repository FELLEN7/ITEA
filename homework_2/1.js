
var button = document.getElementsByClassName('showButton');
var tabs = document.getElementsByClassName('tab');
button[0].onclick = function ()
{
	hideAllTabs();
	tabs[0].classList.add("active");
}
button[1].onclick = function ()
{
	hideAllTabs();
	tabs[1].classList.add("active");
}
button[2].onclick = function ()
{
	hideAllTabs();
	tabs[2].classList.add("active");
}

function hideAllTabs()
{
	for(var i=0;i<tabs.length; i++)
	{	tabs[i].classList.remove("active");}
}

/*var el = document.getElementById('user');
   id = el.dataset.id; */