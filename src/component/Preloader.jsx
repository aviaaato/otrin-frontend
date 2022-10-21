import React from "react";

const Preloader = () => {
  return (
    <React.Fragment>
      <div id="js-preloader" className="js-preloader">
        <div className="preloader-inner">
          <span className="dot"></span>
          <div className="dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Preloader;
