// Type Casting using the as keyword
const userInputElement = document.getElementById(
  "user-input"
) as HTMLInputElement;

// Type Casting using the bracket
const paragraphElement = <HTMLParagraphElement>(
  document.getElementById("message-output")
);

const button = <HTMLButtonElement>document.getElementById("btn");

userInputElement.value = "";
userInputElement.placeholder = "Siu";
paragraphElement.textContent = "Pipiw";
paragraphElement.style.textAlign = "center";

button.textContent = "Click";
button.style.width = "max-content";
button.style.borderRadius = "299px";
button.style.border = "none";
button.style.marginTop = "16px";
button.addEventListener(
  "click",
  () => (paragraphElement.textContent = userInputElement.value)
);
