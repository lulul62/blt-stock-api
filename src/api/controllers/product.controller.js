const httpStatus = require('http-status');
const { handler: errorHandler } = require('../middlewares/error');

/**
 * Create new Product
 * @public
 */
exports.create = async (req, res, next) => {
    try {
      const product = new Product(req.body);
      const savedProduct = await product.save();
      res.status(httpStatus.CREATED);
      res.json(savedProduct.transform());
    } catch (error) {
    }
  };

  /**
 * Get product list
 * @public
 */
exports.list = async (req, res, next) => {
    try {
      const products = await Product.list(req.query);
      const transformedProducts = products.map(product => product.transform());
      res.json(transformedProducts);
    } catch (error) {
      next(error);
    }
  };

  /**
 * Update existing user
 * @public
 */
exports.update = (req, res, next) => {
    const updatedProduct = req.body
    const product = Object.assign(req.locals.product, updatedProduct);
    product.save()
      .then(savedProduct => res.json(savedProduct.transform()))
  };