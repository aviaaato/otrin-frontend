import React from "react";

import Products from "./Products";

const Resultat = ({prices_filtered}) => {
  return (
    <React.Fragment>
      <div className="contact-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner-content">
                <div className="row">
                  <div className="col-md-8 p-3">
                    <div id="map">
                      
                    </div>
                  </div>
                  <div className="col-md-4 p-3">
                      <div className="row">
                        <Products products={prices_filtered}/>
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
};

export default Resultat;
