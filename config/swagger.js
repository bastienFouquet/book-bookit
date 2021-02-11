module.exports.swaggerConfig = {
  disable: false,
  //pathToGenerateFile: '/',
  //fileName: 'swagger.json',
  defaults: {
    pathsToIgnore: ['api/v1/'],
    responses: {
      '200': {
        description: 'The requested resource'
      },
      '400': {
        description: 'Bad request'
      },
      '401': {
        description: 'Unauthorized'
      },
      '403': {
        description: 'Forbidden'
      },
      '404': {
        description: 'Resource not found'
      },
      '500': {
        description: 'Internal server error'
      }
    },
  },
  swagger: {
    swagger: '2.0',
    info: {
      title: 'Book service a BookIt',
      description: 'This is the doc of book service',
      termsOfService: '',
      contact: {
        name: '',
        url: '',
        email: ''
      },
      license: {
        name: 'Apache 2.0',
        url: 'http://www.apache.org/licenses/LICENSE-2.0.html'
      },
      version: '1.0.0'
    },
    host: 'localhost:8082',
    basePath: '/',
    schemes: 'http',
    externalDocs: '',
    paths: {},
    definitions: {},
    securityDefinitions: {
      'Admin': {
        'type': 'apiKey',
        'description': 'user JWT Auth Token',
        'name': 'Authorization',
        'in': 'header',
      },
      'Connected': {
        'type': 'apiKey',
        'description': 'user JWT Auth Token',
        'name': 'Authorization',
        'in': 'header',
      },
      'Authorization': null
    }
  }
};


