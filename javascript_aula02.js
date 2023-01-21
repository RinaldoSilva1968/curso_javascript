/*  constantes não mudam nunca
    var é uma variável, tem problema, não se restringe ao escopo de if, for e while
    let é uma variável em que foi resolvido o problema, não retorna fora do escopo
*/

//
function myName(){
    var  name='Rinaldo';
}
console.log(name);
myName();

if(true){
    let name2='roberto';
    console.log(name2);
}


for(let i=0;i<2;i++){
    let name3='Júlia'; 
    console.log(name3);  
}
/*
declaração de variáveis:
as variáveis podem iniciar por todos esse caracteres indicados abaixo:
let _$a-z(a-z A-Z 0-9_$)
*/
/*
Inteiros:
-2,-1,0,1,2
let number=11;
*/

/*
Decimais:
3.14
let pi=.14;
*/

/*
Booleanos:
true/false
let option=false;
*/
/*
string:
texto
let texto='Esse é meu 1º texto';
*/
/*
array:
Conjunto de dados
let arr=['fruta', 'carro',1,'força'];
*/

/*
Objeto:
Propriedades e métodos
let obj={
    prop1:'rinaldo',
    prop2:'webdesign',
    arr:[1,2,'a',3],
    func: myName()
};
*/