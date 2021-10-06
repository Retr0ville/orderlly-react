import React from 'react';

const Footer = (props) => {
  return (
    
      
<div class="footer">
 
  <div class="footer-nav">
  <nav>
    <ul class="nav justify-content-end">
      <li class="nav-item">
          <a class="nav-link" href="/"><i class="fa fa-github " aria-hidden="true"></i> Rtrvl's Github</a>
      </li>
      <li class="nav-item">
          <a class="nav-link" href="/"><i class="fa fa-info-circle" aria-hidden="true"></i> About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/"><i class="fa fa-address-book" aria-hidden="true"></i> contact me</a>
      </li>
    </ul>
  </nav>
</div>
  <footer id="footer">
    
    <span><i class="fa fa-copyright" aria-hidden="true"></i> Rtrvl 2021</span>
  </footer>
</div>
    
  );
};

export default Footer;