import React from "react";
import MyMap from "./MyMap";

import Products from "./Products";

const Resultat = ({prices_filtered}) => {
  return (
    <React.Fragment>
      <div className="contact-page" id="resultat">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner-content">
                <div className="row">
                  <div className="col-md-8 pe-3 ps-3 pt-1 pb-1">
                    <div id="map">
                      <MyMap filtered_product={prices_filtered}/>
                    </div>
                  </div>
                  <div className="col-md-4 ps-3 pe-3 pt-1 pb-1">
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
