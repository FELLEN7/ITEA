

var post_box = document.getElementById("PostBox");

var author = document.getElementById("author");
var text = document.getElementById("text");
var link = document.getElementById("link");
var preview = document.getElementById("preview");
var button_send_post = document.getElementById("SendPost");
//patterns
var author_pattern = /([A-Z]){1}([a-z]){3,20}/;
var text_pattern = /[a-z_ -A-Z]{3,4000}/;
var link_pattern = /(http|https):\/\/[a-z_\/\.\-0-9]+\.\w+/g;

button_send_post.addEventListener("click", Constructor);
link.addEventListener("input", PreviewImage);
button_send_post.addEventListener("click", MakePost);



function PreviewImage()
{
  if(link_pattern.test(link.value) == false)
  {
    link.style.border = "1px solid red";
  }
  else
  {
    preview.setAttribute("src", link.value);
    link.style.border = "0px";
  }
}

function CountLikes(e)
{
  var number_likes = e.target.childNodes[1];
  var number = Number(number_likes.innerHTML);
  number++;
  number_likes.innerHTML = number;
}



function test()
{
  if(author_pattern.test(author.value) == false)
  {
    author.style.border = "1px solid red";
    return false;
  }
  else
  {
    author.style.border = "0px";
  }
  if(text_pattern.test(text.value) == false)
  {
    text.style.border = "1px solid red";
    return false;
  }
  else
  {
    text.style.border = "0px";
  }
}

function ShowComments(e)
{
  var target = e.target;
  var div = target.parentNode;
  var control = div.parentNode;
  var post = control.parentNode;
  if(post.childNodes[5].classList.contains("BoxComments"))
  {
    var box_comments = post.childNodes[5];
  }
  else
  {
    var box_comments = post.childNodes[6];
  }
  if(box_comments.style.display == "none")
  {
    box_comments.style.display = "";
  }
  else
  {
    box_comments.style.display = "none";
  }

}

function ShowCommentsConstructor(e)
{
  var target = e.target;
  var div = target.parentNode;
  var control = div.parentNode;
  var post = control.parentNode;
  if(post.childNodes[6].classList.contains("ConstructorComments"))
  {
    var comment_constructor = post.childNodes[6];
  }
  else
  {
    var comment_constructor = post.childNodes[7];
  }
  if(comment_constructor.style.display == "none")
  {
     comment_constructor.style.display = "";
  }
  else
  {
    comment_constructor.style.display = "none";
  }
 
}

function ClearConstructor()
{
  author.value = "";
  text.value = "";
  link.value = "";
  preview.setAttribute("src","#");
}


function MakePost()
{ 
  if(test()==false)return false;
  var post = new Constructor(author.value, text.value, link.value);
  post.addPost();
  ClearConstructor();
  link.style.border = "0px";
}

function SendComment(e)
{
var date = new Date();
var target = e.target;
var constructor_comments = target.parentNode;
var post = constructor_comments.parentNode;
var control = post.childNodes[4];
var div = control.childNodes[1];
var button_show_comment = div.childNodes[0];  ////////////////////////////////////////
var number_comment = button_show_comment.childNodes[1];
number_comment = Number(number_comment.innerHTML);
var name_author = constructor_comments.childNodes[0];
 if(author_pattern.test(name_author.value) == false)
  {
    name_author.style.border = "1px solid red";
    return false;
  }
  else
  {
    name_author.style.border = "0px";
  }
var text = constructor_comments.childNodes[1];
if( text_pattern.test(text.value) == false)
{
  text.style.border = "1px solid red";
  return  false;
}
else
{
  text.style.border = "0px";
}
var post = constructor_comments.parentNode;
var box_comments = post.childNodes[5];
var comment = document.createElement("div");//
var name_author_comment = document.createElement("h3");//
var p = document.createElement("p");

number_comment++;

button_show_comment.childNodes[1].innerHTML = number_comment;
name_author_comment.innerHTML = name_author.value + " " + date.getDay() + "-" + date.getMonth() + "-" + date.getFullYear();
p.innerHTML = text.value;

comment.classList.add("comment");

comment.appendChild(name_author_comment);
comment.appendChild(p);
box_comments.appendChild(comment);
constructor_comments.style.display = "none";
box_comments.style.display = "";
constructor_comments.childNodes[0].value = "";
constructor_comments.childNodes[1].value = "";
}


function ShowAllText(e)
{
  var target = e.target;
  var post = target.parentNode;
  var allText = post.childNodes[2];
  if(allText.classList.contains("allText"))
  {
    allText.classList.remove("allText");
    target.innerHTML = "less";
  }
  else
  {
    allText.classList.add("allText");
    target.innerHTML = "more";
  }
}


function Constructor(Author, Text, Link)//NameAuthor, Date, 
{
  this.author = Author;
  this.text = Text;
  this.link = Link;
  this.date = new Date();
  this.name_author = document.createElement("input");
  this.text_comment = document.createElement("textarea");
var post = document.createElement("div");
var h3 = document.createElement("h3");
var date = document.createElement("div");
var allText = document.createElement("p");
var more = document.createElement("button");
var likes = document.createElement("p");
var number_likes = document.createElement("p");
var img = document.createElement("img");
var control = document.createElement("div");
var div = document.createElement("div");
var button_show_comments = document.createElement("button");
var number_comment = document.createElement("p");
var button_write_comment = document.createElement("button");
var constructor_comments = document.createElement("div");
var comments_logo = document.createElement("p");//
var name_author = document.createElement("input");
var text_comment = document.createElement("textarea");
var box_comments = document.createElement("div");
var button_send_comment = document.createElement("button");

number_comment.innerHTML = 0;
more.innerHTML = "more";
comments_logo.innerHTML = "Comments";
button_show_comments.innerHTML = "Show Comments: ";
button_write_comment.innerHTML = "Write Comment";
button_send_comment.innerHTML = "Send";
h3.innerHTML = this.author;
allText.innerHTML = this.text;
date.innerHTML = this.date.getDay() + "-" + this.date.getMonth() + "-" + this.date.getFullYear();

img.setAttribute("src", this.link);
name_author.setAttribute("type", "text");
name_author.setAttribute("placeholder","Author");
box_comments.style.display="none";
constructor_comments.style.display = "none";

number_likes.innerHTML = 0;
likes.innerHTML = "Likes:";

more.classList.add("more");
allText.classList.add("allText");
button_show_comments.classList.add("ShowComments");
comments_logo.classList.add("title");
box_comments.classList.add("BoxComments");
text_comment.classList.add("TextComment");
button_send_comment.classList.add("SendComment");
name_author.classList.add("NameAuthorComment");
post.classList.add("post");
date.classList.add("date");
control.classList.add("control");
likes.classList.add("Likes");
number_likes.classList.add("NumberLikes");
button_write_comment.classList.add("WriteComment");
constructor_comments.classList.add("ConstructorComments");

likes.addEventListener("click", CountLikes);////
button_show_comments.addEventListener("click", ShowComments);
button_write_comment.addEventListener("click", ShowCommentsConstructor);
button_send_comment.addEventListener("click", SendComment);
more.addEventListener("click",ShowAllText);

box_comments.appendChild(comments_logo);
constructor_comments.appendChild(name_author);
constructor_comments.appendChild(text_comment);
constructor_comments.appendChild(button_send_comment);
likes.appendChild(number_likes);
control.appendChild(likes);
control.appendChild(div);
button_show_comments.appendChild(number_comment);
div.appendChild(button_show_comments);
div.appendChild(button_write_comment);
post.appendChild(h3);
post.appendChild(date);
post.appendChild(allText);
if(this.text.length > 500)
{
  post.appendChild(more);
}
post.appendChild(img);
post.appendChild(control);
post.appendChild(box_comments);
post.appendChild(constructor_comments);
  this.addPost = function()  
    {
      post_box.appendChild(post);
    }
return this;
}
