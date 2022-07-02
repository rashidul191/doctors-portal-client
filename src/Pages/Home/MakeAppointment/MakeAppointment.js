import React from "react";
import doctorImg from "../../../assets/images/doctor.png";
import appointment from "../../../assets/images/appointment.png";
import PrimaryButton from "../../Shared/PrimaryButton/PrimaryButton";

const MakeAppointment = () => {
  return (
    <section
    style={{
        background: `url(${appointment})`,
      }}
      className="flex justify-center items-center my-32"
    >
      <div className="flex-1 hidden md:block">
        <img className="-mt-32" src={doctorImg} alt="" />
      </div>
      <div className="flex-1 p-5">
        <h3 className="text-xl text-primary font-bold" >Appointment</h3>
        <h2 className="text-3xl text-white">Make an Appointment Today</h2>
        <p className="text-white my-6">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod at non,
          architecto fugiat quae quam ducimus dolore omnis. Expedita,
          reiciendis! Minima, provident! Temporibus repellat iure harum quo,
          accusamus nobis earum natus adipisci eius et cum impedit nam nulla,
          ratione officia.
        </p>
        <PrimaryButton>Get Started</PrimaryButton>
      </div>
    </section>
  );
};

export default MakeAppointment;
