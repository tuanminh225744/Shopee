import { openUserProfile } from './open-user-profile.js';
import { openOrder } from './open-order.js';
import { openMain } from './open-main.js';

const loginBtn = document.querySelector("#navbar__login-btn");
const registerBtn = document.querySelector("#navbar__register-btn");
const modalForm = document.querySelector(".modal");
const loginForm = document.querySelector(".login-form");
const registerForm = document.querySelector(".register-form");


document.querySelector('.navbar-user-item--user-profile-btn').addEventListener('click', function() {
    openUserProfile();
});
document.querySelector('.navbar-user-item--order-btn').addEventListener('click', function() {
    openOrder();
});
document.querySelector('.navbar-user-item--logout-btn').addEventListener('click', function() {
    loginBtn.classList.remove("hidden");
    registerBtn.classList.remove("hidden");
    document.querySelector(".navbar-user").classList.add("hidden");
    modalForm.classList.remove("hidden");
    loginForm.classList.remove("hidden");
    registerForm.classList.add("hidden");
    openMain();
});