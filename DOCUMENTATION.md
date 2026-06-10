# E-Commerce Cart Logic - Documentation

**INTERN ID:** CITS1119  **FULL NAME:** Anjalo Mathew  
**DOMAIN:** Backend Web Development  **DURATION:** 4 weeks  **COMPANY:** CODTECH IT SOLUTIONS

---

## Project Overview

A backend REST API for E-Commerce Cart Logic built with Node.js, Express, and MongoDB.
Implements JWT-based cart and order management with protected routes.

---

## Technologies Used

| Technology | Purpose                    |
| ---------- | -------------------------- |
| Node.js    | Runtime environment        |
| Express.js | Web framework              |
| MongoDB    | Database                   |
| Mongoose   | ODM for MongoDB            |
| JWT        | Token-based authentication |
| bcryptjs   | Password hashing           |
| dotenv     | Environment variables      |
| nodemon    | Development server         |

---

## Project Structure

```
ecommerce-cart-logic/
├── config/
│   └── db.js               # MongoDB connection
├── controllers/
│   ├── productController.js # Product CRUD logic
│   ├── cartController.js   # Cart management logic
│   └── orderController.js  # Order placement logic
├── middleware/
│   └── authMiddleware.js   # JWT authentication middleware
├── models/
│   ├── Product.js          # Product schema
│   ├── Cart.js             # Cart schema (auto total price)
│   └── Order.js            # Order schema
├── routes/
│   ├── productRoutes.js    # Product endpoints
│   ├── cartRoutes.js       # Cart endpoints (protected)
│   └── orderRoutes.js      # Order endpoints (protected)
├── screenshots/            # API testing screenshots
├── .env                    # Environment variables
├── .gitignore
├── package.json
├── server.js               # Main entry point
├── README.md
└── DOCUMENTATION.md
```

---

## API Endpoints

### Products

| Method | Endpoint           | Description          | Auth     |
| ------ | ------------------ | -------------------- | -------- |
| GET    | /api/products      | Get all products     | Public   |
| GET    | /api/products/:id  | Get single product   | Public   |
| POST   | /api/products      | Create a product     | Public   |
| PUT    | /api/products/:id  | Update a product     | Public   |
| DELETE | /api/products/:id  | Delete a product     | Public   |

### Cart

| Method | Endpoint                    | Description              | Auth      |
| ------ | --------------------------- | ------------------------ | --------- |
| GET    | /api/cart                   | Get user's cart          | Protected |
| POST   | /api/cart/add               | Add item to cart         | Protected |
| PUT    | /api/cart/update/:productId | Update item quantity     | Protected |
| DELETE | /api/cart/remove/:productId | Remove item from cart    | Protected |
| DELETE | /api/cart/clear             | Clear entire cart        | Protected |

### Orders

| Method | Endpoint              | Description            | Auth      |
| ------ | --------------------- | ---------------------- | --------- |
| POST   | /api/orders/place     | Place order from cart  | Protected |
| GET    | /api/orders           | Get all user orders    | Protected |
| GET    | /api/orders/:id       | Get single order       | Protected |
| PUT    | /api/orders/:id/cancel| Cancel an order        | Protected |

---

## Key Features

- **Auto Total Price** - Cart total is automatically recalculated on every save
- **Stock Validation** - Checks product stock before adding to cart
- **JWT Protection** - All cart and order routes require a valid Bearer token
- **Order Status Flow** - Orders move through: pending → confirmed → shipped → delivered
- **Cart to Order** - Placing an order automatically clears the cart
