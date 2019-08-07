"use strict";

//Description: This script will add and remove images from a page as a user based on the a selection from a 
//dropdown box.
//Author: Cate Speakman
var images = [
    { src: "images/biking.jpg", alt: "biking" },
    { src: "images/boardgames.jpg", alt: "boardgames" },
    { src: "images/ferriswheel.jpg", alt: "ferriswheel" },
    { src: "images/fishing.jpg", alt: "fishing" },
    { src: "images/minigolf.jpg", alt: "minigolf" },
    { src: "images/parasailing.jpg", alt: "parasailing" },
    { src: "images/rockclimbing.jpg", alt: "rockclimbing" },
    { src: "images/rollercoaster.jpg", alt: "rollercoaster" }
];

function addImage()
{
//When the user clicks the button get the data off the screen

    const activities = document.getElementById("activities");
    let userSelect = activities.options[activities.selectedIndex].value;

    for (let i = 0; i < images.length; i++) 
    {
        if (userSelect == images[i].alt) 
        {
            let img = document.createElement("img");
            img.src = images[i].src;
            img.alt = images[i].alt;
            console.log (images[i].alt);

            let locationDiv = document.getElementById("locationDiv");
            locationDiv.appendChild(img);

        }
    }
}


function init() {


    let addBtn = document.getElementById("addBtn");
    // DO NOT PUT PARENTHESIS AFTER FUNCTION NAME ON EVENT HANDLER
    //AND DO NOT PARAMETERS addBtn.onclick = addImage(userSelect,images);
    addBtn.onclick=addImage;

    /*const removeBtn = document.getElementById("removeBtn");
    removeBtn.onclick = removeImage;*/
}

window.onload = init;
