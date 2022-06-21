## What is single source of truth principle? Why it is important in React? Why we shouldn't store multiple copies of same data or data that we can derive from another data.

The single source of truth says that we should store our data only in one place. In react this is especially important when we want to store an application state. If we have multiple copies of a state we have duplication in our code which introduces a number of bugs when the original state updates and we need to update all the subsequent states.

React proposes that if something can be generated directly from our state we don’t need to make it a separate state.

Usually we add the state to the component that needs it and if some other component needs the same data instead of duplicating the state we lift up the state to a common parent component.
