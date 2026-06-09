const taskInput =
      document.getElementById("taskInput");

const taskList =
      document.getElementById("taskList");

/* Add Task */
function addTask(){

    if(taskInput.value === ""){

        alert("Please enter a task");

        return;
    }

    /* Create List Item */
    const li =
          document.createElement("li");

    /* Task Text */
    const span =
          document.createElement("span");

    span.textContent = taskInput.value;

    /* Mark Completed */
    span.onclick = function(){

        span.classList.toggle("completed");
    };

    /* Delete Button */
    const deleteBtn =
          document.createElement("button");

    deleteBtn.textContent = "Delete";

    deleteBtn.classList.add("delete-btn");

    deleteBtn.onclick = function(){

        li.remove();
    };

    /* Append Elements */
    li.appendChild(span);

    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    /* Clear Input */
    taskInput.value = "";
}