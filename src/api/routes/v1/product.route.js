const express = require('express');
const validate = require('express-validation');
const controller = require('../../controllers/product.controller');
const { authorize, ADMIN, LOGGED_USER } = require('../../middlewares/auth');

const router = express.Router();

router
  .route('/')
  .get(authorize(ADMIN), controller.list)
  .post(authorize(ADMIN),controller.create);
module.exports = router;
