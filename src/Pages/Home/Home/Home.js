import React from "react";
import Testimonials from "../../Testimonials/Testimonials";
import Banner from "../Banner/Banner";
import ContactUs from "../ContactUs/ContactUs";
import Info from "../Info/Info";
import MakeAppointment from "../MakeAppointment/MakeAppointment";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div className="md:px-12">
      <Banner></Banner>
      <Info></Info>
      <Services></Services>
      <MakeAppointment></MakeAppointment>
      <Testimonials></Testimonials>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;
