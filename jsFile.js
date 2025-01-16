const taskInput=document.getElementById("taskInput");
const buttonAdd=document.getElementById("btnTask");
const taskList=document.getElementById("taskList");

buttonAdd.addEventListener('click',()=>{
    const taskText=taskInput.value;
    if(taskText!==""){
        addTask(taskText);
    }
    taskInput.value="";
    });

function addTask(taskText){
    const li=document.createElement('li');

    const span=document.createElement("span");
    span.textContent=taskText;

    li.appendChild(span);
    taskList.appendChild(li);
    span.style.border="1px solid black";


    const completeButton=document.createElement("input");
    completeButton.setAttribute("type","checkbox");
    completeButton.addEventListener("click",()=>{
        if(completeButton.checked==true){
            completeButton.style.display="none";
            removeButton.style.display="none";
            span.style.backgroundColor="green";
            li.style.color="white";
        }
    });
    li.appendChild(completeButton);


    const removeButton=document.createElement("button");
    removeButton.textContent="X";
    removeButton.addEventListener("click",()=>{
    li.remove();
    });
    li.appendChild(removeButton);
};

    

