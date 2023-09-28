var str1 = "Independance"
var str2 = "India"


// CharAt
console.log(str1.charAt(1));

// CharCodeAt
console.log(str1.charCodeAt(0));
console.log(str2.charCodeAt(0));

// append/Concat
console.log(str1+' '+str2);

console.log(str2.concat(" ",str1));

// endwith
console.log(str1.endsWith('ce'));
console.log(str1.endsWith('nce'));

// startwith
console.log(str1.startsWith('i'));
console.log(str1.startsWith('I'));

// includes
console.log(str1.includes('de'));

// indexof
console.log(str1.indexOf('d'));

// lastindex
console.log(str1.lastIndexOf('d'));

// match
console.log(str1.match(/e/g));

// repeat
console.log(str1.repeat(5));

// replace
console.log(str1.replace(/e/g,'*'));

// search
console.log(str1.search('e'));


// slice substring
console.log(str1.slice(2,4));

console.log(str1.substring(2,4));

// tolowercase
console.log(str1.toLocaleLowerCase());

// touppercase
console.log(str1.toLocaleUpperCase());