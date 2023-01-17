//Reduce
let arr1=[1,2,3,4,5];
let arr2=['s','b','s'];
let arr3=[6,7,8];

let arrFinal=arr1.concat(arr2);
console.log(arrFinal);
let arrFinal2=arr1.concat(arr3);
console.log(arrFinal2);
//Reduce
//Percorre os elementos do array e permite que façamos operações com o elemnto atual e o anterior
//ReduceRight inverte a ordem
let reduceX=arrFinal.reduce(
    function verifyElements(v1,v2,ind,arr) {
       return v1+v2; 
    }
);

console.log(arrFinal);
console.log(reduceX);
//Shift
//Retira o primeiro elemento do array e exibe

let shiftX=arrFinal.shift();
//let shiftX2=arrFinal.shift();
console.log(arrFinal);
console.log(shiftX);
//console.log(shiftX2);

//Slice
//pega valores no caso índice 3=5 e o anterior ao 6, índ 5="b"
let sliceX=arrFinal.slice(3,6);
console.log(arrFinal);
console.log(sliceX);

//Sort 
//Realiza a ordenação dos elementos
let sortX=arrFinal.sort();
console.log(arrFinal);
console.log(sortX);

//Splice

let spliceX=arrFinal.splice(3,3,'y','w',0);
console.log(arrFinal);
console.log(spliceX);

//Unshift
//Insere valores no início do array

let UnshiftX=arrFinal.unshift(-1,-2,-3);
console.log(arrFinal);
console.log(UnshiftX);

//Tostring
//Insere valores no início do array

let toStringX=arrFinal.toString();
console.log(arrFinal);
console.log(toStringX);