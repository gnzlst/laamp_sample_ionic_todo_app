function addTask() {
  const taskInput = document.querySelector("ion-input");
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    const taskList = document.getElementById("taskList");
    const newTaskItem = document.createElement("ion-item");
    newTaskItem.textContent = taskText;
    newTaskItem.classList.add("swipe-item");
    newTaskItem.addEventListener("touchstart", handleTouchStart);
    newTaskItem.addEventListener("touchmove", handleTouchMove);
    newTaskItem.addEventListener("touchend", handleTouchEnd);
    taskList.appendChild(newTaskItem);
    taskInput.value = "";
  }
}

function handleTouchStart(event) {
  this.startX = event.touches[0].clientX;
}

function handleTouchMove(event) {
  const currentX = event.touches[0].clientX;
  const deltaX = currentX - this.startX;

  if (deltaX < -50) {
    this.classList.add("swipe-item--delete");
  } else {
    this.classList.remove("swipe-item--delete");
  }
}

function handleTouchEnd(event) {
  if (this.classList.contains("swipe-item--delete")) {
    this.remove();
  }
}
