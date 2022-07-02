## Polyfill in JS

A polyfill is a piece of code (usually JavaScript on the Web) used to provide modern functionality on older browsers that do not natively support it.

For example, a polyfill could be used to mimic the functionality of a text-shadow in IE7 using proprietary IE filters, or mimic rem units or media queries by using JavaScript to dynamically adjust the styling as appropriate, or whatever else you require.

JavaScript is notorious for having cross-browser compatibility issues. Internet Explorer, Mozilla Firefox, Google Chrome, Safari and Opera all have their own proprietary features and their own subset of the standard features. Different browsers implement each feature in their own way, and this can be a major headache for web developers trying to make things work for everybody.

Fortunately, JavaScript has enough flexibility and extensibility to bridge some of these gaps between each browser. These bridges are called polyfills.

We will create a few simple polyfills to see how they work. In this article, I will assume that you are a developer with a basic understanding of how JavaScript works.