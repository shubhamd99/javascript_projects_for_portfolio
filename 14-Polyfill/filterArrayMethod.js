// ---------------------------- Polyfill ----------------------------------

// Since this was a feature added in ES5, older browsers, such as Internet Explorer 8,
// and below, do not support the filter method. Fortunately, this feature is easy to create a polyfill for.

// First, we have to do the feature detection to see if the filter method is already supported.
// In this case, we just need to check if there is a function in the Array prototype named filter.
// If not, we can create it.

if (typeof Array.prototype.filter !== "function") {
    Array.prototype.filter = function (fn, thisp) {
        // implementation goes here
        if (this === null) throw new TypeError;
        if (typeof fn !== "function") throw new TypeError;

        var result = [];
        for (var i = 0; i < this.length; i++) {
            if (i in this) {
                var val = this[i];
                // Call method calls an function with given "this" property and the arguments provided individually
                if (fn.call(thisp, val, i, this)) {
                    // Filtering Array
                    result.push(val);
                }
            }
        }
        return result;
    };
}

// -------------------------------------------------------------------------

var isEven = function (n) {
    return n % 2 === 0;
};

[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter(isEven);
// returns [2, 4, 6, 8, 10]

// The filter method has an optional second parameter to bind to the this value of the function.
// For example, you could bind an object as this to the function passed to filter.

var fruits = {
    banana: "yellow",
    strawberry: "red",
    pumpkin: "orange",
    apple: "red"
};
var isRedFruit = function (name) {
    // this -> fruits
    // filter binds fruits
    return this[name] === "red";
};
["pumpkin", "strawberry", "apple", "banana", "strawberry"].filter(isRedFruit, fruits);
// returns ["strawberry", "apple", "strawberry"]


