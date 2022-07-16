import React from "react";
import { format } from "date-fns";
import auth from "../../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";

const BookingModal = ({ date, treatment, setTreatment, refetch }) => {
  const [user] = useAuthState(auth);
  const { _id, name, slots } = treatment;
  const formattedDate = format(date, "PP");

  const handleBooking = (event) => {
    event.preventDefault();
    const slot = event.target.slot.value;
    const booking = {
      treatmentId: _id,
      treatment: name,
      date: formattedDate,
      slot,
      patientName: user?.displayName,
      patientEmail: user?.email,
      phoneNumber: event.target.phoneNumber.value,
    };

    console.log(booking);

    fetch("http://localhost:5000/booking", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          toast.success(`Appointment is set ${formattedDate} at ${slot}`);
        } else {
          toast.error(
            `Already have and  appointment is set ${data.booking?.date} at ${data.booking?.slot}`
          );
        }
        // to close the modal
        refetch()
        setTreatment(null);
      });
  };
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg text-secondary">
            Booking for : {name}
          </h3>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-4 justify-items-center my-2"
          >
            <input
              name="data"
              type="text"
              readOnly
              value={format(date, "PP")}
              className="input input-bordered w-full max-w-xs"
            />
            <select
              name="slot"
              className="select select-bordered w-full max-w-xs"
            >
              {slots.map((slot) => (
                <option value={slot}>{slot}</option>
              ))}
            </select>
            <input
              name="userName"
              type="text"
              value={user?.displayName || ""}
              placeholder="Full Name"
              className="input input-bordered w-full max-w-xs"
              required
            />
            <input
              name="email"
              type="email"
              value={user?.email}
              readOnly
              className="input input-bordered w-full max-w-xs"
              required
            />
            <input
              name="phoneNumber"
              type="text"
              placeholder="Phone Number"
              className="input input-bordered w-full max-w-xs"
              required
            />
            <input
              type="submit"
              value="Submit"
              className="btn btn-secondary w-full max-w-xs text-white"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
