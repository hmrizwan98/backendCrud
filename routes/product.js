const router = require("express").Router();
const productController = require("../controllers/productController");

router.post("/", productController.product_create);
router.get("/", productController.product_all);
router.get("/:productId", productController.product_details);
router.put("/:productId", productController.product_update);
router.delete("/:productId", productController.product_delete);
// router.post("/", verifyToken, (req, res) => {
//   jwt.verify(req.token, process.env.JWT_PRIVATE_KEY, (err, authData) => {
//     if (err) {
//       res.send({ message: "invalid token" });
//     } else {
//       res.json({
//         message: "Success",
//         authData,
//       });
//     }
//   });
// });

module.exports = router;
