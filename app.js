const form = document.querySelector("#task-form")
const taskInput = document.querySelector("#task")
const taskList = document.querySelector(".collection")
const clearBtn = document.querySelector(".clear-tasks")

loadEventListeners();
function loadEventListeners(){
 
    //ADD TASK EVENT

    form.addEventListener("submit",addTask)
    clearBtn.addEventListener("click",deleteTask)
    taskList.addEventListener("click",removeTask)
}


function addTask(e)
{
    e.preventDefault();
    if(taskInput.value ==="")
    {
        alert("Please add a task");
    }

    else{
            //Create a li element
            const li = document.createElement("li");
            //ADD a Class name
            li.className = "collection-item";

            //Create a text node
            li.innerText = taskInput.value;
            

            //Create a new link element
          const link = document.createElement("a");
          link.className = "delete-item secondary-content"
          link.innerHTML =`<i class="fa fa-remove"></i>`

          li.appendChild(link)

          //store as local storage 
          storeTaskLocalStorage(taskInput.value);



          //ADD LI TO UL
          taskList.appendChild(li);
          taskInput.value = "";

            

    }
    function storeTaskLocalStorage(task)
    {
        let tasks;

        if(localStorage.getItem("tasks")===null)
        {
            tasks = [];e 3
        }
    }
    
}


function deleteTask()
{
    
    document.querySelector(".collection").innerHTML = " ";
}

//Remove task
function removeTask(e)
{
   if(e.target.parentElement.className === "delete-item secondary-content")
   {
     //e.i.a.li.remove();
  if(confirm("Are you Sure"))
  {
       e.target.parentElement.parentElement.remove();
  }
}

}