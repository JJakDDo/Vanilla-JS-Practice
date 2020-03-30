const toDoForm = document.querySelector(".js-toDoForm");
const toDoinput = toDoForm.querySelector("input");
const toDolist = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';
let toDos = [];


function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        });
    }
};

function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");   
    const span = document.createElement("span"); 
    const newId = toDos.length + 1;
    
    delBtn.innerText = "X";
    delBtn.addEventListener("click", function(e){
        const btn = e.target;
        const li = btn.parentNode;
        toDolist.removeChild(li);
        
        const cleanToDos = toDos.filter(function(toDo){
            return toDo.id != li.id;
        });
        toDos = cleanToDos;
        saveToDos();
    });
    
    span.innerText = text;
    
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    
    toDolist.appendChild(li);
    
    const toDoObj = {
        text : text,
        id : newId
    };
    
    toDos.push(toDoObj);
    saveToDos();
}

function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit", function(e){
        e.preventDefault();
        const currentValue = toDoinput.value;
        paintToDo(currentValue);
        toDoinput.value = "";
    });
}

init();