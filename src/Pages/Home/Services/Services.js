import React from "react";
import ServiceCard from "./ServiceCard/ServiceCard";
import fluorideIcon from "../../../assets/images/fluoride.png";
import cavityIcon from "../../../assets/images/cavity.png";
import whitening from "../../../assets/images/whitening.png";
import treatment from "../../../assets/images/treatment.png";
import PrimaryButton from "../../Shared/PrimaryButton/PrimaryButton";

const Services = () => {
  return (
    <div className="my-14">
      <div className="text-center">
        <h2 className="text-secondary font-bold text-xl md:mt-28">
          Our Services
        </h2>
        <h2 className="text-4xl mt-3">Services We Provide</h2>
      </div>
      <div className=" md:my-16 grid grid-cols-1 md:grid-cols-3 gap-5">
        <ServiceCard tittle="Fluoride Treatment" img={fluorideIcon} ></ServiceCard>
        <ServiceCard tittle="Cavity Filling" img={cavityIcon}></ServiceCard>
        <ServiceCard tittle="Teeth Whitening" img={whitening}></ServiceCard>
      </div>

      <div className="hero min-h-screen">
        <div className="hero-content flex-col md:flex-row">
          <img src={treatment} className="max-w-sm lg:max-w-lg rounded-lg shadow-2xl md:mx-6" alt="" />
          <div className="md:mx-6">
            <h1 className="text-5xl font-bold">
              Exceptional Dental Care, on Your Terms
            </h1>
            <p className="py-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>

         <PrimaryButton>Get Started</PrimaryButton>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
