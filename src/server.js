const http = require('http');
// const url = require('url');
// const query = require('querystring');
const htmlResponse = require('./htmlResponses.js');
const jsonResponse = require('./jsonResponses.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

// URLs are lowercase
/* const urlStruct = {
  '/': htmlResponse.getIndex,
  '/style.css': htmlResponse.getStylesheet,
  '/success': jsonResponse.success,
  '/badrequest': jsonResponse.badRequest,
  '/unauthorized': jsonResponse.unauthorized,
  '/unauthsuccess': jsonResponse.unauthSuccess,
  '/forbidden': jsonResponse.forbidden,
  '/internalerror': jsonResponse.internalError,
  '/notimplemented': jsonResponse.notImplemented,
  '/validrequest': jsonResponse.validRequest,
  '/notFound': jsonResponse.notFound,
}; */

// url struct is throwing a type error when I try to call the functions
const onRequest = (request, response) => {
  switch (request.url) {
    case '/':
      htmlResponse.getIndex(request, response);
      break;
    case '/style.css':
      htmlResponse.getStylesheet(request, response);
      break;
    case '/success':
      jsonResponse.success(request, response);
      break;
    case '/badrequest':
      jsonResponse.badRequest(request, response);
      break;
    case '/unauthorized':
      jsonResponse.unauthorized(request, response);
      break;
    case '/unauthsuccess':
      jsonResponse.unauthSuccess(request, response);
      break;
    case '/forbidden':
      jsonResponse.forbidden(request, response);
      break;
    case '/internalerror':
      jsonResponse.internalError(request, response);
      break;
    case '/notimplemented':
      jsonResponse.notImplemented(request, response);
      break;
    case '/validrequest':
      jsonResponse.validRequest(request, response);
      break;
    case '/notFound':
      jsonResponse.notFound(request, response);
      break;
    default:
      jsonResponse.notImplemented(request, response);
      break;
  }
  // console.log(typeof (urlStruct[request.url]));
  // urlStruct[request.url](request, response);
};

http.createServer(onRequest).listen(port);
console.log(`Listening on localhost:${port}`);
