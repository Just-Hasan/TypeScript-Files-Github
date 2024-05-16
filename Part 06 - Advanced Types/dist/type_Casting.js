"use strict";
const userInputElement = document.getElementById("user-input");
const paragraphElement = (document.getElementById("message-output"));
const button = document.getElementById("btn");
userInputElement.value = "";
userInputElement.placeholder = "Siu";
paragraphElement.textContent = "Pipiw";
paragraphElement.style.textAlign = "center";
button.textContent = "Click";
button.style.width = "max-content";
button.style.borderRadius = "299px";
button.style.border = "none";
button.style.marginTop = "16px";
button.addEventListener("click", () => (paragraphElement.textContent = userInputElement.value));
//# sourceMappingURL=type_Casting.js.map