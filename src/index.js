document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector("#create-task-form")
  const list = document.querySelector("#tasks");

  form.addEventListener('submit', event =>{
    let input = document.querySelector("#new-task-description").value;
    list.innerHTML += `<li> ${input} <button>Click me</button>
      <select>
        <option value="">None</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
    </li>`;
    event.preventDefault();
  });

  list.addEventListener('click', event =>{
    if (event.target.nodeName === "BUTTON"){
      event.target.parentElement.remove()
    }
  })

  list.addEventListener('change', event =>{
    debugger;
  })

});
