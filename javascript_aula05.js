//multiplication of values

function multNumbers(x,y)
{
    let result = x * y;
    return result;
}
/*
console.log(multNumbers(10,3));
console.log(multNumbers(3,2));
*/
let mult=function(x,y)
{
    let result = x*y;
    return result;
}
/*console.log(mult(2,5));*/
let objMult={
func:function(x,y){
    let result = x*y;
    return result;
    }
}
/*console.log(objMult.func(4,2));*/
//Set name forr users
function myName(val)
{
    let name="Rinaldo";

    function setName()
    {
        if(val==1){
            name='rinaldo';
        }else if (val==2){
            name='Thais';
        }else{
            name = 'Nenhum dado foi disponigbilizado'
        }
        return name;
    }
    return setName();
}
//console.log(myName(1));

//Arrow funcitons
function sum(x,y)
{
    return x+y;
}
//console.log(sum(10,5));
let sumArrow=(x,y)=>{
    return x+y;
}
console.log(sumArrow(3,4));

let sumArrow2=(x,y)=>x+y;
console.log(sumArrow2(6,3));