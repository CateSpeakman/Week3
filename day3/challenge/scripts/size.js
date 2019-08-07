"use strict";

//Description: This script will change the size of the text based on the link that the user clicks on.
//Author: Cate Speakman

function changeParaSize(percentChange)
{
    const paras = document.querySelectorAll("p");

    let len = paras.length;
    for (let i=0; i<len; i++)
    {
        let para = paras[i];
    }
 if (para.style.fontSize == "0 em")
 {
     para.style.fontSize == "1.0 em";
 }

 
+
function getPercentChange()
{
    let size = parseFloat(para.style.fontSize);
}

function init()
{

    let size = parseFloat(para.style.fontSize);

    size =
   }



    let largerBtn  = document.getElementById("larger")
    largerBtn.onclick = changeParaSize;
    
}



window.onload = init;