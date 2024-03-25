const ages = [19,22, 19,24,20 ,25,26,24,25,24];
ages.sort((a,b)=>a-b);

console.log(ages);

const min = ages[0];
const max = ages[ages.length-1];

console.log("Minimum age :" ,min);
console.log("Maximum age :" , max);

const medianAge = (min+max)/2;
console.log("Median age : " ,medianAge);

// average of age

const sum = ages.reduce((acc , curr) => acc + curr, 0);

const average = sum / ages.length;

console.log("Average value :" , average);

// Range of array

const range = max - min ;

console.log("Range : " , range);

const minDifference = Math.abs(min - average);
const maxDifference = Math.abs(max - average);

console.log("Absolute difference min : " , minDifference);
console.log("Absolute difference max :" , maxDifference);


