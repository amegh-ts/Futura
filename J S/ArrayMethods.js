// map()
const x=[1,2,3,4,5]
x.map((ab)=>{
    console.log(ab)
})

//foreach()
const a=[7,8,9,10]
a.forEach((abc)=>{
    console.log(abc)
})

//fill()

const fruits=["banana","mango","kiwi"]
fruits.fill("kiwi",1,2);
 console.log(fruits);

//filter()

const b=[10,20,30,40,50,60]
const c=b.filter((li)=>{
    return li>20
})
console.log(c)

//slice()

const d=[1,2,3,4,5,6]
const e=d.slice(2,4)
console.log(e);

//splice()

const f=[1,2,3,4,5,6]
const g=f.splice(2,5)
console.log(g)

//sort()

const h=[1,5,2,4,8,6]
const i=h.sort((h,i)=>{
    return h-i
})
console.log(i)

//push()

const j=[2,3,4,5,7]
j.push(9)
console.log(j)

//pop()

const k=[2,3,4,5,7]
k.pop()
console.log(k)

//shift()

const l=[2,3,4,5,7]
l.shift()
console.log(l)

//unshift()

const m=[2,3,4,5,7]
m.unshift(9)
console.log(m)

//some()
const abcd=[2,3,4,5,6,7]
const z=abcd.some(cde)
function cde(abcd){
    return abcd >5
}
console.log(z);

//every()
const aa=[10,45,34,24]
const y=aa.every(Checkaa)
function Checkaa(){
    return aa > 20
}
console.log(y);

//includes()

const num=[32,43,54,13,35]
const num2=num.includes(54)
console.log(num2);

//join()

const num3=[3,4,5,7]
const add=num3.join(4)
console.log(add);

//reverese()
const num4=[3,4,5,6,7]
const rev=num4.reverse()
console.log(rev);

//flat()

const flat1=[1, 2, [3, [4, 5, 6], 7], 8]
const flat2=flat1.flat(2)
console.log(flat2);
