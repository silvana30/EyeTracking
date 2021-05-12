module.exports = function(app) {
    var userControllerr = require('../controllers/UserController')

    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
      });

    app.route('/users')
        .get(userControllerr.listUsers)
        .post(userControllerr.insertUser)

}
