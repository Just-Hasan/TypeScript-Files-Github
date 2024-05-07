console.log("TypeScript is blue");
const a = 3;
const button = document.querySelector("button");
function clickHandler(message: string) {
  console.log("click");
}

if (button) {
  button.addEventListener("click", clickHandler.bind(null, "clicked"))!;
}
