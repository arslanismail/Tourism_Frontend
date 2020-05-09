import React, { Component } from "react";
class Header extends Component {
  state = {};
  render() {
    return (
      <nav className="colorlib-nav" role="navigation">
        <div className="top-menu">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xs-2">
                <div id="colorlib-logo">
                  <a href="index.html">Tour</a>
                </div>
              </div>
              <div className="col-xs-10 text-right menu-1">
                <ul>
                  <li className="active">
                    <a href="index.html">Home</a>
                  </li>
                  <li className="active">
                    <a href="index.html">Account</a>
                  </li>
                  <li className="has-dropdown">
                    <a href="tours.html">Tours</a>
                    <ul className="dropdown">
                      <li>
                        <a href="#">Destination</a>
                      </li>
                      <li>
                        <a href="#">Cruises</a>
                      </li>
                      <li>
                        <a href="#">Hotels</a>
                      </li>
                      <li>
                        <a href="#">Booking</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="hotels.html">Hotels</a>
                  </li>
                  <li>
                    <a href="services.html">Services</a>
                  </li>
                  <li>
                    <a href="blog.html">Blog</a>
                  </li>
                  <li>
                    <a href="about.html">About</a>
                  </li>
                  <li>
                    <a href="contact.html">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
