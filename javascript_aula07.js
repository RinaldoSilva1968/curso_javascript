//Objetos Personalisados
/*
nome:'Webdesign',
acao:'desenvolver()'
 */
/*
let person=new Object();
person.name='Rinaldo';
console.log(person);
*/

let person1={
    name:'Rinaldo'
}

let person2={
    name:'Webdesign',
    age:10,
    status:false,
    array:['profissional','design','website'],
    work: function(){
        alert('work');
    },
    support: person1,
    usethis:function(){
        return this.age;
    }
}
//console.log(person2.array[1]);
//console.log(person2.work());
//console.log(person2.support.name);
console.log(person2.usethis());
