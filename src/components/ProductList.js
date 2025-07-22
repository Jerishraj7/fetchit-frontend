import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './ProductList.css'; //  Import CSS file

const ProductList = ({ products }) => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const loadCart = async () => {
      if (user?.userId) {
        try {
          const res = await axios.get(`http://localhost:5005/api/cart/${user.userId}`);
          setCartItems(res.data.items);
        } catch (err) {
          console.error(" Error loading cart:", err);
        }
      }
    };

    loadCart();
  }, [user?.userId]);

  const addToCart = async (productId) => {
    try {
      if (!user || !user.userId) {
        navigate("/signin");
        return;
      }

      const itemToAdd = { productId, quantity: 1 };

      const cartResponse = await axios.post("http://localhost:5005/api/cart", {
        userId: user.userId,
        items: [itemToAdd],
      });

      if (cartResponse.status === 201) {
        console.log("Item added to cart");

        const updatedCart = await axios.get(`http://localhost:5005/api/cart/${user.userId}`);
        setCartItems(updatedCart.data.items);
        localStorage.setItem("cartItems", JSON.stringify(updatedCart.data.items));
      }

    } catch (error) {
      console.error(" Error adding to cart:", error);
      alert("Failed to add to cart");
    }
  };

  return (
    <div className="product-page">
      <h2 className="product-heading"> Available Gift Cards</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product._id} className="product-card">
            {/* Product Image */}
            <img
              src={product.image}
              alt={product.name}
              style={{ width: '150px', height: 'auto', marginBottom: '10px' }}
            />

            <h3 className="product-title">{product.name}</h3>
            <p className="product-description">{product.description}</p>
            <p className="product-price">€{product.price}</p>
            <button onClick={() => addToCart(product._id)} className="add-to-cart-btn">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
