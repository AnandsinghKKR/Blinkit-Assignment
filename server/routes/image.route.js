const router = require('express').Router();
const {uploadMedia , getAllMedia} = require('../controllers/image.controller');
const verifyToken = require('../middlewares/verifyAuth.middleware');

router.route('/uploadmedia').post(verifyToken, uploadMedia);
router.route('/getall').get( verifyToken, getAllMedia);

module.exports = router