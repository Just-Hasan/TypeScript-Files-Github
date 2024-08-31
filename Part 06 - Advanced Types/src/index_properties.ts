////////[Index Properties]
// Index properties adalah type yang digunakan saat kita tidak mengetahui dengan pasti apa nama properti yang akan dimiliki oleh object tersebut, tapi di saat yang bersamaan kita mengetahui tipe data dari value yang akan dimiliki oleh properti tersebut. Keuntungan dari menggunakan tipe ini adalah kita dapat secara fleksible menambahkan properti sebanyak yang kita mau, asalkan mematuhi konfigurasi tipe data index properties yang sudah kita tentukan
interface ErrorContainer {
  [prop: string]: string;
}

const error: ErrorContainer = {
  email: "Not a valid email",
  username: "Must start with a capital character",
};

console.log(error.email);
