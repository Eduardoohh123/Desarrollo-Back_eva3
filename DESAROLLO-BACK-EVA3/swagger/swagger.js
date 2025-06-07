import swaggerJsdoc from 'swagger-jsdoc';

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API',
            version: '1.0.0',
            description: 'API Eva 3',
            contact: {
                name: 'Eduardo Johnson - Pablo Sandoval'
            },
            servers: [
                {
                    url: 'http://localhost:3000',
                    description: 'Local server'
                }
            ]
        }
    },
    apis: ['./routes/*.js', './swagger/*.js'], // Rutas de los archivos que contienen las anotaciones Swagger
};

const specs = swaggerJsdoc(options);
export default specs;