import React, { useEffect, useState } from "react";
import { useParams, Link, Outlet, NavLink } from "react-router-dom";
import HostVanPricing from "./HostVanPricing";

function HostVanDetail() {
  const [currentVan, setCurrentVan] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then((res) => res.json())
      // .then((data) => console.log(data.vans));
      .then((data) => setCurrentVan(data.vans));
  }, []);

  if (!currentVan) {
    return <h2>Loading...</h2>;
  }

  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };
  return (
    <section>
      <Link to=".." relative="path" className="back-button">
        &larr; Back to all vans
      </Link>
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

        <nav className="host-van-detail-nav">
          <NavLink
            to="."
            end
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            Details
          </NavLink>
          <NavLink
            to="pricing"
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            Pricing
          </NavLink>

          <NavLink
            to="photos"
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            Photos
          </NavLink>
        </nav>

        <Outlet context={{ currentVan }} />
      </div>
    </section>

    /**
     * Challenge: check out the docs linked in the slide, and see if you
     * can implement the Outlet Context feature it talks about.
     *
     * Part of this challenge will require you to (finally) build out those
     * nested components. Again, if you don't need CSS practice, you can
     * skip the styling part, and I'll handle that for you.
     */
  );
}

export default HostVanDetail;
