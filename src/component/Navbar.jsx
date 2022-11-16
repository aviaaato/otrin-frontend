import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
        <header
          className="header-area header-sticky wow slideInDown sticky-top"
          data-wow-duration="0.75s"
          data-wow-delay="0s"
        >
          <div className="container">
            <div className="row">
              <div className="col-12">
                <nav className="main-nav">
                  <NavLink to="/" className="logo"></NavLink>

                  <ul className="nav">
                    <li>
                      <NavLink to="/" className="active">
                        Accueil
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/sign_in">Se connecter</NavLink>
                    </li>
                    <li>
                      <NavLink to="/sign_up">S'inscrire</NavLink>
                    </li>
                    <li>
                      <div className="main-white-button">
                        <NavLink to="/add_price">
                          <i className="fa fa-plus"></i> Ajouter votre prix
                        </NavLink>
                      </div>
                    </li>
                  </ul>
                  <NavLink className="menu-trigger active">
                    <span>Menu</span>
                  </NavLink>
                </nav>
              </div>
            </div>
          </div>
        </header>
      </React.Fragment>
    );
  }
}
