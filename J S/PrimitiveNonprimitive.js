const a = [1, 2, 3, 4, 5]
const b = a
b.push(200)
console.log(a);

// here the output is [1,2,3,4,5,200] this is the main difference between reference data type and primitive data type
// in reference id a is assigned to b and b is changed the change is also reflected in a