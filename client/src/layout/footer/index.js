import React from "react";

const Footer = (props) => {
  return (
    <div className="footer h-100 bg-dark">
      <div className="footer-nav d-flex justify-content-center justify-content-md-end">
        <nav>
          <ul className="nav flex-column mt-4 w-100 text-center text-md-end mb-3 mb-md-0">
            <li className="nav-item mb-3 ">
              <a className="nav-link text-secondary " href="https://github.com/Retr0ville/orderlly-react">
                <i class="fa fa-github " aria-hidden="true"></i> My Github
              </a>
            </li>
            <li className="nav-item mb-3">
              <a className="nav-link w-100 text-secondary" href="https://github.com/Retr0ville">
                <i class="fa fa-info-circle" aria-hidden="true"></i> About me
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link w-100 text-secondary" href="https://github.com/Retr0ville">
                <i class="fa fa-address-book" aria-hidden="true"></i> Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <footer id="footer">
        <span className="text-secondary opacity-50">
          <i className="fa fa-copyright" aria-hidden="true"></i> Rtrvl 2022
        </span>
      </footer>
    </div>
  );
};

export default Footer;
