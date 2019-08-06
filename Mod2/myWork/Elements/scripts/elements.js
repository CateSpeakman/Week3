"use strict";

//Description: This script will put a border around each paragraph with image
//Author: Cate Speakman


function init()
{
        const allParagraph = document.getElementsByClassName("imageGroup")

        let len = allParagraph.length
        for (let i=0; i<len; i++)
        {
            allParagraph[i].style.border = "10px solid red";
        }
 }
    
window.onload = init;
