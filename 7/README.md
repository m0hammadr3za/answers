## Why we need windowing / list virtualization in react? Show how windowing works in DOM.

Let's say that we have a long list of items that we want to show, normally we need to wait for React to write the entire list before the first element is visible. However using windowing we can improve performance by only writing the visible portion of the list to DOM.

React uses virtual DOM to speed up the initial render by avoiding the real DOM as much as possible. We would have a smaller container with relative positioning which contains the children with absolute positioning and a big DOM element for scrolling.
