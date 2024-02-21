const jumlah = (a,b) =>{
    return a + b;
}
const PI = 3.14;
const luasLingkaran = (jari) =>{
    return PI * jari * jari;
}
const keliling = (jari) =>{
    return 2 * PI * jari;
}

module.exports = {
    jumlah,
    luasLingkaran,
    keliling
};