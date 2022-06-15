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
      <div className="details d-flex pb-0 mb-0">
        <h3 className="title position-absolute">{props.title}</h3>
        {props.storageSize && (
          <p className="storage m-0 p-0">
            <code>{props.storageSize}</code>
          </p>
        )}
        <h2 className="cost">{props.cost}</h2>
        <div className="description p-0 m-0  pt-md-2">
          <p className="extra p-0 m-0 text-light mb-1 mb-sm-2">{props.description}</p>
          <hr className="m-0 p-0 mt-0 mb-1 mb-sm-2 mt-sm-2"/>
          <p className="quantity p-0 m-0 mt-0 mt-md-2">{props.quantity} Available</p>
          <p className="date p-0 m-0">Added on: {props.postedOn}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
