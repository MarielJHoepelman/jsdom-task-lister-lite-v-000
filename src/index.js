document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector("#create-task-form")
  const list = document.querySelector("#tasks");

  form.addEventListener('submit', event =>{
    let input = document.querySelector("#new-task-description").value;
    list.innerHTML += "<li>"
    list.innerHTML += input
    list.innerHTML += "<button>x</button>"
    list.innerHTML += "</li>";
    event.preventDefault();
  });

  list.addEventListener('click', event =>{
    if (event.target.nodeName === "BUTTON"){
      event.target.parentElement.remove()
    }
  })

});
