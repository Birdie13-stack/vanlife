import React from "react";
import { useOutletContext } from "react-router-dom";

function HostVanPricing() {
  const { currentVan } = useOutletContext();

  return (
    <h4 className="host-van-price">
      {currentVan.price} <span>/day</span>
    </h4>
  );
}

export default HostVanPricing;
