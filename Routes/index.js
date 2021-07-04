const userRoutes = require('./UserRoutes');
const FileRoutes = require('./FileRoutes');


const routes = (app) =>{


    userRoutes(app);
    FileRoutes(app);



}


module.exports = routes;