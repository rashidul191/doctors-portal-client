import { format } from "date-fns";
import React, { useState } from "react";
import {useQuery } from 'react-query'
import Loading from "../../Shared/Loading/Loading";
import BookingModal from "../BookingModal/BookingModal";
import Service from "../Service/Service";

const AvailableAppointments = ({ date }) => {
  // const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);

  const formattedDate = format(date, "PP");
// react query
  const { data: services, isLoading, refetch } = useQuery(["available", formattedDate], () =>
    fetch(`https://warm-springs-53250.herokuapp.com/available?date=${formattedDate}`).then((res) =>
      res.json()
    )
  );
  if (isLoading) {
    return <Loading></Loading>;
  }

  // useEffect(() => {
  //   fetch(`https://warm-springs-53250.herokuapp.com/available?date=${formattedDate}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setServices(data);
  //     });
  // }, [formattedDate]);
  return (
    <section className="my-28">
      <h2 className="text-center text-secondary text-xl">
        Available Appointments on {format(date, "PP")}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:my-5 md:my-10">
        {services?.map((service) => (
          <Service
            key={service._id}
            service={service}
            setTreatment={setTreatment}
          ></Service>
        ))}
      </div>
      {treatment && (
        <BookingModal
          key={treatment._id}
          date={date}
          treatment={treatment}
          setTreatment={setTreatment}
          refetch={refetch}
        ></BookingModal>
      )}
    </section>
  );
};

export default AvailableAppointments;
