// cara panggil module
const rumus = require('./rumus'); // cara 1
// const {jumlah, keliling, luasLingkaran} = require('./rumus'); // cara 2

const cats = require('../module/cats/index')

console.log(rumus.jumlah(100,210));
console.log(rumus.keliling(7));
console.log(rumus.luasLingkaran(10));
console.log(cats[0]);