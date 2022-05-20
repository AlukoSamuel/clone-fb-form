"use strict";

const signUp = document.querySelector(".signup-modal");
const createAccount = document.querySelector(".create-account");
const btnCloseModal = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");

const showCreateAccrount = function () {
  signUp.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

createAccount.addEventListener("click", showCreateAccrount);

const closeModal = function () {
  signUp.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
