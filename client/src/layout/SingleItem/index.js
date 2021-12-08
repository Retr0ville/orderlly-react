import React from "react";
import "../../assets/styles/DetailsPage.css";

const SingleItem = (props) => {
  return (
    <div className="item__detail">
      <div className="detail__pic">
        <img src={props.itemImage} alt="store-item"/>
      </div>
      <div className="detail__details">
        <div className="title_specs">
          <h2 className="detail__title">{props.title}</h2>
          <p className="detail__specs">
            <code>{props.graphicsCard}, {props.storageSize}</code>
          </p>
        </div>
        <div className="detail__description">
          <p className="detail__extra">{props.description}
          </p>
        </div>
        <div className="extra_desc">
          <h5 className="detail__grade">Grade: {props.grade}</h5>
          <p className="detail__quantity">{props.quantity} In stock</p>
          <p className="detail__date">Added on: {props.postedOn}</p>
          <h4 className="detail__cost">{props.cost}</h4>
        </div>
        <div className="buttons">
          <button type="submit" className="buy">
            Buy Now <i class="fa fa-money" aria-hidden="true"></i>
          </button>
          <button type="submit" className="cart">
            Add to cart <i class="fa fa-cart-plus" aria-hidden="true"></i>
          </button>
          <button type="submit" className="Fav">
            Add to favourites <i class="fa fa-star-o" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleItem;
