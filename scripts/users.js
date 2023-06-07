"use strict";

const tablebody = document.getElementById("tablebody");

window.onload = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then( r => r.json())
    .then( users => {

        for( let user of users){
            console.log(user);
            addRowForUser(user);
        }

    });

function addRowForUser(user){
    let newrow = tablebody.insertRow(-1);
    let cell1 = newrow.insertCell(0);
    cell1.innerHTML = user.name;
}


}