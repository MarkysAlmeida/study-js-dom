function addTask() { //Adicionar tarega
    const input = document.getElementById("taskInput"); //Pegando ID "TaskInput"
    const taskText = input.value.trim(); // tira espaço do texto que foi incluido na variavel input
    if (taskText === "") return; // Se a variavel estiver vazio, retorna
  
    const li = document.createElement("li");
  
    const span = document.createElement("span");
    span.textContent = taskText;
    span.onclick = () => span.classList.toggle("done");
  
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Excluir";
    deleteBtn.onclick = () => li.remove();
  
    li.appendChild(span);
    li.appendChild(deleteBtn);
    document.getElementById("taskList").appendChild(li);
  
    input.value = "";
  }
  