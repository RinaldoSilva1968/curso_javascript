//This
//Tanto no escopo global como dentro de uma função o this se refere ao window.
/*
console.log(this);
function teste()
{
    console.log(this);
}
teste();
*/
//Quando eu chamo this dentro de um objeto ele se refere ao objeto
/*
let obj={
    name:'Rinaldo',
    func:function(){
        console.log(this);
    }
}
obj.func();
*/
/* let obj={
    name:'Rinaldo',
    func:function(){
        return this.name;
    }
}
console.log(obj.func());
 */

//Use strict
/* Força o navegador a ler o js no strict mode, ou seja 
não vai aceitar diverso erros que qdo não é utilizada 
passam batidos e podem prejudicar muito os códigos */
/* x=10;
console.log(x);

'use strict'; */
//No caso abaixo, não permite utilizar uma variável sem declarar

/* 'use strict';
x=10;
console.log(x);
 */
//Com o uso do Use strict, é obrigatório declarar a variável x.
/* 'use strict';
let x=10;
console.log(x); */
//No caso abaixo está sendo utilizada uma palavra reservada para nomear uma variável=não permitido

/* 'use strict';
let eval=10;
console.log(eval); */

/* 'use strict';
let x=10;
console.log(x);
function teste()
{
    console.log(this);
}
teste();
console.log(this); */
//Imediately-invoked function expression (IIFE)
/* (function(win, doc){
    'use strict';
    console.log('teste');
})(window,document); */
(function(win, doc){
    'use strict';
    let x=20;
    console.log(x);
    console.log(win);
    console.log(doc);
    console.log(this);
})(window,document);
//console.log(x);