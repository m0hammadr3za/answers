## Why we cannot use React hooks in conditional statements? How React hooks work internally?

We cannot use react hooks in conditional statements, loops or nested functions because the order in which hooks are called matters. It means react knows which state corresponds to which useState by relying on the order in which Hooks are called.

That's why we always should use hooks at the top level of our react function before any early returns. If, for example, we want to run an effect conditionally, we can put that condition inside our hook.
