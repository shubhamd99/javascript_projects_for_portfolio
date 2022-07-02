// Let’s first see how Array.map() works from its syntax:

// let newArray = arr.map(callback(currentValue[, index[, array]]) {
//   return element for newArray, after executing something
// });

// So, the original Array.map function takes a callback function as an argument and
// that callback function can have three arguments passed into it :
// a. current value
// b. index of the current value [optional]
// c. array [optional]

if (typeof Array.prototype.map !== "function") {
    Array.prototype.myMap = function (callbackFn) {
        var arr = [];
        for (var i = 0; i < this.length; i++) {
            /* call the callback function for every value of this array and
               push the returned value into our resulting array
            */
            arr.push(callbackFn(this[i], i, this));
        }
        return arr;
    }
}