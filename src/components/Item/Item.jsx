export default function Item(props) {
  return (
    <div className="item">
      <div className="item_image">
        <img src={props.item.image} onClick={() => props.onShowItem(props.item)}/>
      </div>
      <div className="item_text">
        <h4>{props.item.title}</h4>
        <p>{props.item.description}</p>
        <b>{props.item.price}$</b>
        <div className="add_to_cart" onClick={() => props.onAdd(props.item)}>
          +
        </div>
      </div>
    </div>
  );
}
