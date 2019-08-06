"use strict";

//Description: This script will determin what the language/culture is for a website.
//Author: Cate Speakman



function sayHello() {
  let culture = "Language of the browser: " + navigator.language;
  document.getElementById("demo").innerHTML = culture;

  if (navigator.language == "en")
  {
      alert("Hello, World");
  }
  else if (navigator.language == "es-MX")
  {
      alert ("Hola Mundo");
  }
  else if (navigator.language == "de")
  {
      alert ("Hallo Welt");
  }
}

function init()
{
        const languageBtn = document.getElementById("languageBtn")
        languageBtn.onclick = sayHello;
 }
    
window.onload = init;