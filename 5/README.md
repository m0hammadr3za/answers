## ClientSide routing and ServerSide routing

In server-side routing the user sends requests to the server for every new page. So when a user clicks on a new page link a request will be sent to the server, if the page exists, the server will send a new html document for that specific page and a request to refresh the page and go to the respective URL.

In client-side rendering the user sends the initial request to the server and the server will send back the entire single page application. For routing, when a user clicks on a new page link, the UI will update and the UI updates. And also the url changes to represent a new page. Changing the url in SPAs makes intuitive sense and provides better user experience.
