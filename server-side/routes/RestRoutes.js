module.exports = function(app) {
  var userControllerr = require('../controllers/UserController')
  var dataTrackingController = require('../controllers/DataTrackingController')
  var imagesController = require('../controllers/ImageController')
  var calibrationController = require('../controllers/CalibrationController')
  var aoiController = require('../controllers/AOIController')

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
  
  app.route('/calibrations')
      .get(calibrationController.listCalibrations)
      .post(calibrationController.insertCalibration)

  app.route('/aoi')
      .get(aoiController.listAOIData)
      .post(aoiController.insertAOIData)

}
