const names = ["Halo", "Angel", "Nyoman", "Ketut", "Aisyah"];

// TODO: Fungsi utama
// Menerima 2 parameter: list nama dan callback sort
// Mengembalikan array of string dengan format:
// "1. Nama"
// "2. Nama"
// ...
// const sorter = null;
const sorter = (names, FnCallback) => {
  const namaSudahUrut = FnCallback(names);
  const hasil =[];
  let awal = 0;
  let angka = 1;
  for (let jumlah = 0; jumlah < namaSudahUrut.length; jumlah++) {
    let angakJumlah = awal += angka;
    hasil.push(angakJumlah + ". " + namaSudahUrut[jumlah])
  }
  return hasil;
};

// console.log(names.sort().reverse())
// TODO: Fungsi untuk mengurutkan array of string secara ascending
// mengembalikan array yang sudah diurutkan
const sortAscending = (nama) => {
  return nama.sort();
};

// TODO: Fungsi untuk mengurutkan array of string secara descending
// mengembalikan array yang sudah diurutkan
const sortDescending = (nama) => {
  return nama.sort().reverse();
};

// ! JANGAN DIMODIFIKASI
(function main() {
  console.log(sorter?.(names, sortAscending)?.join("\n"));
  console.log(sorter?.(names, sortDescending)?.join("\n"));
})();

module.exports = {
  sorter,
  sortAscending,
  sortDescending,
  names,
};
