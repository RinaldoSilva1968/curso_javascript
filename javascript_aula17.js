//DOM Modelo de Objeto de documento
(function readyJS(win,doc){
    'use strict';

/*  let teste=doc.getElementById('teste');
    teste.className='New Class';
    teste.style.color='pink'; */
/* 
    let myClass=doc.getElementsByClassName("divClass"); */
/*     let myClass=doc.getElementsByClassName('btn');
    console.log(myClass[0].innerHTML); */

/*     let byName=doc.getElementsByName('img');
    console.log(byName); */
  /*   let bytag=doc.getElementsByTagName('h1');
    console.log(bytag); */
/* 
    let byQuery=doc.querySelector("[title='Testando']");//#=div(#teste), .=classe(.divClass), */
    /* let byQuery=doc.querySelector("[alt='cruzeiro']");//[]=atributos
    console.log(byQuery); */
    let byQuery=doc.querySelector('.btn');//[]=atributos
/*     byQuery.addEventListener('click',function(){
        alert('oi');
    }); */
    
    let byQueryAll=doc.querySelectorAll('.btn');
    for(let i=0;i<byQueryAll.length; i++){
        byQueryAll[i].addEventListener('click',function(){
            //alert('Click button: ' + this.innerHTML);
            doc.querySelector('body').style.backgroundColor=this.getAttribute('data-color');
        })
    }

})(window,document);