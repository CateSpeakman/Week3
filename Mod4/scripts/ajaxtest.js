"use strict"

//Description: This script will test an ajax call.  A user can input an id number on a basic html page
// and the results will display in an HTMl table below.
//Author:Cate Speakman


window.onload = function () {
    let submitBtn = document.getElementById("submitBtn");
    submitBtn.onclick = doAjaxCall;
};//ends window onload

function doAjaxCall() {
    let user = document.getElementById("userinput");
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {


            let json = JSON.parse(this.responseText);

            let table = document.getElementById("idTable");
         //   table.innerHTML = "";

            let row1 = table.insertRow(0);
            let cell1_1 = row1.insertCell(0);
            cell1_1.innerHTML = "name";
            let cell2_1 = row1.insertCell(1);
            cell2_1.innerHTML = json.name;

            let row2 = table.insertRow(table.rows.length);
            let cell1_2 = row2.insertCell(0);
            cell1_2.innerHTML = "username";
            let cell2_2 = row2.insertCell(1);
            cell2_2.innerHTML = json.username;

            let row3 = table.insertRow(table.rows.length);
            let cell1_3 = row3.insertCell(0);
            cell1_3.innerHTML = "email";
            let cell2_3 = row3.insertCell(1);
            cell2_3.innerHTML = json.email;

            let row4 = table.insertRow(table.rows.length);
            let cell1_4 = row4.insertCell(0);
            cell1_4.innerHTML = "phone";
            let cell2_4 = row4.insertCell(1);
            cell2_4.innerHTML = json.phone;

            let row5 = table.insertRow(table.rows.length);
            let cell1_5= row5.insertCell(0);
            cell1_5.innerHTML = "website";
            let cell2_5 = row5.insertCell(1);
            cell2_5.innerHTML = json.website;

            let row6 = table.insertRow(table.rows.length);
            let cell1_6 = row6.insertCell(0);
            cell1_6.innerHTML = "id";
            let cell2_6 = row6.insertCell(1);
            cell2_6.innerHTML = json.id;
           
            
        }//this ends he if statement within on readystate change
    }//this ends the function of onreadystate change
    let url = "https://jsonplaceholder.typicode.com/users/" + userinput.value;
    xhr.open("GET", url, true);
    xhr.send();
};//this ends the do ajax call function