
// Copying an Object
const originalObject = { key1: 'value1', key2: 'value2' };
const copiedObject = { ...originalObject };

console.log(copiedObject); // { key1: 'value1', key2: 'value2' }

// Merging Objects
const object1 = { key1: 'value1' };
const object2 = { key2: 'value2' };
const mergedObject = { ...object1, ...object2 };

console.log(mergedObject); // { key1: 'value1', key2: 'value2' }

// Modifying an Object
const originalObject2 = { key1: 'value1', key2: 'value2' };
const modifiedObject = { ...originalObject2, key3: 'value3' };

console.log(modifiedObject); // { key1: 'value1', key2: 'value2', key3: 'value3' }

// Rest Properties
const { key1, ...rest } = { key1: 'value1', key2: 'value2', key3: 'value3' };

console.log(key1); // 'value1'
console.log(rest); // { key2: 'value2', key3: 'value3' }


