## Event Bubbling, Capturing (Trickling), Delegation and Propagation

### Event bubbling

Bubbling means that the event propagates from the target element (i.e. the button the user clicked) up through its ancestor tree, starting from the nearest one. By default, all events bubble.
To better understand event bubbling, consider the following HTML example, which we will be referring to for most of this article:

```html
<html>
  <body>
    <div id="btn-container">
      <button class="btn">Click me</button>
    </div>
  </body>
</html>
```

```js
const ancestors = [
  window, document, document.documentElement,
  document.body, document.getElementById('btn-container')
];

// Target phase
document.querySelector('.btn').addEventListener('click', e => {
  console.log(`Hello from ${e.target}`);
});
// Bubble phase
ancestors.forEach(a => {
  a.addEventListener('click', e => {
    console.log(`Hello from ${e.currentTarget}`);
  });
});
```

### Event capturing
Capturing is the exact opposite of bubbling, meaning that the outer event handlers are fired before the most specific handler (i.e. the one on the button). Note that all capturing event handlers are run first, then all the bubbling event handlers.
You can use event capturing by applying a third argument to `EventTarget.addEventListener`, setting it to true. For example:

```js
// Capture phase
ancestors.forEach(a => {
  a.addEventListener('click', e => {
    console.log(`Hello from ${e.currentTarget}`);
  }, true);
});
```

### Event propagation
Having explained event bubbling and capturing, we can now explain the three phases of event propagation:

* During the capture phase, the event starts from `Window` and moves down to `Document`, the root element and through ancestors of the target element.
* During the target phase, the event gets triggered on the event target (e.g. the `button` the user clicked).
* During the bubble phase, the event bubbles up through ancestors of the target element until the root element, `Document` and, finally, `Window`.

### Event delegation
Event delegation refers to the idea of delegating event listening to parent elements instead of adding event listeners directly to the event targets. Using this technique, the parent can catch and handle the bubbling events as necessary.

In the below example, we delegate event handling from the button to Window and use Event.target to get the original event's target.

Advantages:

1. By using event delegation, we can listen for events on a large amount of elements without having to attach event listeners individually, which can provide performance benefits.
2. By using event delegation, dynamic elements (i.e. added or removed from the DOM over the course of time) can have their events captured and handled without requiring listeners to be registered or removed.

```js
window.addEventListener('click', e => {
  if (e.target.className === 'btn') console.log('Hello there!');
});
```

#### Link - https://www.30secondsofcode.org/articles/s/javascript-event-bubbling-capturing-delegation