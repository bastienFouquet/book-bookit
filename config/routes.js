/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

const {swaggerConfig} = require('./swagger');
module.exports.routes = {

  /***************************************************************************
   *                                                                          *
   * Make the view located at `views/homepage.ejs` your home page.            *
   *                                                                          *
   * (Alternatively, remove this and add an `index.html` file in your         *
   * `assets` directory)                                                      *
   *                                                                          *
   ***************************************************************************/

  /***************************************************************************
   *                                                                          *
   * More custom routes here...                                               *
   * (See https://sailsjs.com/config/routes for examples.)                    *
   *                                                                          *
   * If a request to a URL doesn't match any of the routes in this file, it   *
   * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
   * not match any of those, it is matched against static assets.             *
   *                                                                          *
   ***************************************************************************/

  /**
   * BookController
   */
  'GET /books': {
    controller: 'BookController',
    action: 'all',
    swagger: {
      summary: 'Get all books',
      responses: swaggerConfig.defaults.responses,
      security: [{
        'Connected': []
      }, {
        'Admin': []
      }]
    }
  },
  'GET /books/:id': {
    controller: 'BookController',
    action: 'one',
    swagger: {
      summary: 'Get a book by id',
      responses: swaggerConfig.defaults.responses,
      parameters: [{
        in: 'path',
        name: 'id',
        required: true,
      }],
      security: [{
        'Connected': []
      }, {
        'Admin': []
      }]
    }
  },
  'POST /books': {
    controller: 'BookController',
    action: 'create',
    swagger: {
      summary: 'Create a book',
      responses: swaggerConfig.defaults.responses,
      parameters: [{
        in: 'body',
        name: 'body',
        required: true,
        schema: {
          properties: {
            isbn: {
              type: 'string',
              required: true
            },
            title: {
              type: 'string',
              required: true
            },
            quantity: {
              type: 'number',
              required: true
            }
          }
        }
      }],
      security: [{
        'Admin': []
      }]
    }
  },
  'PUT /books/:id': {
    controller: 'BookController',
    action: 'update',
    swagger: {
      summary: 'Update a book',
      responses: swaggerConfig.defaults.responses,
      parameters: [
        {
          in: 'path',
          name: 'id',
          required: true
        },
        {
          in: 'body',
          name: 'body',
          required: true,
          schema: {
            properties: {
              isbn: {
                type: 'string',
                required: true
              },
              title: {
                type: 'string',
                required: true
              },
              quantity: {
                type: 'number',
                required: true
              }
            }
          }
        }
      ],
      security: [{
        'Admin': []
      }]
    }
  },
  'DELETE /books/:id': {
    controller: 'BookController',
    action: 'delete',
    swagger: {
      summary: 'Delete a book',
      responses: swaggerConfig.defaults.responses,
      parameters: [{
        in: 'path',
        name: 'id',
        required: true
      }],
      security: [{
        'Admin': []
      }]
    }
  },

  /**
   * OperationController
   */
  'POST /operations': {
    controller: 'OperationController',
    action: 'create',
    swagger: {
      summary: 'Create an operation',
      responses: swaggerConfig.defaults.responses,
      parameters: [{
        in: 'body',
        name: 'body',
        required: true,
        schema: {
          properties: {
            book: {
              type: 'string',
              required: true
            },
            type: {
              type: 'string',
              required: true
            },
            quantity: {
              type: 'number',
              required: true
            }
          }
        }
      }],
      security: [{
        'Admin': []
      }]
    }
  },

  /**
   * TypeController
   */
  'GET /types': {
    controller: 'TypeController',
    action: 'all',
    swagger: {
      summary: 'Get all operations types',
      responses: swaggerConfig.defaults.responses,
      security: [{
        'Connected': []
      }, {
        'Admin': []
      }]
    }
  }
};
