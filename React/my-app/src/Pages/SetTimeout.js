function f1() {
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            let name="sreerag"
            res(name)
        },3000)
    })
}
function f2() {
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            let age=26
            res(age)
        },3000)
    })
    
}

// using promise
Promise.all([f1(),f2()]).then((result)=>{
    console.log(result)
})

// using async await
async function disp() {
    let name=await f1()
    console.log('***',name);
    let age=await f2()
    console.log('***',age);    
}
disp()