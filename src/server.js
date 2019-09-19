const http = require('http');
const htmlResponses = require('./htmlResponses.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const onRequest = (request, response) => {
  switch (request.url) {
    case '/':
      htmlResponses.getIndex(request, response);
      break;
    case '/style.css':
      htmlResponses.getStylesheet(request, response);
      break;
    default:
      break;
  }
};

http.createServer(onRequest).listen(port);
console.log(`Listening on localhost:${port}`);
