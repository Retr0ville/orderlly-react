/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import Header from "../../layout/header";
import Footer from "../../layout/footer";
import Carousel from "../../layout/carousel";
import pc from "../../assets/images/pc.gif";
import pcac from "../../assets/images/pcac.gif";
import sm from "../../assets/images/sm.gif";
import smac from "../../assets/images/smac.gif";

const Home = (props) => {
  return (
    <div className="body">
      <Header />
      <Carousel />
      <div className="main">
        <div className="container">
          <div className="card categories-container card-max-width">
            <div className="card-body opacity categories">
              <h2 className="card-title">Categories</h2>
              <div className="card-group">
                <div className="card" style={{ backgroundColor: "#4ad0f1" }}>
                  <a href="/pcs" className="category-img">
                    <img
                      className="card-img-top image"
                      src={pc}
                      alt="Card image cap"
                    />
                    <div class="middle">
                      <div class="text">PCs and Computers</div>
                    </div>
                  </a>
                </div>
                <div className="card">
                  <a href="/pc-accessories" className="category-img">
                    <img
                      className="card-img-top image"
                      src={pcac}
                      alt="Card image cap"
                    />{" "}
                    <div class="middle">
                      <div class="text">Computer Accessories</div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="card-group">
                <div className="card">
                  <a className="no-underline category-img" href="/smartphones">
                    <img
                      className="card-img-top image"
                      src={sm}
                      alt="Card image cap"
                    />{" "}
                    <div class="middle">
                      <div class="text">Smartphones</div>
                    </div>
                  </a>
                </div>
                <div className="card" style={{ backgroundColor: "#2f2f2f" }}>
                  <a href="/smartphone-accessories" className="category-img">
                    <img
                      className="card-img-top image"
                      src={smac}
                      alt="Card image cap"
                    />{" "}
                    <div class="middle">
                      <div class="text">Mobile Accessories</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
