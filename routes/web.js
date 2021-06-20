const homeController = require('../app/http/controllers/homeController');//getting object
const authController = require('../app/http/controllers/authController');//getting object
const cartController = require('../app/http/controllers/customers/cartController');//getting object

function initRoutes(app) {
    app.get('/', homeController().index);        //calling method of homeController object
    app.get('/login', authController().login);
    app.get('/register', authController().register);   


    app.get('/cart', cartController().index);
    app.post('/update-cart', cartController().update)
}

module.exports = initRoutes;