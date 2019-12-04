'use strict' // it didn't slip my mind this time yaaaaaaas :)

var ulEl = document.getElementById('list');


function render(){
    preventdefult();
    form.reset();
    var liEl = document.createElement('li');
    
    ulEl.appendChild(liEl);
}
document.getElementById('submit').addEventListener('click', render);

// i need work on DOM 