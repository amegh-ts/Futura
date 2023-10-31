// Import the path module
var path = require('path');

// Define a file path
const a = '/desktops/homes/data/files/datas/ameg/hello.js';

// Get the base name of the file (the file name with extension)
console.log(path.basename(a));

// const b=path.basename(a)
// const c=path.basename(a)

// Get the directory name of the file (the path without the file name)
console.log(path.dirname(a));
// console.log(path.join(path.dirname(a), 'files', 'impfiles', 'datas', 'data'));

// Parse displays complete details
console.log(path.parse(a));
