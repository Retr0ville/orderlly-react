import React from 'react';
import OwlCarousel from 'react-owl-carousel'
import FeaturedItem from '../../components/FeaturedItem';
import FeaturedImage1 from '../../assets/images/4.jpg'
import FeaturedImage2 from '../../assets/images/5.jpg'
import FeaturedImage3 from '../../assets/images/3.jpg'





const Carousel = (props) => {
  // $(document).ready(function() {
  //   $("#featured-slider").owlCarousel({
  //     items: 2,
  //     itemsDesktop: [1000, 2],
  //     itemsDesktopSmall: [990, 2],
  //     itemsTablet: [768, 1],
  //     pagination: true,
  //     navigation: false,
  //     navigationText: ["", ""],
  //     slideSpeed: 1000,
  //     autoPlay: true
  //   });
  // });

  const options = {
    margin: 20,
    loop: true,
    responsiveClass: true,
    nav: false,
    autoplay: true,
    navText: ["", ""],
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1,
        },
        700: {
            items: 1,
        },
        1000: {
            items: 1,
        }
    },
  };

  return (
    <div className="carousel container">
    <div className="row">
      <div className="col-md-12">
        <OwlCarousel id="featured-slider" className="owl-carousel owl-theme" {...options}>
          <FeaturedItem 
            featuredImage = {FeaturedImage1}
            description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            title = "Acer Nitro 5 sale off"
            oldCost = "$3000"
            newCost = "$1200"
          />
          <FeaturedItem 
            featuredImage = {FeaturedImage2}
            description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            title = "GTX 3090 sale off"
            oldCost = "$8000"
            newCost = "$4999"
          />
          <FeaturedItem 
            featuredImage = {FeaturedImage3}
            description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            title = "Asus ROG phone sale off"
            oldCost = "$302,000"
            newCost = "$120,000.99"
          />
          
        </OwlCarousel>
      </div>
    </div>
  </div>
  
  );
};

export default Carousel;