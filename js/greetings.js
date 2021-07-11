const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function handleSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY,username);
    showGreetings(username);
}

function showGreetings(username){
    greeting.innerText = `What's up, ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}




const savedUserName = localStorage.getItem(USERNAME_KEY);
if(savedUserName === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",handleSubmit);
}else{
    showGreetings(savedUserName);
}