"use strict";

//Description: This script will look for images with a certain alt property and then they will have a text 
//assigned a specified text.
//Author: Cate Speakman


function getImage() {

    const imageList = document.querySelectorAll("img:not([alt])");
    let text = "Graffiti Image";

    for (let i = 0; i <imageList.length; i++) {
        imageList[i].alt=text;

        console.log(imageList[i].alt);  
      }

    const list = document.images;
    
    for (let i=0; i <list.length; i++){

        let paraID = list[i].id.substr(5);
        let para = "para" + paraID;  // para is the string that contains the id of the paragraph(ex: "para1")
        let p = document.getElementById(para);  // p is the actual paragraph element that was found using para as the id
        p.innerHTML = list[i].alt;
    }
    
}

window.onload = getImage;