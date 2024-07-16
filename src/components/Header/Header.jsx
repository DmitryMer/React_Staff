import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import OrdersBasket from "../OrdersBasket/OrdersBasket";
import "./Header.css";


const basketLength = (props) => {
  return `${props.orders?.length}`;
};

const showOrders = (props) => {
  let basketSum = 0;

  {
    props.orders.forEach((order) => {
      basketSum += order.price;
    });
  }

  return (
    <div className="shop_cart">
      {props.orders.map((order) => (
        <OrdersBasket onDelete={props.onDelete} key={order.id} orders={order} />
      ))}
      <p>
        Итоговая сумма:{" "}
        <span style={{ fontWeight: "600" }}>{basketSum.toFixed(2)} $</span>
      </p>
    </div>
  );
};

const showNothing = () => (
  <div style={{ fontWeight: "600" }}>Товары не выбраны</div>
);

const Header = (props) => {
  let [cartOpen, setCartOpen] = useState(false);

  return (
    <>
      <header>
        <div>
          <div>House Staff</div>
          <ul className="nav">
            <FaShoppingCart
              onClick={() => setCartOpen((cartOpen = !cartOpen))}
              className={
                cartOpen ? "shop_cart_button active" : "shop_cart_button"
              }
            />
            {cartOpen ? (
              <div className="shop_cart">
                {basketLength(props) > 0 ? showOrders(props) : showNothing()}
              </div>
            ) : (
              ""
            )}
            <span>
              Выбрано товаров:{" "}
              <span style={{ fontWeight: "600" }}>{basketLength(props)}</span>
            </span>
            <li>
              <div>О нас</div>
            </li>
            <li>
              <div>Контакты</div>
            </li>
          </ul>
        </div>
        <div className="presentation"></div>
      </header>
    </>
  );
};

export { Header };
