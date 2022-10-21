import React, { Component } from "react";

export default class SignUp extends Component {
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
                  <h2>Inscription</h2>
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
                                <div className="col-lg-6">
                                  <fieldset>
                                    <input
                                      type="name"
                                      name="name"
                                      id="name"
                                      placeholder="Nom "
                                      autoComplete="on"
                                      required
                                    />
                                  </fieldset>
                                </div>
                                <div className="col-lg-6">
                                  <fieldset>
                                    <input
                                      type="surname"
                                      name="surname"
                                      id="surname"
                                      placeholder="Nom d'utilsateur"
                                      autoComplete="on"
                                      required
                                    />
                                  </fieldset>
                                </div>
                                <div className="col-lg-6">
                                  <fieldset>
                                    <input
                                      type="text"
                                      name="email"
                                      id="email"
                                      placeholder="Votre émail"
                                      required
                                    />
                                  </fieldset>
                                </div>
                                <div className="col-lg-6">
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
                                <div className="col-lg-6">
                                  <fieldset>
                                    <input
                                      type="password"
                                      name="password"
                                      id="pwd"
                                      placeholder="Confirmer votre mot de passe"
                                      autoComplete="on"
                                      required
                                    />
                                  </fieldset>
                                </div>
                                <div className="col-lg-6 align-self-right">
                                  <fieldset>
                                    <button
                                      type="submit"
                                      id="form-submit"
                                      className="main-button "
                                    >
                                      <i className="fa fa-save"></i> Enregistrer
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
