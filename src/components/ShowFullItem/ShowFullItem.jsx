export default function ShowFullItem(props) {
  return (
    <div className="full-item">
      <div>
        <img src="/src/img/close.png" className="full-item-close" onClick={() => props.onShowItem(props.item)}/>
        <div className="full-item-image">
          <img
            src={props.item.image}
            onClick={() => props.onShowItem(props.item)}
          />
        </div>
        <div className="full-item-text">
          <h4>{props.item.title}</h4>
          <p>{props.item.description}</p>
          <b>{props.item.price}$</b>
          <div className="add_to_cart" onClick={() => props.onAdd(props.item)}>
            +
          </div>
        </div>
      </div>
    </div>
  );
}
