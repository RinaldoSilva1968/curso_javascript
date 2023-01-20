//Aula 14 Hoisting
//Iça as variáveis porém o ponto de definição fica onde está.
// no caso da let func, é içada let func=undefined;
function Hoisting()
{
    inside();
    let a=2;
    let b=3;
    
    function inside()
    {
        alert('This is an example');
    }
  
    return a*b;
}
console.log(Hoisting());