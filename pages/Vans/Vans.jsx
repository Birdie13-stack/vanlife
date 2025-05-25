import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Vans() {
  const [vans, setVans] = useState([]);
  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => {
        setVans(data.vans);
      });
  }, []);

  return (
    <>
      <div className="van-list-container">
        <h1>Explore our van options</h1>
        <div className="van-list">
          {vans ? (
            vans.map((van) => (
              <div key={van.id} className="van-element">
                <Link
                  to={`/vans/${van.id}`}
                  aria-label={`View details for ${van.name}, 
                             priced at $${van.price} per day`}
                >
                  <img src={van.imageUrl} alt={`Image of ${van.name}`} />
                  <div className="van-info">
                    <h2>{van.name}</h2>

                    <p className="price">
                      ${van.price}
                      <span>/day</span>
                    </p>
                  </div>
                  <i className={`van-type ${van.type} selected`}>{van.type}</i>
                </Link>
              </div>
            ))
          ) : (
            <h1>Loading....</h1>
          )}
        </div>
      </div>
    </>
  );
}

export default Vans;
