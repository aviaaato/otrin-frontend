import React from "react";
import { Link } from "react-router-dom";

const Resultat = () => {
  return (
    <React.Fragment>
      <div className="contact-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner-content">
                <div className="row">
                  <div className="col-lg-6">
                    <div id="map">
                      <iframe
                        title="test"
                        src="https://maps.google.com/maps?q=Av.+L%C3%BAcio+Costa,+Rio+de+Janeiro+-+RJ,+Brazil&t=&z=13&ie=UTF8&iwloc=&output=embed"
                        width="100%"
                        height="650px"
                        frameBorder="0"
                        style={{border:0}}
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <form id="contact" action="" method="get">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="left-image">
                            <Link href="#">
                              <img src="../assets/images/listing-01.jpg" alt="" />
                            </Link>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <h4>Nom du produit</h4>
                          <h4>Catégorie du produit</h4>
                          <h4>Lieu de vente </h4>
                          <h4>Prix</h4>
                        </div>
                        <div className="col-lg-6">
                          <div className="left-image">
                            <Link href="#">
                              <img src="../assets/images/listing-02.jpg" alt="" />
                            </Link>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <h4>Nom du produit</h4>
                          <h4>Catégorie du produit</h4>
                          <h4>Lieu de vente </h4>
                          <h4>Prix</h4>
                        </div>
                        <div className="col-lg-6">
                          <div className="left-image">
                            <Link href="#">
                              <img src="../assets/images/listing-03.jpg" alt="" />
                            </Link>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <h4>Nom du produit</h4>
                          <h4>Catégorie du produit</h4>
                          <h4>Lieu de vente </h4>
                          <h4>Prix</h4>
                        </div>
                        <div className="col-lg-6">
                          <fieldset>
                            <button
                              type="submit"
                              id="form-submit"
                              className="main-button "
                            >
                              <i className="fa fa-chevron-left"></i>
                            </button>
                          </fieldset>
                        </div>
                        <div className="col-lg-6">
                          <fieldset>
                            <button
                              type="submit"
                              id="form-submit"
                              className="main-button "
                            >
                              <i className="fa fa-chevron-right"></i>
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
    </React.Fragment>
  );
};

export default Resultat;
