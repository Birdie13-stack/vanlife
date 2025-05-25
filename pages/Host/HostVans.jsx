import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HostVans() {
  const [hostVans, setHostVans] = useState([]);

  useEffect(() => {
    fetch("/api/host/vans")
      .then((res) => res.json())
      //   .then((data) => console.log(data.vans));
      .then((data) => setHostVans(data.vans));
  }, []);

  return (
    <div className="host-vans-container">
      <h1>Your Listed Vans</h1>

      <div className="host-van-list">
        {hostVans.length > 0 ? (
          hostVans.map((van) => (
            <div key={van.id} className="host-van-element">
              <Link to={`/host/vans/${van.id}`}>
                <img src={van.imageUrl} alt={`Image of ${van.name}`} />
                <div className="host-van-info">
                  <h2>{van.name}</h2>

                  <p className="price">
                    ${van.price}
                    <span>/day</span>
                  </p>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <h2>Loading....</h2>
        )}
      </div>
    </div>
  );
}

export default HostVans;
