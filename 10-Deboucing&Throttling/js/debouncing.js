// Debounce Function (Forms Closure)
const debounceFunction = (callback, delay) => {
    // Lexical Scope
    // A closure is a function having access to the parent scope, even after the parent function has closed.
    let debounceTimer;

    return (...args) => { // Spread any given arguments
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => callback(...args), delay);
    }
}

// Regular Function
// function debounce(func, timeout = 300) {
//     let timer;
//     return (...args) => {
//         clearTimeout(timer);
//         timer = setTimeout(() => { func.apply(this, args); }, timeout);
//     };
// }