module.exports = function(app) {
  var userControllerr = require('../controllers/UserController')
  var dataTrackingController = require('../controllers/DataTrackingController')
  var imagesController = require('../controllers/ImageController')

  app.use(function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
    });

  app.route('/users')
      .get(userControllerr.listUsers)
      .post(userControllerr.insertUser)

  app.route('/dataTrackings')
      .get(dataTrackingController.listTrackings)
      .post(dataTrackingController.insertTracking)

  app.route('/images')
      .get(imagesController.listImages)
      .post(imagesController.insertImage)
}
