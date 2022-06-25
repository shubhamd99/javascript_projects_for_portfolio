// Throttling Function (Forms Closure)
const throttleFunction = (callback, delay) => {
    // Previously called time of the function

    // Lexical Scope
    // A closure is a function having access to the parent scope, even after the parent function has closed.
    let prev = 0;

    return (...args) => { // Spread any arguments
        // Current called time of the function
        let now = new Date().getTime();

        // Logging the difference between previously
        // called and current called timings
        console.log('now - prev = ', now - prev, 'delay = ', delay);

        // If difference is greater than delay call
        // the function again.
        if (now - prev > delay) {
            prev = now;

            // "..." is the spread operator here
            // returning the function with the
            // array of arguments
            return callback(...args);
        }
    }
}
