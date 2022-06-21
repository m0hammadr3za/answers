## When to use Jotai (Recoil)? When to use Apollo Client (Relay)?

---

Jotai is useful for scenarios where there is a need to share a piece of state in multiple components. Specifically when these components are far apart in the component tree. Since jotai has a bottom-up approach to state management this issue can be resolved very easily.

Apollo can be used when we want a state management library that we can manage local and remote data using graphql, with. We can use it to fetch, update and modify our date while automatically updating our UI.
