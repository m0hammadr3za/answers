## Difference between Next.js ISR, SSR, CSR?

With client side components, we fetch the data directly inside of our components, and the data will be fetched when the component is mounted. In next.js this is useful when we are making a component, like a dashboard, that doesn’t need to be pre rendered and doesn’t require SEO indexing or when our data is frequently updating.

For pre-rendering our page we have two options: server-side rendering and static-site generation.

Using server-side rendering we can pre-render the page on our servers, send a static page to the user and then hydrate it. Using this method each user can get the latest data with each request.

Static-site generation means that we generate pages on build time and then serve these static pages to users. These pages can be served really fast.

Incremental static regeneration: this method allows us to use static-generation on pre page basis without rebuilding the entire website. This makes it so that we can scale the number of our pages.
