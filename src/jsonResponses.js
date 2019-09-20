const respondJSON = (request, response, status, object) => {
  response.writeHead(status, { 'Content-Type': 'application/json' });
  response.write(JSON.stringify(object));
  response.end();
};

// Success responses
const success = (request, response) => {
  const responseJSON = {
    message: 'This is a successful response.',
  };

  respondJSON(request, response, 200, responseJSON);
};


// Client error responses
const badRequest = (request, response, params) => {
  if (params === '?valid=true') {
    const responseJSON = {
      message: `This request has the required parameters (${params}).`,
    };

    respondJSON(request, response, 200, responseJSON);
  } else {
    const responseJSON = {
      message: `This request does not have the required parameters (${params}).`,
      id: 'badRequest',
    };

    respondJSON(request, response, 400, responseJSON);
  }
};

const notFound = (request, response) => {
  const responseJSON = {
    message: 'The page you are looking for was not found.',
    id: 'notFound',
  };

  respondJSON(request, response, 404, responseJSON);
};

const unauthorized = (request, response, query) => {
  const responseJSON = {};
  if (query === '?loggedIn=true') {
    respondJSON.message = 'You are successfully authenticated.';
    respondJSON(request, response, 200, responseJSON);
  } else {
    respondJSON.message = 'You must be logged in to access.';
    respondJSON.id = 'unauthorized';

    respondJSON(request, response, 401, responseJSON);
  }
};

const forbidden = (request, response) => {
  const responseJSON = {
    message: 'The access requested is forbidden.',
    id: 'forbidden',
  };

  respondJSON(request, response, 403, responseJSON);
};

// Server error responses
const internalError = (request, response) => {
  const responseJSON = {
    message: 'Something has gone wrong with the server.',
    id: 'internal',
  };

  respondJSON(request, response, 500, responseJSON);
};

const notImplemented = (request, response) => {
  const responseJSON = {
    message: 'Status code has not been implemented.',
    id: 'notImplemented',
  };

  respondJSON(request, response, 501, responseJSON);
};

// Export
module.exports = {
  success,
  badRequest,
  notFound,
  unauthorized,
  forbidden,
  internalError,
  notImplemented,
};
