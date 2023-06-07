"use strict";

const todoidBtn = document.getElementById("todoidBtn")
const todoid = document.getElementById("todoid")
const output = document.getElementById("output")

window.onload = init;

function init(){
    todoidBtn.onclick = onTodoIdBtnClick;
    console.log("init...")
}


function onTodoIdBtnClick(){
    console.log("button click...")
    
    fetch("https://jsonplaceholder.typicode.com/todos/" + todoid.value)
    .then(response => response.json())
    .then(processIncomingTodoData);

}


function processIncomingTodoData(data){
        console.log(data);

        let message = `TODO: ID:${data.id} ${data.title} Completed: ${data.completed} User: ${data.userId}`
        output.innerHTML = message;
};