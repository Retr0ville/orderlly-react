/* eslint-disable react/prop-types */
import React from "react";
import "../../assets/styles/card.css";
import "../../assets/styles/bootstrap.min.css";

const ItemCard = (props) => {
  return (
    <div className="store-item">
      <h2 className="grade">{props.grade}</h2>
      <div className="bpic">
        <img src={props.itemImage} alt="store-item" />
      </div>
      <div className="details d-flex justify-content-around">
        <h3 className="title position-absolute top-0">{props.title}</h3>
        {props.storageSize && (
          <p className="storage">
            <code>{props.storageSize}</code>
          </p>
        )}
        <h2 className="cost">{props.cost}</h2>
        <div className="description">
          <p className="extra p-0 m-0">{props.description}</p>
          <p className="quantity p-0 m-0 mt-2 ju">{props.quantity} Available</p>
          <p className="date p-0 m-0">Added on: {props.postedOn}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
