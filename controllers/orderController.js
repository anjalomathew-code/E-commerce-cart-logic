const Order = require('../models/Order');
const Cart = require('../models/Cart');

// @desc   Place order from cart
// @route  POST /api/orders/place
const placeOrder = async (req, res) => {
  try {
    const { shippingAddress } = req.body;

    const cart = await Cart.findOne({ userId: req.userId });
    if (!cart || cart.items.length === 0) {
      return res.status(400).json({ message: 'Cart is empty' });
    }

    const order = new Order({
      userId: req.userId,
      items: cart.items,
      totalPrice: cart.totalPrice,
      shippingAddress
    });

    await order.save();

    // Clear cart after placing order
    cart.items = [];
    await cart.save();

    res.status(201).json({ message: 'Order placed successfully', order });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc   Get all orders for user
// @route  GET /api/orders
const getOrders = async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.userId }).populate('items.product', 'name price');
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc   Get single order by ID
// @route  GET /api/orders/:id
const getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate('items.product', 'name price');
    if (!order) return res.status(404).json({ message: 'Order not found' });
    res.json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc   Cancel an order
// @route  PUT /api/orders/:id/cancel
const cancelOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) return res.status(404).json({ message: 'Order not found' });
    if (order.status !== 'pending') {
      return res.status(400).json({ message: 'Only pending orders can be cancelled' });
    }
    order.status = 'cancelled';
    await order.save();
    res.json({ message: 'Order cancelled', order });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { placeOrder, getOrders, getOrderById, cancelOrder };
