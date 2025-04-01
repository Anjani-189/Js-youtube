// Immediately Invoked Function Expression (IIFE)
// It used to avoid the global scope pollution

(function chai(){
    console.log(`DB connected`)
})();

// semi-colon(;) at the end is required which show the 1st code is ended

((name) => {
    console.log(`DB connected two ${name}`)
})("Anjani")

