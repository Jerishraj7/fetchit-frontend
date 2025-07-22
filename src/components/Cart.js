import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Cart.css'; // Your custom CSS for styling

const Cart = ({ products }) => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const fetchCart = async () => {
      try {
        if (!user || !user.userId) {
          navigate("/signin");
          return;
        }

        const response = await axios.get(`http://localhost:5005/api/cart/${user.userId}`);

        if (response.status === 200) {
          const enrichedItems = response.data.items.map((item) => {
            const product = products.find((p) => p._id === item.productId);
            return product
              ? { ...product, quantity: item.quantity, productId: item.productId }
              : null;
          }).filter(Boolean);

          setCartItems(enrichedItems);
        }
      } catch (err) {
        console.error(" Failed to load cart:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, [user?.userId, products]);

  const handleRemove = async (productId) => {
    try {
      await axios.delete(`http://localhost:5005/api/cart/${user.userId}`, {
        data: { productId }
      });

      setCartItems((prev) =>
        prev.filter((item) => item.productId !== productId)
      );
    } catch (err) {
      console.error(" Failed to remove item:", err);
    }
  };

  const handleCheckout = async () => {
    try {
      const response = await axios.post("http://localhost:5005/api/checkout", {
        userId: user.userId
      });

      if (response.status === 200) {
        alert("✅ Voucher sent to your email!");
        setCartItems([]); // Optional: visually clear cart
      }
    } catch (err) {
      console.error(" Checkout failed:", err);
      alert(" Failed to send voucher. Please try again.");
    }
  };

  let total = 0;
  for (let i = 0; i < cartItems.length; i++) {
    const item = cartItems[i];
    if (item && !isNaN(item.quantity) && !isNaN(item.price)) {
      total += Number(item.quantity) * Number(item.price);
    }
  }

  if (loading) return <p className="cart-loading">Loading cart...</p>;

  return (
    <div className="cart-container">
      <h2 className="cart-title">🛒 Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="cart-empty">No items in cart.</p>
      ) : (
        <div className="cart-content">
          <ul className="cart-list">
            {cartItems.map((item) => {
              const subtotal = Number(item.quantity) * Number(item.price);
              return (
                <li key={item.productId} className="cart-item">
                  <strong>{item.name}</strong><br />
                  Quantity: {item.quantity} × €{item.price.toFixed(2)} = <strong>€{subtotal.toFixed(2)}</strong>
                  <br />
                  <button
                    onClick={() => handleRemove(item.productId)}
                    className="remove-btn"
                  >
                    ❌ Remove
                  </button>
                </li>
              );
            })}
          </ul>

          <hr />
          <p className="cart-total">
            <strong>Total: €{total.toFixed(2)}</strong>
          </p>

          <button
            onClick={handleCheckout}
            style={{
              padding: "12px 20px",
              backgroundColor: "#6a0dad",
              color: "#fff",
              fontSize: "1rem",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              marginTop: "1rem"
            }}
          >
             Checkout & Email Voucher
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
