const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
    event.preventDefault();
    const username = loginInput.value;
    greeting.innerText = `안녕하세요. ${username}님 오신것을 환영합니다.`;
}

loginForm.addEventListener("submit", onLoginSubmit);