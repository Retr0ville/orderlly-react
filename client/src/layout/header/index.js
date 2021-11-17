import React, { useState } from 'react';
import NavItemIcon from '../../components/NavItemIcon';
import banner from '../../assets/images/home-banner.png';


const Header = () => {
  const [isLoggedIn] = useState(false);

  return (
    <div>
      <header>
  <div>
    <a href="/"><h1 className="orderlly">Orderl.ly</h1></a>
  </div>
  
  <div className="header-nav">
    <nav>
    <ul className="nav justify-content-end">
      <NavItemIcon 
        href='#'
        faIcon='fa fa-laptop'
        text= 'My posts'
      />
      <NavItemIcon 
        href='#'
        faIcon='fa fa-star'
        text= 'Favourites'
      />
      <NavItemIcon 
        href='#'
        faIcon='fa fa-user-plus'
        text= 'Login/Sign-up'
      />
      <NavItemIcon 
        isHidden= {!isLoggedIn}
        href='#'
        faIcon='fa fa-user'
        text= 'Profile'
      />
  </ul>
  </nav>
</div>
</header>
    <div className="home-banner">
    <img className="banner-img" src={banner} alt="home-banner" />
  </div>
  </div>
  );
};

export default Header;