module.exports = function(app) {
    var userControllerr = require('../controllers/UserController')

    app.route('/users')
        .get(userControllerr.listUsers)
        .post(userControllerr.insertUser)

}
