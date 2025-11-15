import { useState } from "react";

import styles from "./ProductItem.module.css";

import { FaMinus, FaPlus } from "react-icons/fa";
import { useOutletContext } from "react-router-dom";

function ProductItem({ id, title, image, price, description }) {
  const [quantity, setQuantity] = useState(1);

  const [shoppingCartItems, setShoppingCartItems] = useOutletContext();

  const handleDecreaseQuantity = () => {
    setQuantity((prev) => prev - 1);
  };

  const handleIncreaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleQuantityOnChange = (e) => {
    if (e.target.value > 0) {
      setQuantity(Number(e.target.value));
    }
  };

  const updateCartItem = () => {
    
  };

  const handleAddToCart = () => {
    const buttonEl = document.querySelector(`.${styles.add_to_cart_button}`);

    const newItem = {
      id: buttonEl.dataset.id,
      title: buttonEl.dataset.title,
      description: buttonEl.dataset.description,
      price: buttonEl.dataset.price,
      image: buttonEl.dataset.image,
      units: quantity,
    };

    // updateCartItem(newItem)
  };
  return (
    <div className={styles.card_container}>
      <input type="hidden" name="id" value={id} id="id" />
      <input
        type="hidden"
        name="description"
        value={description}
        id="description"
      />
      <p className={styles.card_title}>{title}</p>
      <img src={image} alt="product-image" className={styles.card_img} />
      <div className={styles.product_price_buttons}>
        <p className={styles.product_price}>
          &#36;<span id="price">{price}</span>
        </p>
        <div className={styles.product_buttons}>
          <div className={styles.quantity_input_container}>
            <button
              className={styles.minus_button}
              onClick={handleDecreaseQuantity}
            >
              <FaMinus />
            </button>
            <input
              type="number"
              name="quantity"
              id="quantity"
              className={styles.product_quantity}
              value={quantity}
              onChange={handleQuantityOnChange}
            />
            <button
              className={styles.plus_button}
              onClick={handleIncreaseQuantity}
            >
              <FaPlus />
            </button>
          </div>
          <button
            className={styles.add_to_cart_button}
            onClick={handleAddToCart}
            data-id={id}
            data-title={title}
            data-description={description}
            data-image={image}
            data-price={price}
            data-units={quantity}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
