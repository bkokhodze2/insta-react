import React, { Component } from "react";
import logo from "../../img/logo.png";
import { NavLink } from "react-router-dom";
export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="container h-flex">
          <div className="home_inst">
            <NavLink to="/" className="logo">
              <img src={logo} alt="logo"></img>
            </NavLink>
            <img
              className="insta_font"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSNGrSc2O8dCd7oShnsgRAQrJEzNwe1hEm9Dw&usqp=CAU"
            ></img>
          </div>
          <nav className="links">
            <ul>
              <li>
                <NavLink to="/" className="menu__links">
                  home
                </NavLink>
              </li>
              <li>
                <NavLink to="/profile" className="menu__links">
                  profile
                </NavLink>
              </li>
              <li>
                <NavLink to="/MYPOSTS" className="menu__links">
                  my posts
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}
