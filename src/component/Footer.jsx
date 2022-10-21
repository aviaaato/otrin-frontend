import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="about">
                  <div className="logo">
                    <img src="/blue-logo.png" alt="O'trin" />
                  </div>
                  <p>
                    Si vous considérez que{" "}
                    <Link rel="nofollow" to="/" target="_parent">
                      O'trin
                    </Link>{" "}
                    est utile, s'il vous plait{" "}
                    <Link rel="nofollow" to="#" target="_blank">
                      supportez-nous
                    </Link>{" "}
                    un peu via à nos mobiles moneys.
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="helpful-links">
                  <h4>Liens d'aides</h4>
                  <div className="row">
                    <div className="col-lg-6 col-sm-6">
                      <ul>
                        <li>
                          <Link to="/sign_in">Se connecter</Link>
                        </li>
                        <li>
                          <Link to="/sign_up">S'inscrire</Link>
                        </li>
                        <li>
                          <Link to="#">Contactez-Nous</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="contact-us">
                  <h4>Contactez-Nous</h4>
                  <p>Antsirabe, Lot 51E 108b, Vatofotsy Mahafaly.</p>
                  <div className="row">
                    <div className="col-lg-6">
                      <Link>+261 34 94 925 58</Link>
                    </div>
                    <div className="col-lg-6">
                      <Link>Aviatocontact@gmail.com</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="sub-footer">
                  <p>Copyright © 2022 by Aviato teams.</p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}
