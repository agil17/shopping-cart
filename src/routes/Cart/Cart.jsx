import { useOutletContext } from "react-router-dom";
import CartItem from "../CartItem/CartItem";

import styles from "./Cart.module.css";

function Cart() {
  // const cartItems = [
  //   {
  //     id: 1,
  //     image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
  //     alt: "item-image",
  //     title: "sweater",
  //     description: "this is a sweater",
  //     price: 100,
  //     units: 3,
  //   },
  //   {
  //     id: 2,
  //     image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
  //     alt: "item-image",
  //     title: "sweater",
  //     description: "this is a sweater",
  //     price: 100,
  //     units: 3,
  //   },
  // ];

  const [shoppingCartItems] = useOutletContext();

  // const addCartItems = () => {
  //   setShoppingCartItems([...shoppingCartItems, cartItems]);
  // }

  return (
    <ul className={styles.cart_container}>
      {shoppingCartItems
        .filter((cartItem) => cartItem.id !== undefined)
        .map((cartItem) => (
          <CartItem
            key={cartItem.id}
            id={cartItem.id}
            title={cartItem.title}
            description={cartItem.description}
            image={cartItem.image}
            alt={cartItem.alt}
            price={cartItem.price}
            units={cartItem.units}
          />
        ))}
    </ul>
  );
}

export default Cart;
