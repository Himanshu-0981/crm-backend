const productModel = require("../../models/manageProducts/model.product");
const sendResponse = require("../../utils/util.response");
const sendError = require("../../utils/util.error");

const handleNewProduct = async (req, res) => {
  const { country, product, status } = req.body;
  try {
    if (country && product && status) {
      const productData = new productModel({
        country,
        product,
        status,
      });

      const savedProduct = await productData.save();
      sendResponse(res, 201, true, "Data saved successfully", savedProduct);
    } else {
      sendResponse(res, 400, false, "All field is required");
    }
  } catch (err) {
    sendError(res, err);
  }
};

const handleProductList = async (req, res) => {
  try {
    const productList = await productModel
      .find({})
      .select("country product status createdAt updatedAt");
    if (productList)
      return sendResponse(res, 200, true, "Got data successfully", {
        productList,
      });
    sendResponse(res, 404, "error while getting list");
  } catch (err) {
    sendResponse(res, 400, false, "error while getting product list");
  }
};

const handleUpdateProduct = async (req, res) => {
  const { id } = req.params;
  const { country, product, status } = req.body;
  try {
    if (country && product && status) {
      const updatedProduct = await productModel.findByIdAndUpdate(
        id,
        {
          country,
          product,
          status,
        },
        { new: true }
      );
      sendResponse(res, 201, true, "Data updated successfully", updatedProduct);
    } else {
      sendResponse(res, 400, false, "All field is required");
    }
  } catch (err) {
    sendError(res, err);
  }
};

module.exports = { handleNewProduct, handleProductList, handleUpdateProduct };
