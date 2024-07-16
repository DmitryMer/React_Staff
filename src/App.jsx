import { useState, useEffect } from "react";
import {Header} from "./components/Header/Header";
import {Footer} from "./components/Footer/Footer";
import Items from "./components/Items/Items";
import Preloader from "./components/Preloader/Preloader";
import ShowFullItem from "./components/ShowFullItem/ShowFullItem";

const App = () => {
  // eslint-disable-next-line no-unused-vars
  const [items, setItems] = useState([]);
  const [orders, setOrders] = useState([]);
  // eslint-disable-next-line no-unused-vars
  let [inArray, setInArray] = useState(false);
  const [loader, setLoader] = useState(false);
  // eslint-disable-next-line no-unused-vars
  // eslint-disable-next-line no-unused-vars
  const [filteredItems, setFilteredItems] = useState([]);
  const [showFullItem, setShowFullItem] = useState(false);
  const [fullItem, setFullItem] = useState();

  useEffect(() => {
    setLoader(true);
    try {
      fetch("https://fakestoreapi.com/products/")
        .then((response) => response.json())
        .then((data) => {
          setItems(data);
          setFilteredItems(data);
          setLoader(false);
        });
    } catch (error) {
      console.error(`error to fetch ${error}`);
    }
  }, []);

  const onShowItem = (item) => {
    setFullItem(item);
    setShowFullItem(!showFullItem);
  };

  const choose = (status) => {
    if (status === "all") {
      setFilteredItems(items);
    } else if (status === "electronics") {
      setFilteredItems(items.filter((item) => item.category === "electronics"));
    } else if (status === "men's clothing") {
      setFilteredItems(
        items.filter((item) => item.category === "men's clothing")
      );
    } else if (status === "women's clothing") {
      setFilteredItems(
        items.filter((item) => item.category === "women's clothing")
      );
    } else {
      setFilteredItems(items.filter((item) => item.category === "jewelery"));
    }
  };

  const deleteOrder = (id) =>
    setOrders((orders) => orders.filter((order) => order.id !== id));

  const addToOrder = (item) => {
    orders.forEach((el) => {
      if (el.id === item.id) {
        inArray = true;
      }
    });

    if (!inArray) {
      setOrders([...orders, item]);
    }
  };

  console.log(orders,'orders');

  return (
    <>
      <div className="wrapper">
        <Header orders={orders} onDelete={deleteOrder} />
        <div className="buttons">
          <div onClick={() => choose("all")}>Все</div>
          <div onClick={() => choose("men's clothing")}>Мужская одежда</div>
          <div onClick={() => choose("women's clothing")}>Женская одежда</div>
          <div onClick={() => choose("jewelery")}>Бижутерия</div>
          <div onClick={() => choose("electronics")}>Электроника</div>
        </div>
        {loader ? (
          <Preloader />
        ) : (
          <Items
            onShowItem={onShowItem}
            items={filteredItems}
            onAdd={addToOrder}
          />
        )}
        {showFullItem ? (
          <ShowFullItem
            onShowItem={onShowItem}
            item={fullItem}
            onAdd={addToOrder}
          />
        ) : (
          ""
        )}
        <Footer />
      </div>
    </>
  );
};
export { App };
