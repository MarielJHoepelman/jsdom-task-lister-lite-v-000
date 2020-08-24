const myFunction = (event) => {console.log(event)}

document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector("#create-task-form")
  let list = document.querySelector("#tasks");


  form.addEventListener('submit', event =>{
    let input = document.querySelector("#new-task-description").value;
    list.innerHTML += `<li> ${input} <button>Click me</button></li>`;
    event.preventDefault();
  });


});
