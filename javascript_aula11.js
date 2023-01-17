let arr1=[1,2,3,4,5];
let arr2=['a','b','c'];
let arr3=[6,7,8];

//Concatenação
let arrFinal=arr1.concat(arr2);
console.log(arrFinal);
let arrFinal2=arr1.concat(arr3);
console.log(arrFinal2);


//Every
let everyx=arrFinal2.every(
    function verifyElements(elem,ind,obj){
        return (typeof elem=='number');
    }
);
console.log(everyx);

//Filter
let filterX=arrFinal2.filter(
    function verifyElements(elem,ind,obj){
        return ( elem >3);
    }
);

console.log(filterX);

let filterX2=arrFinal.filter(
    function verifyElements(elem,ind,obj){
        return ( typeof elem =='string');
    }
); 

console.log(filterX2);

//For Each
let data='';
let ForEachX=arrFinal.forEach(
    function verifyElements(elem,ind,obj){
        if (typeof elem=='string'){
            data+='Índice '+ind+' : '+elem+'\n';
        }
    }
);
console.log(data);

//IndexOf

let indexofX=arrFinal.indexOf('f');
if(indexofX==-1){
    alert('Esse dado não existe');
}
console.log(indexofX);
