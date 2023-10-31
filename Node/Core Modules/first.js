// var http=require('http')

// http.createServer(function(req,res){
//     res.write('Port is 8800 connected \n')
//     res.write('nthere sugam thannadeiii')
//     res.end()
// }).listen('8800')


var a = require('http');
var b = require('url');

var c = a.createServer((req, res) => {
    const urls = b.parse(req.url).pathname;
    // console.log('*****', urls);

    if (urls === '/') {
        res.write('home page');
        res.end();
    } else if (urls === '/anyname/abc') {
        res.write('any name');
        res.end();
    }
}).listen(9000);

// c.listen(9000)