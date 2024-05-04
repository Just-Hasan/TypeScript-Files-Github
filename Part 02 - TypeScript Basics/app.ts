let userInput: unknown;
let username: string;

userInput = "5";
if (typeof userInput === "string") {
  username = userInput;
}

function generateError(message: string, code: number): never {
  throw { message, errorCode: code };
}

generateError("An error occured!", 666);
