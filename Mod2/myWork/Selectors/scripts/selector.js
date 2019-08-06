"use strict";

//Description:  This script will display an alert with the name and address of the user input once
//the user clicks submit button.
//Author: Cate Speakman


function getAddress() {

    const msgAddress = document.querySelectorAll("input")
    let msg = " ";

    for (let i = 0; i <msgAddress.length; i++) {
        msg = msg + msgAddress[i].value + "\n";

    }
    alert(msg);

}
function init() {
    const submitBtn = document.getElementById("submitBtn")
    submitBtn.onclick = getAddress;
}

window.onload = init;
