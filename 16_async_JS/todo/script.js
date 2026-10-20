let todoContainerDiv = document.querySelector(".todoContainer");

let API = "https://6ad7588d95e98f36aef25219.mockapi.io/api/v1/tasks";

async function fetchData() {
  let response = await fetch(API);
  let data = await response.json();
  data.forEach((obj) => {
    let div = document.createElement("div");
    div.className = "todo";
    div.innerHTML = `
        <p>${obj.text}</p>
        <div>
            <button>Delete</button>
            <button>Edit</button>
        </div>`;
    todoContainerDiv.append(div);
  });
}
fetchData();
