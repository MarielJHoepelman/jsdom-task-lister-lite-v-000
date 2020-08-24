document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector("#create-task-form")

  form.addEventListener('submit', event =>{
    let input = document.querySelector("#new-task-description").value;
    let list = document.querySelector("#tasks");
    
    event.preventDefault();
  });
});
