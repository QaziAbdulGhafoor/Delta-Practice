// To-Do
// let task = document.getElementById("task");
// let btn = document.querySelector(".add-btn");
// let tasks = document.querySelector(".values");

// // check.addEventListener("click", () => {
// //   console.log("task done");
// // });

// let ul = document.querySelector("ul");

// btn.addEventListener("click", () => {
//   if (task.value != "") {
//     let newTask = document.createElement("li");
//     newTask.innerHTML = `${ul.children.length + 1}. ${task.value}<button class="del-btn">❌</button>`;
//     ul.append(newTask);
//     task.value = "";
//     task.classList.remove("red");
//     updateTasks();
//   } else {
//     task.classList.add("red");
//   }
// });

// ul.addEventListener("click", (e) => {
//   if (e.target.classList.contains("del-btn")) {
//     e.target.parentElement.remove();
//     updateTasks();
//   }
// });
// ul.addEventListener("change", (e) => {
//   if (e.target.classList.contains("check-task")) {
//     if (e.target.checked) {
//       console.log("task was done");
//       // e.target.parentElement.style.textDecoration = "line-through";
//     } else {
//       // e.target.parentElement.style.textDecoration = "none";
//       console.log("task was not");
//     }
//   }
// });

// function updateTasks() {
//   if (ul.children.length === 0) {
//     tasks.textContent = "No Tasks";
//   } else {
//     tasks.textContent = "";
//   }
// }

// updateTasks();
