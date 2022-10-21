import React, { Component } from "react";

export default class SignIn extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <React.Fragment>
        <div className="main-banner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="top-text header-text">
                  <h2>Se connecter</h2>
                </div>
              </div>
              <div className="contact-page">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="inner-content">
                        <div className="row">
                          <div className="col-lg-12 align-self-center">
                            <form id="contact" action="" method="get">
                              <div className="row">
                                <div className="col-lg-12">
                                  <fieldset>
                                    <input
                                      type="name"
                                      name="name"
                                      id="name"
                                      placeholder="Nom d'utilsateur ou votre émail "
                                      autoComplete="on"
                                      required
                                    />
                                  </fieldset>
                                </div>
                                <div className="col-lg-12">
                                  <fieldset>
                                    <input
                                      type="password"
                                      name="password"
                                      id="pwd"
                                      placeholder="Mot de passe"
                                      autoComplete="on"
                                      required
                                    />
                                  </fieldset>
                                </div>
                                <div className="col-lg-12 align-self-right">
                                  <fieldset>
                                    <button
                                      type="submit"
                                      id="form-submit"
                                      className="main-button "
                                    >
                                      Connexion
                                    </button>
                                  </fieldset>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
