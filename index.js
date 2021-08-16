const   express           = require('express'),
        app             =   express(),
        usersRoutes     =   require('./routes/users'),
        postRoutes      =   require('./routes/posts'),
        swaggerUi       =   require('swagger-ui-express'),
        swaggerJsDoc    =   require('swagger-jsdoc');
app.use(express.json());
const swaggerOption = {
    swaggerDefinition: (swaggerJsDoc.Options = {
        info: {
            title: "My-Posts",
            description: "API Documentation",
            contact: {
                name: "Developer",
            },
            servers: ["http://localhost:3000/"],
        },
    }),
    apis:  ["index.js", "./routes/*.js"],
};
const swaggerDocs = swaggerJsDoc(swaggerOption);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use('/posts', postRoutes);
app.use('/users', usersRoutes);


app.listen(3000, () => {
    console.log('app running')
})