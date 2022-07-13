import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import MyAppointment from "./MyAppointment/MyAppointment";

const MyAppointments = () => {
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    if (loading) {
      return <Loading></Loading>;
    }
    if (user) {
      fetch(`https://warm-springs-53250.herokuapp.com/booking?patient=${user.email}`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => {
          if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem("accessToken");
            navigate("/");
          }
          return res.json();
        })
        .then((data) => {
          //   console.log(data);
          setAppointments(data);
        });
    }
  }, [user,loading,navigate]);

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
                index={index}
              ></MyAppointment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointments;
