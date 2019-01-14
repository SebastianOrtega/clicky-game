import React from "react";
import "./ItemCard.css";

const ItemCard = props => (
  <div className="card">
    <div className="img-container">
      <button
        href="#"
        onClick={() => props.selectItemCard(props.breed)}
        className={
          props.curScore === 0
            ? "style_prevu_kit style_prevu_kit_ex"
            : "style_prevu_kit"
        }
      >
        <img alt={props.breed} src={props.image} />
      </button>
    </div>
  </div>
);

export default ItemCard;
