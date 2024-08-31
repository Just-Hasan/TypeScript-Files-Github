////////[discriminate unions]
// discriminate union adalah pola yang bisa kita gunakan untuk memeriksa apakah suatu property benar - benar ada di object, pola ini memerlukan penggunaan dari 'literal type', yaitu tipe dimana properti memiliki nilai atau value yang sudah pasti. Implementasi nya adalah, di setiap interface atau custom type yang kita miliki, kita membuat satu literal type yang memiliki tipe data yang sama (E.G string) tapi memiliki value yang berbeda.

// ketika kita ingin membuat satu variable memiliki tipe berupa gabungan atau union dari dua custom type, cara kita memeriksa suatu property benar - benar ada di suatu object adalah dengan memeriksa literal type yang ada. Seperti contoh dibawah, saat melakukan pemeriksaan dengan menggunakan switch block, kita memeriksa apakah animal.type itu "bird" atau "horse", kemudian dari hasil - hasilnya tersebut kemudian kita bisa melakukan operasi selanjutnya.
interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
      break;
    default:
      console.log(`Invalid type`);
  }

  console.log(`Moving with speed of : ${speed}`);
}

const bird1: Bird = { flyingSpeed: 12, type: "bird" };
const horse1: Horse = { type: "horse", runningSpeed: 120 };

moveAnimal(bird1);
