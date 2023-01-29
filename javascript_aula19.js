(function(win, doc){
    'use strict';

    let btn=doc.querySelectorAll('.button');
    let body=doc.querySelector("body");
    console.log(btn);
    //Change body colors
    function changeColors(event)
    {
       body.style.background=event.target.dataset.color;
    }

    for(let i=0; i<btn.length; i++){
        btn[i].addEventListener("click", changeColors, false);
    }
    
})(window,document);