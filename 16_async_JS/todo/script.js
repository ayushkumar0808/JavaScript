let todoContainerDiv = document.querySelector(".todoContainer");
let taskInput = document.querySelector("#taskInput");
let btn = document.querySelector(".addBtn");

let API = "https://6ad7588d95e98f36aef25219.mockapi.io/api/v1/tasks";

async function fetchData() {
  let response = await fetch(API);
  let data = await response.json();
  if (data) {
    todoContainerDiv.innerHTML = "";
    data.forEach((obj) => {
      let div = document.createElement("div");
      div.className = "todo";
      div.innerHTML = `
          <p>${obj.text}</p>
          <div>
              <button class="dltBtn">Delete</button>
              <button>Edit</button>
          </div>`;
      let dltBtn = div.querySelector(".dltBtn");
      dltBtn.addEventListener("click", () => {
        deleteData(obj.id);
      });
      todoContainerDiv.append(div);
    });
  }
}
fetchData();

btn.addEventListener("click", addData);
async function addData() {
  let val = taskInput.value;
  let obj = { text: val };
  let response = await fetch(API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  });
  if (response.status === 201) {
    fetchData();
    taskInput.value = "";
  }
}

async function deleteData(id) {
  let response = await fetch(`${API}/${id}`, {
    method: "DELETE",
  });
  if (response.status === 200) {
    fetchData();
  }
}
