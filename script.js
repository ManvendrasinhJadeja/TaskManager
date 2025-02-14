class Task {
    constructor(
      taskName,
      taskCategory,
      taskDescription,
      taskStatus = "Pending",
      dueDate
    ) {
      this.taskName = taskName;
      this.taskCategory = taskCategory;
      this.taskDescription = taskDescription;
      this.taskStatus = taskStatus;
      this.dueDate = dueDate;
    }
  
    markAsCompleted() {
      this.taskStatus = "Completed";
    }
  
    deleteTask() {

    }
  }
  
  let tasksArray = [];
  
  function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
  

    for (let i = 0; i < tasksArray.length; i++) {
      const task = tasksArray[i];
  
      const taskDiv = document.createElement('div');
      taskDiv.classList.add('task');
  

      taskDiv.innerHTML = `
          <h3>${task.taskName}</h3>
          <p>${task.taskDescription}</p>
          <p>Due Date: ${task.dueDate}</p>
          <p>Category: ${task.taskCategory}</p>
          <p>Status: ${task.taskStatus}</p>
          <button class="complete-btn">Complete</button>
          <button class="delete-btn">Delete</button>
      `;
  
      taskList.appendChild(taskDiv);
  

      taskDiv.querySelector('.complete-btn').addEventListener('click', function () {
        task.markAsCompleted(); 
        renderTasks(); 
      });
  

      taskDiv.querySelector('.delete-btn').addEventListener('click', function () {
        tasksArray.splice(i, 1); 
        renderTasks(); 
      });
    }
  }
  
  const submitBtn = document.getElementById("submitBtn");
  
  submitBtn.addEventListener("click", function (e) {
    e.preventDefault();
  

    const taskName = document.getElementById("taskName").value;
    const taskCategory = document.getElementById("taskCategory").value;
    const taskDueDate = document.getElementById("taskDueDate").value;
    const taskDesc = document.getElementById("taskDesc").value;
  

    const newTask = new Task(taskName, taskCategory, taskDesc, "Pending", taskDueDate);
    tasksArray.push(newTask);
  

    document.getElementById("taskName").value = "";
    document.getElementById("taskCategory").value = "";
    document.getElementById("taskDesc").value = "";
    document.getElementById("taskDueDate").value = "";
  

    renderTasks();
  });