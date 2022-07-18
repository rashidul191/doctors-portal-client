import React from "react";
import { Link } from "react-router-dom";

const MyAppointment = ({ appointment, index }) => {
  
  const { _id, patientName, treatment, date, slot, price, paid, transactionId } = appointment;

  return (
    <tr>
      <th>{index + 1}</th>
      <td>{patientName}</td>
      <td>{treatment}</td>
      <td>{date}</td>
      <td>{slot}</td>
      <td>$ {price}</td>
      <td>
        {price && !paid ? (
          <Link to={`/dashboard/payment/${_id}`}>
            <button className="btn btn-xs btn-success text-white">Pay</button>
          </Link>
        ) : (
          <>
          <span className="text-success">Paid</span>
          <p>Transaction Id: <span className="text-success"> {transactionId}</span></p>
          </>
        )}
      </td>

     
    </tr>
  );
};

export default MyAppointment;
