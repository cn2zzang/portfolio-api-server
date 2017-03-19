const paths =  {
  '/users': {
    get: {
      tags: ['User'],
      summary: '유저 조회',
      operationId: 'findUsers',
      consumes: ["application/json"],
      produces: ["application/json"],
      parameters: [
        {
          in: "query",
          name: "limit",
          required: true,
          type: 'number',
          default: 10
        },
        {
          in: "query",
          name: "offset",
          required: true,
          type: 'number',
          default: 0
        },
      ],
      responses: {
        200: {description: 'OK'},
        400: {description: 'BadRequest'}
      }
    },
    post: {
      tags: ['User'],
      summary: '유저 추가',
      operationId: 'addUsers',
      consumes: ["application/json"],
      produces: ["application/json"],
      parameters: [
        {
          in: "body",
          name: "body",
          required: true,
          schema: {
            type: 'object',
            properties: {
              name: {
                type: 'string'
              }
            }
          }
        },
      ],
      responses: {
        201: {description: 'Created'},
        400: {description: 'BadRequest'},
        409: {description: 'Conflict'}
      }
    }
  },
  '/users/{id}': {
    get: {
      tags: ['User'],
      summary: '유저 조회',
      operationId: 'getUsers',
      consumes: ["application/json"],
      produces: ["application/json"],
      parameters: [
        {
          in: "path",
          name: "id",
          required: true,
          type: 'number'
        },
      ],
      responses: {
        200: {description: 'NoContent'},
        404: {description: 'BadRequest'}
      }
    },
    delete: {
      tags: ['User'],
      summary: '유저 삭제',
      operationId: 'delUsers',
      consumes: ["application/json"],
      produces: ["application/json"],
      parameters: [
        {
          in: "path",
          name: "id",
          required: true,
          type: 'number'
        },
      ],
      responses: {
        204: {description: 'NoContent'},
        400: {description: 'BadRequest'},
        404: {description: 'BadRequest'}
      }
    },
    put: {
      tags: ['User'],
      summary: '유저 수정',
      operationId: 'putUsers',
      consumes: ["application/json"],
      produces: ["application/json"],
      parameters: [
        {
          in: "path",
          name: "id",
          required: true,
          type: 'number'
        },
        {
          in: "body",
          name: "body",
          required: true,
          schema: {
            type: 'object',
            properties: {
              name: {
                type: 'string'
              }
            }
          }
        },
      ],
      responses: {
        200: {description: 'Created'},
        400: {description: 'BadRequest'},
        409: {description: 'Conflict'}
      }
    }
  }
};

module.exports = {
  "swagger": "2.0",
  "info": {
    "description": "codelab api 문서입니다",
    "version": "1.0.0",
    "title": "Swagger codelab api document",
    "termsOfService": "http://swagger.io/terms/",
    "contact": {
      "email": "apiteam@swagger.io"
    },
    "license": {
      "name": "Apache 2.0",
      "url": "http://www.apache.org/licenses/LICENSE-2.0.html"
    }
  },
  "host": "localhost:3000",
  "basePath": "/",
  "schemes": [
    "http"
  ],
  "paths": paths,
  "securityDefinitions": {
    "petstore_auth": {
      "type": "oauth2",
      "authorizationUrl": "http://petstore.swagger.io/oauth/dialog",
      "flow": "implicit",
      "scopes": {
        "write:pets": "modify pets in your account",
        "read:pets": "read your pets"
      }
    },
    "api_key": {
      "type": "apiKey",
      "name": "api_key",
      "in": "header"
    }
  },
  "externalDocs": {
    "description": "Find out more about Swagger",
    "url": "http://swagger.io"
  }
}