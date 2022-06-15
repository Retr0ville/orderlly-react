import React from "react";
import "../../assets/styles/carousel.css";
import "../../assets/styles/bootstrap.min.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const FeaturedItem = (props) => {
  return (
    <div className="featured cursor-pointer">
      <a href="/pcs/6193d50d6e6022536464947a">
        <div className="bpic">
          <img src={props.featuredImage} alt="featured" />
        </div>
        <div className="details">
          <p className="description">{props.description}</p>
          <h3 className="title">{props.title}</h3>
          <h2 className="cost">
            {" "}
            -{" "}
            <del>
              <code>{props.oldCost}</code>
            </del>
            {props.newCost}
          </h2>
        </div>
      </a>
    </div>
  );
};

export default FeaturedItem;
