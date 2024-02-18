const args = process.argv/*.slice(2)*/; // .slice(2) untuk memotong array start from 2

for (let arg of args){
    console.log(`selamat datang ${arg}`);
}