import React from 'react';

const Footer = (props) => {
  return (
    
      
<div className  ="footer">
 
  <div className ="footer-nav">
  <nav>
    <ul className ="nav justify-content-end">
      <li className ="nav-item">
          <a className ="nav-link" href="/"><i class="fa fa-github " aria-hidden="true"></i> Rtrvl's Github</a>
      </li>
      <li className ="nav-item">
          <a className ="nav-link" href="/"><i class="fa fa-info-circle" aria-hidden="true"></i> About</a>
      </li>
      <li className ="nav-item">
        <a className ="nav-link" href="/"><i class="fa fa-address-book" aria-hidden="true"></i> contact me</a>
      </li>
    </ul>
  </nav>
</div>
  <footer id="footer">
    
    <span><i className ="fa fa-copyright" aria-hidden="true"></i> Rtrvl 2021</span>
  </footer>
</div>
    
  );
};

export default Footer;