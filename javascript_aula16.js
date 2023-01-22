// typeof e introdução a JSON
(function readyJS(win, doc){
    'use strict';

    /* let type=null; //foram utilizados: 1, '1', false, null
    console.log(typeof type); // type,blackdkd */
/*     let arr=[0,1,'Rinaldo', {'age':18},null]
    let obj={'name':'Rinaldo','city':'BH'};
    for(let i=0; i<arr.length; i++){
        if(typeof arr[i] ==='object'){
            console.log(arr[i]);
        }
    }
    console.log(typeof arr);
    console.log(typeof obj);
    console.log(Array.isArray(obj)); */

    let data={
        car:{
            year: 2018,
            color:'black',
            arr: [0,1,2,3]
        }
    };
    let data2='{"name":"Rinaldo","age":"54"}';
    console.log(JSON.parse(data2));//.parse transforma string em formato objeto JSON
    console.log(JSON.stringify(data));//.stringify transforma objeto JSON em string

})(window, document);