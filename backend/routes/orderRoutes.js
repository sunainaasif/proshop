import express from "express";
import { addOrderItems, getMyOrders, getOrderById, updateOrderToPaid } from "../controllers/orderController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").post(protect , addOrderItems);
router.route('/:id').get(protect , getOrderById)
router.route('order/:id/pay').put(protect , updateOrderToPaid)

router.route("/myorders").get(protect , getMyOrders);


export default router;
