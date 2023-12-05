const fs=require('fs')

const readable=fs.createReadStream('./file1.html',{encoding:'utf-8',highWaterMark:10})
const writeable=fs.createWriteStream('./file2.txt')
readable.on("data",(data)=>{
    console.log("******************************",data);
    writeable.write(data)
})
