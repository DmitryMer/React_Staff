import "./OrdersBasket.css";
import { FaTrash } from "react-icons/fa";

export default function OrdersBasket(props) {
  return (
    <div className="add_to_basket">
      <img src={props.orders.image} />
      <h4>{props.orders.title}</h4>
      <b>{props.orders.price}$</b>
      <FaTrash className="delete_icons" onClick={() => props.onDelete(props.orders.id)}/>
    </div>
  );
}
