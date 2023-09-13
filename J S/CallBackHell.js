function display(num1,num2,cb) {
    cb(num1+num2)
}
function display1(num1,num2,cb) {
    cb(num1-num2)
}
function display2(num1,num2,cb) {
      cb(num1/num2)  
}
function display3(num1,num2,cb) {
    cb(num1*num2)
}
display(10,2,(add)=>{
    console.log(add);
    display1(add,5,(sub)=>{
        console.log(sub);
        display2(sub,2,(div)=>{
            console.log(div);
            display3(div,8,(mul)=>{
                console.log(mul);
            })
        })
    })
})