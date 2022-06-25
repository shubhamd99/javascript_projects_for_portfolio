## Debouncing and Throttling

The major difference between debouncing and throttling is that debounce calls a function when a user hasn’t carried out an event in a specific amount of time, while throttle calls a function at intervals of a specified amount of time while the user is carrying out an event. 

For example, if we debounce a scroll function with a timer of 250ms (milliseconds), the function is only called if the user hasn’t scrolled in 250ms. If we throttle a scroll function with a timer of 250ms, the function is called every 250ms while the user is scrolling.