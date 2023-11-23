// +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
// CARA UNTUK MEMBUAT OBJECT PADA JAVASCRIPT
// +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+

// ===========================================================
// 1. OBJECT LITERAL -> TIDAK EFEKTIF UNTUK OBJECT YANG BANYAK.
// ===========================================================
// let mahasiswa = {
//   nama: "dhea",
//   energy: 10,
//   makan: function (porsi) {
//     this.energy = this.energy + porsi;
//     console.log(`halo ${this.nama}, selamat makan`);
//   },
// };

// ==========================================================
// 2. FUNCTION DECLARATION -> OBJECT LITERAL -> OBJECT.CREATE
// ==========================================================
// const methodMahasiswa = {
//   makan: function (porsi) {
//     this.energy += porsi;
//     console.log(`halo ${this.nama}, selamat makan`);
//   },
//   main: function (jam) {
//     this.energy -= jam;
//     console.log(`halo ${this.nama}, selamat main`);
//   },
//   tidur: function (jam) {
//     this.energy += jam * 2;
//     console.log(`halo ${this.nama}, selamat tidur`);
//   },
// };

// function mahasiswa(nama, energy) {
//   let mahasiswa = Object.create(methodMahasiswa);
//   mahasiswa.nama = nama;
//   mahasiswa.energy = energy;

//   return mahasiswa;
// }
// let dhea = mahasiswa("dhea", 10);

// =========================================
// OBJECT PROTOTYPE INHERITTENS
// =========================================
// function mahasiswa(nama, energy) {
//   this.nama = nama;
//   this.energy = energy;
// }
// mahasiswa.prototype.makan = function (porsi) {
//   this.energy += porsi;
//   return `halo ${this.nama}, selamat makan!`;
// };
// mahasiswa.prototype.main = function (jam) {
//   this.energy -= jam;
//   return `halo ${this.nama}, selamat bermain`;
// };
// mahasiswa.prototype.tidur = function (jam) {
//   this.energy += jam * 2;
//   return `halo ${this.nama}, selamat tidur`;
// };
// let dhea = new mahasiswa("dhea", 10);

// =========================================
// OBJECT VERSI CLASS
// =========================================
// class Mahasiswa {
//   constructor(nama, energy) {
//     this.nama = nama;
//     this.energy = energy;
//   }
//   makan(porsi) {
//     this.energy += porsi;
//     return `halo ${this.nama}, selamat makan!`;
//   }
//   main(jam) {
//     this.energy -= jam;
//     return `halo ${this.nama}, selamat bermain`;
//   }
//   tidur(jam) {
//     this.energy += jam * 2;
//     return `halo ${this.nama}, selamat tidur`;
//   }
// }
// let dhea = new Mahasiswa("dhea", 10);

// ===================================================================================================
// 3. CONSTRUCTOR FUNCTION -> [SAMA DENGAN FUNCTION DECLARATION NAMUN HARUS MENGGUNAKAN KEYWORD (NEW)]
// ===================================================================================================
// function mahasiswa(nama, energy) {
//   this.nama = nama;
//   this.energy = energy;

//   this.makan = function (porsi) {
//     this.energy += porsi;
//     console.log(`halo ${this.nama}, selamat makan`);
//   };
//   this.main = function (jam) {
//     this.energy -= jam;
//     console.log(`halo ${this.nama}, selamat makan`);
//   };
// }
// let dhea = new mahasiswa("dhea", 10);
