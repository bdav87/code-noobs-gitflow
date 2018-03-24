/* 
** Write all website functions within the event listener callback.
** This keeps the script from blocking the page from loading,
** and keeps your variables out of the global namespace.
*/
document.addEventListener('DOMContentLoaded', function(){

    /* 
    ** An IIFE (immediately invoked function expression) to add
    ** a click event to the logo area.
    */
    
    (function greetNoobs(){
        var logo = document.querySelector('#logo-area');
        logo.addEventListener('click', function(){
            alert('Hello Code Noobs!');
        })
    })();
    
    
   (function gsearch(){
        var searchbox = document.querySelector('#search-form');
        searchbox.addEventListener('submit', function(e){
            e.preventDefault();
            var searchterm = document.querySelector('#g-search');
            searchterm = searchterm.value;
            window.open(`https://www.google.com/search?q=${searchterm}`, '_blank');
        })
    })();

    (function howdy(){
        var namebox = document.querySelector('#name-form');
        namebox.addEventListener('submit', function(e){
            e.preventDefault();
            var name = document.querySelector('#name-greet').value;
            var response = document.querySelector('#response-area');
            response.style.display = 'block';
            response.value = "";
            response.value = `Howdy ${name}! Do you have any tacos?`;
        });
    })();
    
})