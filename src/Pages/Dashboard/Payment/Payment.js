import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";
import CheckoutForm from "./CheckoutForm/CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51HZrdZHFXxUpEUgNqYVJ2LFTOFXic2TGl7X7VW0MjvPfF2G2qLnCAoVEb35KZSnCjU5yrYhHbTY63LDI4vq4BGk500DBTvCtzQ"
);

const Payment = () => {
  const { id } = useParams();
  const url = `https://desolate-reef-87616.herokuapp.com/booking/${id}`;
  const { data: appointment, isLoading } = useQuery(["booking", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  // const { patientName, treatment, date, slot, price } = appointment;
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <div class="card w-50 bg-base-100 max-w-lg shadow-xl my-12">
        <div class="card-body">
          <p>
            Hello, <span className="text-success font-bold">{appointment.patientName}</span>{" "}
          </p>
          <h2 class="card-title">Please Pay for {appointment.treatment}</h2>
          <p>
            Your Appointment
            <span className="text-orange-700">{appointment.date}</span> at {appointment.slot}
          </p>
          <p>Please pay: ${appointment.price}</p>
        </div>
      </div>
      <div class="card w-50 max-w-lg shadow-2xl bg-base-100">
        <div class="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm appointment={appointment}/>
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
