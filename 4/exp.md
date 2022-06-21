## Difference between React.memo, useMemo and useCallback?

---

React.memo is a higher-order component which accepts a react component and an optional function that uses props to conditionally update the component using memoization. This method only exists as a performance optimization and should not be used to prevent renders.

Usememo is a hook that takes a value and an array of dependencies and chases the value of the function. So if we have a function that is computationally expensive we can use this hook to prevent rerunning the function.

Usecallback is a hook that is very similar to usememo but this hook chases the function itself. We can use this hook to prevent a child component from unnecessary rerenders.
