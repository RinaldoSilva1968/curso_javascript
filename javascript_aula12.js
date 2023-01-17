
let arr1=[1,2,3,4,5];
let arr2=['s','b','s'];
let arr3=[6,7,8];

let arrFinal=arr1.concat(arr2);
console.log(arrFinal);
let arrFinal2=arr1.concat(arr3);
console.log(arrFinal2);
//last Index of
//Percorre o array procurando ocorrências pegando o índice da última ocorrencia
let lastIndexOfX=arrFinal.lastIndexOf('s');
console.log(arrFinal);
console.log(lastIndexOfX);

//Join 
//Transforma o array em string
let joinX=arrFinal.join('-');
console.log(arrFinal);
console.log(joinX);

//Map e push
//Modifica o array da forma que a gente quiser, porém não modifica string, 
//Ao se utilizar do push, é possível com if, colocar a letra no mapFinal quando o elem não for number
let mapFinal=[];
let mapX=arrFinal.map(
    function verifyElements(elem,ind,obj){
        if (typeof elem=='number'){
            mapFinal.push(elem*2) ;
        }else{
            mapFinal.push(elem);
        }
    }
);
// Pop retira elem do array
mapFinal.pop(); //retira o último elemento do array
mapFinal.pop();
console.log(arrFinal);
console.log(mapFinal);

//Some retorna se o elem exite true e se não existe false

let someX=arrFinal.some(
    function verifyElements(elem,ind, obj){
        return(elem==3);
    }
);
console.log(arrFinal);
console.log(someX);

let someX1=arrFinal.some(
    function verifyElements(elem,ind, obj){
        return(typeof elem=='number');
    }
);
console.log(arrFinal);
console.log(someX1);

//Reverse
let ReverseX=arrFinal.reverse();
console.log(arrFinal);
console.log(ReverseX);