import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

import { BsShop } from "react-icons/bs";
import "./Root.css";

export default function Root() {
  const [shoppingCartItems, setShoppingCartItems] = useState([]);
  return (
    <>
      <div className="root header">
        <div className="shop-logo">
          <BsShop className="logo" />
          <span className="shop-name">Fake-Shop</span>
        </div>
        <nav className="page-links">
          <ul>
            <li>
              <button>
                <Link to={`/`} >Home </Link>
              </button>
            </li>
            <li>
              <button>
                <Link to={`/Store`}>Store</Link>
              </button>
            </li>
            <li>
              <button>
                <Link to={`/Cart`}>Shopping Cart</Link>
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <div className="detail">
        <Outlet context={[shoppingCartItems, setShoppingCartItems]}/>
      </div>
    </>
  );
}
