////////[Type Casting]
// type casting digunakan untuk membantu / memberitau TypeScript bahwa kita telah menyeleksi element HTML tertentu, tanpa ini TypeScript akan bingung karena TypeScript tidak menelusuri file HTML yang kita miliki dan menganggap element yang kita seleksi ber-tipe HTMLElement | null seperti contoh dibawah ini
const _paragraphElement = document.getElementById("message-output");
const _userInputElement = document.getElementById("user-input");

// dengan menggunakan TypeScript, kita secara eksplisit memberitau TypeScript element HTML apa yang kita seleksi.

// type casting bisa dilakukan dengan menambahkan notasi <HTMLElementSomething>
const paragraphElement = <HTMLParagraphElement>(
  document.getElementById("message-output")
);

// dan bisa juga digunakan dengan keyword 'as' kemudian dilanjutkan dengan <HTMLElementSomething>
const userInputElement = document.getElementById(
  "user-input"
) as HTMLInputElement;

const getUserInputBtn = <HTMLButtonElement>(
  document.querySelector("#get-user-input")
);

getUserInputBtn.addEventListener("click", () => {
  console.log(userInputElement.value);
});
