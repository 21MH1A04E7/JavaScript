// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();//semicolum is required

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')