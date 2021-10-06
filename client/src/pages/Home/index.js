/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import Header from '../../layout/header';
import Footer from '../../layout/footer';
import Carousel from '../../layout/carousel';

const Home = (props) => {
  return (
<div >
      <Header />
  <div className="main">
      <Carousel />

<div className="container">
  <div className="card bg-secondary card-max-width">
    <div className="card-body opacity">
      <h2 className="card-title">Categories</h2>
      <div className="card-group">
        <div className="card">
          <a href="/pcs"><img className="card-img-top" src="img/1.jpg" alt="Card image cap"/></a>
        </div>
        <div className="card">
          <a href="/pc-accessories"><img className="card-img-top" src="img/2.jpg" alt="Card image cap"/></a>
        </div>
      </div>
      <div className="card-group">
        <div className="card">
          <a className="no-underline" href="/smartphones"><img className="card-img-top" src="img/1.jpg" alt="Card image cap"/></a>
        </div>
        <div className="card">
          <a href="/smartphone-accessories"><img className="card-img-top" src="img/2.jpg" alt="Card image cap"/></a>
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