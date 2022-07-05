import React from "react";

const MyAppointment = ({ appointment, index }) => {
  const { patientName, treatment, date, slot } = appointment;

  return (
    <tr>
      <th>{index + 1}</th>
      <td>{patientName}</td>
      <td>{treatment}</td>
      <td>{date}</td>
      <td>{slot}</td>
    </tr>
  );
};

export default MyAppointment;
