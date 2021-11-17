/* eslint-disable react/prop-types */
import React from 'react'
import '../../assets/styles/card.css'
import '../../assets/styles/bootstrap.min.css'

const ItemCard = (props) => {
  return (
    <div className="store-item">
      <h2 className="grade">{props.grade}</h2>
      <div className="bpic">
        <img src={props.itemImage} alt="store-item" />
      </div>
      <div className="details">
        <h3 className="title">{props.title}</h3>
        <p className="storage">
          <code>{props.storageSize}</code>
        </p>
        <h2 className="cost">{props.cost}</h2>
        <div className="description">
          <p className="extra">{props.description}</p>
          <p className="quantity">{props.quantity} Available</p>
          <p className="date">Added on: {props.postedOn}</p>
        </div>
      </div>
    </div>
  )
}

export default ItemCard
