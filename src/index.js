const myFunction = () => {console.log("here")}
document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector("#create-task-form")


  form.addEventListener('submit', event =>{
    let input = document.querySelector("#new-task-description").value;
    let list = document.querySelector("#tasks");
    list.innerHTML += `<li> ${input} <button onclick="myFunction()">Click me</button></li>`;
    event.preventDefault();
  });
});
