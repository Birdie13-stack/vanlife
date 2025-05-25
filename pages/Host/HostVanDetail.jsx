import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function HostVanDetail() {
  const [currentVan, setCurrentVan] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then((res) => res.json())
      // .then((data) => console.log(data.vans));
      .then((data) => setCurrentVan(data.vans));
  }, []);

  console.log(currentVan);

  if (!currentVan) {
    return <h2>Loading...</h2>;
  }
  return (
    <section>
      <div className="host-van-detail-layout-container">
        <div className="host-van-detail">
          <img src={currentVan.imageUrl} />
          <div className="host-van-detail-info-text">
            <i className={`van-type van-type-${currentVan.type}`}>
              {currentVan.type}
            </i>
            <h3>{currentVan.name}</h3>
            <h4>${currentVan.price}/day</h4>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HostVanDetail;
