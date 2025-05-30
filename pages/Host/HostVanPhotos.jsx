import React from "react";
import { useOutletContext } from "react-router-dom";

function HostVanPhotos() {
  const { currentVan } = useOutletContext();
  console.log(currentVan);

  return <img src={currentVan.imageUrl} className="host-van-detail-image" />;
}

export default HostVanPhotos;
