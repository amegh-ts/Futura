// intract with files
// read create update delete rename

const fs = require('fs');

// read file
fs.readFile('hai.txt', 'utf-8', function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

// write file
fs.writeFile('dtaar.txt', 'Hai hello iam node js 1', (err) => {

    console.log('file created');
});

// create or update(overwrite)
fs.appendFile('sreerag.js', '\n var a=100', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('file created');
    }
});

//renamed file
fs.rename('./nodejs.txt', 'abcdefg.txt', (err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.Log("file renamed");
    }
})
//deleated file
fs.unlink('./some.txt', (err) => {
    if (err) {
        console.log(err);
    }
    else
        console.Log('file deleated');
})
