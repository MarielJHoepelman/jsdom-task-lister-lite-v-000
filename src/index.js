document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#create-task-form")
  const list = document.querySelector("#tasks");

  form.addEventListener('submit', event =>{
    let input = document.querySelector("#new-task-description").value;
    list.innerHTML += `<li style="color: green"> ${input} <button>Click me</button>
      <select>
        <option value="green">Low</option>
        <option value="yellow">Medium</option>
        <option value="red">High</option>
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
    event.target.parentElement.style.color = event.target.value;
  })

});
