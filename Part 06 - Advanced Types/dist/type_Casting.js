"use strict";
const _paragraphElement = document.getElementById("message-output");
const _userInputElement = document.getElementById("user-input");
const paragraphElement = (document.getElementById("message-output"));
const userInputElement = document.getElementById("user-input");
const getUserInputBtn = (document.querySelector("#get-user-input"));
getUserInputBtn.addEventListener("click", () => {
    console.log(userInputElement.value);
});
//# sourceMappingURL=type_casting.js.map