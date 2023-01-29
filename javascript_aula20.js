/* (function(win, doc){
    'use strict';

    let btn=doc.querySelector("#btn");
    function alertar()
    {
        alert('Oi');
    }
    btn.addEventListener("click", alertar,false);
})(window,document); */
/* (function(win, doc){
    'use strict';

    let btn=doc.querySelector("#btn");
    let main=doc.querySelector(".main");
    function createElement(event)
    {
        const newButton=doc.createElement("button");
        newButton.id="newButton";
        newButton.innerHTML='New Button';
        main.appendChild(newButton);
    }
    function alertar(event)
    {
        if(event.target.id==='newButton'){
            alert("New Button");
        }
    }
    btn.addEventListener("click", createElement,false);
    main.addEventListener("click",alertar, false);

})(window,document); */
(function(win, doc){
    'use strict';

    let btn=doc.querySelector("#btn");
    let main=doc.querySelector(".main");
    function createElement(event)
    {
        const newButton=doc.createElement("button");
        newButton.id="newButton";
        newButton.innerHTML='New Button';
        main.appendChild(newButton);
    }
    function alertar(event)
    {
       alert('New Button');
    }
    function optEvents()
    {
        if(event.target.id==='newButton'){
            alertar(); 
        }else if (event.target.id==='btn'){
            createElement();
        }
    }
    main.addEventListener("click",optEvents, false);

})(window,document);