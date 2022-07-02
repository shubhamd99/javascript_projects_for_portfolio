// Let’s first see how Array.reduce() works from its syntax:

// arr.reduce(callback( accumulator, currentValue, [, index[, array]] )[, initialValue])

// So, the original Array.reduce function takes two arguement :
// 1. A callback function as an argument and that callback function can have four arguments passed into it :
// a. accumulator
// b. current value
// c. index of the current value [optional]
// d. array [optional]
// 2. An initial value.

if (typeof Array.prototype.reduce !== "function") {
    Array.prototype.myReduce = function (callbackFn, initialValue) {
        var accumulator = initialValue;
        for (var i = 0; i < this.length; i++) {
            if (accumulator !== undefined) {
                accumulator = callbackFn.call(undefined, accumulator, this[i], i, this);
            } else {
                accumulator = this[i];
            }
        }
        return accumulator;
    }
}
