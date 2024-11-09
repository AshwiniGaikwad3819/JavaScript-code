const arr =[33,5,22,78,12];

//for(let i =0;i<arr.length;i++){
//console.log(arr[1]);

//}

//for in 
//for off

//for(let x in arr){
    //console.log(arr[x]);
//}

//for(let x of arr){
   // console.log(x);
//}
const names =['john','mike' ,'soham','gita'];

//const names =['john','mike'];

//let x =names.push ('will');

//comsole.log(names);
//console.log(x);
 

/*let s1 =names.pop();
console.log(names);
console.log(s1);*/

//console.log();

//let s2=names.shift();
//console.log(names);
//console.log(s2);

//names .unshift("billy");
//console.log(names);

const num =[1,2,3,4,5,6,7,8,9,10];

/*const x =num.slice(2);
console.log(num);
console.log(x);
console.log();*/

//const y =num.splice(0,3);
//console.log(y);
//console.log(num);

/*const arr1 =['A','B','C','D','E','F','G','H'];

const a =arr1.splice(2,3);
console.log(a);
console.log(arr1);

const m =a.concat(arr1);
m.sort();
console.log(m);

console.log(m.indexOf('D'));
console.log(m.includes('Z'));*/

const t =[1,2,3,4,5];

/*const r =t.join(9);
console.log (t.join(''));
console.log(typeof r);
console.log(t.reverse());

let adds =(x)=>{;
    return x+5;
}*/

let x = arr2.map((x)  =>x*2);
console.log(x);


const arr2 = [1,2,3,4,5];

// console.log(arr2.map(add5));

// let x = arr2.map((x)=>{
//     return x*2;
// });

// let x = arr2.map((x) =>x*2);

// console.log(x);


// const num = [1,2,3,4,5,6,7,8,9,10];

// const y = num.filter((x)=>x%2===0);

// console.log("num array "+ num);
// console.log("y array " +y);


function sum(acc,x){
    return acc+x;
}

// let a = num.reduce(sum,0);
// console.log(a);

// let b = num.reduce((acc,x)=>acc+x,15);
// console.log(b);

// const num2=[22,55,33,77,55,12,32,86];

// let c = num2.findIndex((x)=>x%4==0);
// console.log(c);


// const num = [10,20,30,40,50];

// let x = num.every((a)=>a%2==1);
// console.log(x);

// let y = num.some((a)=>a===10);
// console.log(y);

// num.forEach((x)=>console.log(x));

const x1 = [1,2];
const y1 = [3,4];

const z1 = [x1,y1];
console.log(z1);
console.log(z1.flat());





























