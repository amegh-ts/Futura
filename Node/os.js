var os = require('os');

console.log(os.type()); // Operating system type (e.g., 'Windows_NT' on Windows)
console.log(os.arch()); // CPU architecture (e.g., 'x64')
console.log(os.release()); // Operating system release version
console.log(os.version()); // Node.js version
console.log(os.uptime()); // Uptime in seconds
console.log(os.userInfo()); // Current user info
console.log(os.totalmem()); // Total RAM in bytes
console.log(os.freemem()); // Free RAM in bytes
console.log(os.cpus()); // Information about CPU cores
console.log(os.networkInterfaces()); // Network interfaces information
