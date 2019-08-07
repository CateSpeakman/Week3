"use strict";

//Description: This script will assign the source and alt tags to the images located on the home page.
//Author: Cate Speakman


function assignImagesInfo() {


    const imageList = document.querySelectorAll("img");

    let imageFiles = ["images/fun1.jpg", "images/spongebob.png", "images/stars.jpg"];

    let imageDescriptions = ["the word FUN", "Spongebob and Plankton with the word FUN", " the word FUN with stars around it"];
 

    for (let i = 0; i < imageList.length; i++) {

         imageList[i].src =imageFiles[i];
         imageList[i].alt = imageDescriptions[i];

         imageList[i].style.cssText = "border-radius:50%";
         imageList[i].style.border = "2px solid black";

         console.log(imageList[i].alt);
        
    }

    
}

window.onload = assignImagesInfo;
