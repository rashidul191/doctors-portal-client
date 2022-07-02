import React from "react";

const Service = (props) => {
  const {service, setTreatment} = props;

  const { name, slots } = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl text-center p-5">
      <div className="card-body">
        <h2 className="text-2xl text-secondary">{name}</h2>
        <p>
          {slots.length > 0 ? (
            <span>{slots[0]}</span>
          ) : (
            <span className="text-red-500">Not Slot Available</span>
          )}
        </p>
        <p>
          <small>
            {slots.length} {slots.length > 1 ? "spaces" : "space"} available
          </small>
        </p>
        <div className="card-actions justify-center">
          <label
            onClick={() => setTreatment(service)}
            disabled={slots.length === 0}
            for="booking-modal"
            className="btn btn-secondary font-bold text-white uppercase justify-center"
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default Service;
