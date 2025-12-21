let input = document.querySelector("input");
let addBtn = document.querySelector("button");
let ul = document.querySelector("ul");

addBtn.addEventListener("click", function () {
  let task = input.value.trim();

  if (task === "") {
    alert("Please add a task");
    return;
  }

  let li = document.createElement("li");
  li.className = "list-group-item d-flex justify-content-between align-items-center";
  li.innerText = task;

  let delBtn = document.createElement("button");
  delBtn.innerText = "Delete";
  delBtn.className = "btn btn-danger btn-sm";

  delBtn.addEventListener("click", function () {
    li.remove();
  });

  li.appendChild(delBtn);
  ul.appendChild(li);

  input.value = "";
});
