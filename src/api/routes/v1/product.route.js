const express = require('express');
const validate = require('express-validation');
const controller = require('../../controllers/product.controller');
const { authorize, ADMIN, LOGGED_USER } = require('../../middlewares/auth');

const router = express.Router();

/**
 * Load user when API with userId route parameter is hit
 */
router.param('userId', controller.load);


router
  .route('/')
  .get(authorize(ADMIN), controller.list)
  .post(authorize(ADMIN),controller.create);

router
  .route('/:ProductId')
  .put(authorize(LOGGED_USER), controller.replace)
  .delete(authorize(LOGGED_USER), controller.remove);


module.exports = router;
