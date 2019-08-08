"use strict";

//Description: This script will populate a table based off a user's selection in a dropdown
//Author: Cate Speakman


 

function getTour()
{
//When the user clicks the button get the data off the screen

    const tourList = document.getElementById("tourList");
    let userSelect = tourList.options[tourList.selectedIndex].text;

  /*  let priceRange = document.getElementById("priceRange").value;
    priceRange = Number(priceRange);*/
    
    let tours = [
        {category: "Museum Tours", title: "A Touch Tour at the Smithsonian Air And Space Museum", price: 45.00},
        {category: "Museum Tours", title: "A Tour of TV Sets at the American History Museum", price: 15.00},
        {category: "Museum Tours", title: "Dinosaurs are Alive at the Natural History Museum", price: 65.00},
        {category: "Food Tours", title: "Squeezing Things at the Farmers Market", price: 12.00},
        {category: "Food Tours", title: "Murder Mystery at the Vineyard", price: 32.00},
        {category: "Food Tours", title: "101 Ways to Server Brussel Sprouts", price: 8.00},
        {category: "Adventure Tours", title: "Ziplining the Poconos", price: 115.00},
        {category: "Adventure Tours", title: "Water Skiing the Amazon", price: 4015.00},
        {category: "Adventure Tours", title: "Parasailing Iceland", price: 3215.00},
        {category: "Adventure Tours", title: "Kayaking to Antarctica", price: 3910.00},
        {category: "Adventure Tours", title: "National Zoo: How to Grab a Skunk by the Neck", price: 80.00}
     ];

     let table = document.getElementById("tours");
     table.innerHTML = "";
     
     let header = table.createTHead();
     let row = header.insertRow(0);
     let cell1 = row.insertCell(0);
     cell1.innerHTML = "Title";
     cell1.style.fontWeight = "bold";
     let cell2 = row.insertCell(1);
     cell2.innerHTML = "Price";
     cell2.style.fontWeight = "bold";
     


    for (let i = 0; i < tours.length; i++) 
    {
        if (userSelect == tours[i].category)
        {
            
            let row = table.insertRow(table.rows.length);
            let cell1 = row.insertCell(0);
            cell1.innerHTML = tours[i].title;
            let cell2 = row.insertCell(1);
            cell2.innerHTML = tours[i].price.toFixed(2);  
        }
    }
}


function getTourByPrice()
{
//When the user clicks the button get the data off the screen
    

    let priceRange = document.getElementById("priceRange").value;
    priceRange = Number(priceRange);
       
    let tours = [
        {category: "Museum Tours", title: "A Touch Tour at the Smithsonian Air And Space Museum", price: 45.00},
        {category: "Museum Tours", title: "A Tour of TV Sets at the American History Museum", price: 15.00},
        {category: "Museum Tours", title: "Dinosaurs are Alive at the Natural History Museum", price: 65.00},
        {category: "Food Tours", title: "Squeezing Things at the Farmers Market", price: 12.00},
        {category: "Food Tours", title: "Murder Mystery at the Vineyard", price: 32.00},
        {category: "Food Tours", title: "101 Ways to Server Brussel Sprouts", price: 8.00},
        {category: "Adventure Tours", title: "Ziplining the Poconos", price: 115.00},
        {category: "Adventure Tours", title: "Water Skiing the Amazon", price: 4015.00},
        {category: "Adventure Tours", title: "Parasailing Iceland", price: 3215.00},
        {category: "Adventure Tours", title: "Kayaking to Antarctica", price: 3910.00},
        {category: "Adventure Tours", title: "National Zoo: How to Grab a Skunk by the Neck", price: 80.00}
     ];
//this starts the build of the table
     let table = document.getElementById("tours");
     table.innerHTML = "";
     
     let header = table.createTHead();
     let row = header.insertRow(0);
     let cell1 = row.insertCell(0);
     cell1.innerHTML = "Title";
     cell1.style.fontWeight = "bold";
     let cell2 = row.insertCell(1);
     cell2.innerHTML = "Price";
     cell2.style.fontWeight = "bold";
     

//this is building the table from the text box for price range

    for (let i = 0; i < tours.length; i++) 
    {
        if (priceRange > tours[i].price)
        {
            
            let row = table.insertRow(table.rows.length);
            let cell1 = row.insertCell(0);
            cell1.innerHTML = tours[i].title;
            let cell2 = row.insertCell(1);
            cell2.innerHTML = tours[i].price.toFixed(2);  

        }
    }
}


function init() {

    let priceBtn = document.getElementById("priceBtn");
    priceBtn.onclick=getTourByPrice;

    let addBtn = document.getElementById("addBtn");
    addBtn.onclick=getTour;

    }

window.onload = init;
