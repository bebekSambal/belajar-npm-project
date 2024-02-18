const fs = require('fs')

try { //lebih baik pake try catch jika pake metod sync
    fs.mkdirSync('projex');
    fs.writeFileSync('projex/index.html', '<h1>Hello World</h1>');
    console.log('file berhasil dibuat');
} catch (error) {
    console.log(error);
};