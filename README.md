# E-Commerce Cart Logic

**INTERN ID:** CITS1119
**FULL NAME:** Anjalo Mathew
**NO. OF WEEKS:** 4 WEEKS
**PROJECT NAME:** E-Commerce Cart Logic
**PROJECT SCOPE:** Backend REST API for E-Commerce Cart Management

## Description

A complete E-Commerce Cart Logic REST API built with Node.js, Express, and MongoDB featuring:

- Product Management (Add, View, Update, Delete Products)
- Cart Management (Add to Cart, Update Quantity, Remove Item, Clear Cart)
- Order Placement (Place Order from Cart, View Orders, Cancel Order)
- JWT Protected Routes for Cart and Order operations
- Auto total price calculation on cart save
- Stock validation before adding to cart

## Technologies Used

- Node.js
- Express.js
- MongoDB (Local)
- JWT (JSON Web Tokens)
- bcryptjs
- dotenv

## API Endpoints

| Method | Endpoint                          | Description                        |
| ------ | --------------------------------- | ---------------------------------- |
| GET    | /api/products                     | Get all products                   |
| GET    | /api/products/:id                 | Get single product                 |
| POST   | /api/products                     | Create a product                   |
| PUT    | /api/products/:id                 | Update a product                   |
| DELETE | /api/products/:id                 | Delete a product                   |
| GET    | /api/cart                         | Get user's cart (Protected)        |
| POST   | /api/cart/add                     | Add item to cart (Protected)       |
| PUT    | /api/cart/update/:productId       | Update cart item qty (Protected)   |
| DELETE | /api/cart/remove/:productId       | Remove item from cart (Protected)  |
| DELETE | /api/cart/clear                   | Clear entire cart (Protected)      |
| POST   | /api/orders/place                 | Place order from cart (Protected)  |
| GET    | /api/orders                       | Get all user orders (Protected)    |
| GET    | /api/orders/:id                   | Get single order (Protected)       |
| PUT    | /api/orders/:id/cancel            | Cancel an order (Protected)        |

## How to Run

```
npm install
npm run dev
```
