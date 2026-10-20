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
          <p class="text">${obj.text}</p>
          <input id="editInput" type="text" value="${obj.text}" />
          <div>
              <button class="dltBtn">Delete</button>
              <button class="editBtn">Edit</button>
              <button class="saveBtn">Save</button>
              </div>`;

      let dltBtn = div.querySelector(".dltBtn");
      dltBtn.addEventListener("click", () => {
        deleteData(obj.id);
      });

      let text = div.querySelector(".text");
      let editInput = div.querySelector(".editInput");
      let editBtn = div.querySelector(".editBtn");
      let saveBtn = div.querySelector(".saveBtn");

      editBtn.addEventListener("click", () => {
        editBtn.style.display = "none";
        saveBtn.style.display = "inline";
        text.style.display = "none";
        editInput.style.display = "inline";
      });
      saveBtn.addEventListener("click", () => {
        editBtn.style.display = "inline";
        saveBtn.style.display = "none";
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
