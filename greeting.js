const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greetings");

const USER_NAME = "currentUser";
const SHOWING_CN = "showing";

function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", function(e){
        e.preventDefault();
        const currentValue = input.value;
        paintGreeting(currentValue);
        localStorage.setItem(USER_NAME, currentValue);
    });
}

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

function loadName(){
    const currentUser = localStorage.getItem(USER_NAME);
    if(currentUser === null){
        askForName();
    } else {
        paintGreeting(currentUser);
    }
}

function init(){
    loadName();
}

init();