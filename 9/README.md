## Why we use caching? Give some examples of caching in the web.

A hardware or software component that stores data so that future request for data can be served faster. With caching we can store frequently demanded data to increase the access speed. One simple example of caching is when a user visits a website. On the first visit, the browser needs to download all required files and data. But on subsequent requests when files and some data have been cashed the browser can access them directly from the user's device instead of redownloading them, therefore the page will load much faster.

### CDN servers

As the distance between our origin server and the end user increases the latency also increases. CDN is a server that sits between the user and the origin server. These servers are located all around the world and when a user makes a request they can access the closest CDN server to them.

### Cash-control headers

Cache-control is an HTTP header used to specify browser caching policies in both client requests and server responses. Policies include how a resource is cached, where it's cached and its maximum age before expiring.

A response with a ‘private’ directive can only be cached by the client and never by an intermediary agent, such as a CDN. These are often resources containing private data, such as a website displaying a user’s personal information. Conversely, the ‘public’ directive means the resource can be stored by any cache.

A response with a ‘no-store’ directive cannot be cached anywhere, ever. This means that every time a user requests this data, a request must be sent to the origin server for a fresh copy. This directive is typically reserved for resources that contain extremely sensitive data, such as bank account information.

This directive means that cached versions of the requested resource cannot be used without first checking to see if there is an updated version.

This directive dictates the time to live, in other words how many seconds a resource can be served from cache after it's been downloaded.

### Service workers

Service workers are scripts that are run by the browser of a client. Using them we can provide a good offline experience for our user. We can cache assets using service workers and serve these assets when user makes a request.
