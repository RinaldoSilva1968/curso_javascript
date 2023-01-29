(function(win, doc){
    'use strict';
    let btn=doc.querySelector("#btn");
    let sel=doc.querySelector("#select");
    //Show alert
    function alertar(event)
    {
        //alert('alert!');//event.preventDefault();//console.log('form not send');
        console.log(event);
    }
    sel.addEventListener('change', alertar, false);
    btn.addEventListener("click", alertar, false);
   // console.log(x);

})(window,document);