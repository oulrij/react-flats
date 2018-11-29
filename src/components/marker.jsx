import React from 'react';

const Marker = (props) => {
  return (
    <div className="marker">
      <div className="flat-price">
        {props.selectedFlat.price}
      </div>
      <div className="flat-currency">
        {props.selectedFlat.priceCurrency}
      </div>

    </div>
  );
};

export default Marker;
