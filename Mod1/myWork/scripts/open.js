"use strict";

//Description: This script will open up a new window when a new button is clicked on screen to the associated website.
//Author: Cate Speakman

        let googleBtn = document.getElementById("googleBtn");
        googleBtn.onclick = function() {
            window.open("https://www.google.com");
        };

        let thehartfordBtn = document.getElementById("thehartfordBtn");
        thehartfordBtn.onclick = function() {
            window.open("https://www.thehartford.com");
        };

        let w3schoolsBtn = document.getElementById("w3schoolsBtn");
        w3schoolsBtn.onclick = function() {
            window.open("https://www.w3schools.com/js");
        };