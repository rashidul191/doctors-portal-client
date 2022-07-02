import React, { useState } from "react";
import Footer from "../Shared/Footer/Footer";
import AppointmentBanner from "./AppointmentBanner/AppointmentBanner";
import AvailableAppointments from "./AvailableAppointments/AvailableAppointments";

const Appointment = () => {
    const [date, setDate] = useState(new Date());
  return (
    <>
      <AppointmentBanner date={date} setDate={setDate}></AppointmentBanner>
      <AvailableAppointments date={date}></AvailableAppointments>
      <Footer></Footer>
    </>
  );
};

export default Appointment;
