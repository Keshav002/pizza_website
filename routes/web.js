const homeController = require('../app/http/controllers/homeController');//getting object
const authController = require('../app/http/controllers/authController');//getting object
const cartController = require('../app/http/controllers/customers/cartController');//getting object
const orderController = require('../app/http/controllers/customers/orderController');//getting object
const adminOrderController = require('../app/http/controllers/admin/orderController');//getting object
const statusController = require('../app/http/controllers/admin/statusController');//getting object

//middlewares
const guest = require('../app/http/middlewares/guest');
const auth = require('../app/http/middlewares/auth');
const admin = require('../app/http/middlewares/admin');


function initRoutes(app) {
    app.get('/', homeController().index);        //calling method of homeController object
    app.get('/login', guest, authController().login);
    app.post('/login', authController().postLogin);
    app.get('/register', guest, authController().register);   
    app.post('/register', authController().postRegister);   
    app.post('/logout', authController().logout);   


    app.get('/cart', cartController().index);
    app.post('/update-cart', cartController().update)

    //customer routes
    app.post('/orders', auth, orderController().store)
    app.get('/customer/orders', auth, orderController().index)
    app.get('/customer/orders/:id', auth, orderController().show)
    
    //admin routes
    app.get('/admin/orders', admin, adminOrderController().index)
    app.post('/admin/order/status', admin, statusController().update)
}

module.exports = initRoutes;