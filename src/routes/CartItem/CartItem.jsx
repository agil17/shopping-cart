import styles from "./CartItem.module.css";

// function CartItem ({ id, image, alt, title, description, units, price }) {
function CartItem({ title, image, alt, description, price, units }) {
  return (
    <div className={styles.cart_item_container}>
      <div className={styles.image_and_title}>
        <img src={image} alt={alt} className={styles.image} />
        <div className={styles.title_and_description}>
          <p className={styles.title}>{title}</p>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
      <div className={styles.quantity_price_remove}>
        <div className={styles.quantity_price}>
          <p className={styles.price}>Item Price: {price}</p>
          <p className={styles.quantity}>Quantity: {units}</p>
        </div>
        <button className={styles.remove_button}>Remove Item</button>
      </div>
    </div>
  );
}

export default CartItem;
