// function Hello(num1,num2){
//     return new Promise((res,rej)=>{
//       res(num1+num2)
//     })
//   }
//   Hello(10,20).then((values)=>{
//     console.log(values);
//   })



function hello(n1, n2) {
  return new Promise((res, rej) => {
    res(n1 + n2)
  })
}
function hai(n1, n2) {
  return new Promise((res, rej) => {
    res(n1 - n2)
  })
}
function ok(n1, n2) {
  return new Promise((res, rej) => {
    res(n1 * n2)
  })
}
hello(10, 12).then((data) => {
  console.log(data);
  return hai(data, 10)
}).then((valu) => {
  console.log(valu);
  return ok(valu, 10)
}).then((res) => {
  console.log(res);
})