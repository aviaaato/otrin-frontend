import React, { useState } from "react";
import MyMap from "./MyMap";

import Products from "./Products";


const Resultat = ({products_list, coordonnees, new_requete}) => {

  const [prices_filtered, setPricesFiltered] = useState([]);

  return (
    <React.Fragment>
      <div className="contact-page" id="resultat">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="inner-content">
                <div className="row">
                  <div className="col-md-8 bg-white">
                    <div id="map">
                      <MyMap filtered_prices={prices_filtered} coordonnees={coordonnees}/>
                    </div>
                  </div>
                  <div className="col-md-4 p-2 bg-white">
                      <div className="row product">
                        <Products 
                          products_list={products_list} 
                          prices_filtered={prices_filtered}
                          setPricesFiltered={setPricesFiltered}
                          new_requete={new_requete}
                          />
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
