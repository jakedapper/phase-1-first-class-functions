function receivesAFunction (hollaback) {
    //console.log(hollaback)
    return hollaback();
}


//const pizzas = (name) => `my name is ${name} and I make the pizzas`

//receivesAFunction(pizzas);

// function tony() {
//     return `I'm tony I make tha pizzas with`;
// }
function tony() {
    return `I'm tony I make tha pizzas with`;
}

function returnsANamedFunction() {
    return tony
}

function returnsAnAnonymousFunction(){
    //return () => { console.log("how many pizzas"); }
    return function() {
        return `I'm tony I make tha pizzas with`;
    }
}

//returnsAnAnonymousFunction(function(){console.log("how many pizzas")})