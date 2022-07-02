import React from "react";
import clockIcon from "../../../assets/icons/clock.svg"
import markerIcon from "../../../assets/icons/marker.svg"
import phoneIcon from "../../../assets/icons/phone.svg"

const Info = () => {
  return (
    <div className=" my-14 grid grid-cols-1 md:grid-cols-3 gap-5">
      <div className="card lg:card-side bg-gradient-to-r from-primary to-secondary shadow-xl md:p-3">
        <figure>
          <img src={clockIcon} alt="Album" />
        </figure>
        <div className="card-body text-white">
          <h2 className="card-title">Opening Hours</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
        </div>
      </div>
      <div className="md:p-3 card lg:card-side bg-accent shadow-xl">
        <figure>
          <img src={markerIcon} alt="Album" />
        </figure>
        <div className="card-body text-white">
          <h2 className="card-title">Visit our location</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
        </div>
      </div>
      <div className="md:p-3 card lg:card-side bg-gradient-to-r from-primary to-secondary shadow-xl">
        <figure>
          <img src={phoneIcon} alt="Album" />
        </figure>
        <div className="card-body text-white">
          <h2 className="card-title">Contact us now</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
        </div>
      </div>
    </div>
  );
};

export default Info;
