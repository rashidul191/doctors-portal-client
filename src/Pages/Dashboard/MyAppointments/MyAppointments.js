import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import MyAppointment from "./MyAppointment/MyAppointment";

const MyAppointments = () => {
  const [user, loading] = useAuthState(auth);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    if (loading) {
      return <Loading></Loading>;
    }
    if (user) {
      fetch(`http://localhost:5000/booking?patient=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
        //   console.log(data);
          setAppointments(data);
        });
    }
  }, [user, loading]);

  return (
    <div>
      <h2>My appointments {appointments.length}</h2>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Service</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment, index) => (
              <MyAppointment
                key={appointment._id}
                appointment={appointment}
                index = {index}
              ></MyAppointment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointments;
