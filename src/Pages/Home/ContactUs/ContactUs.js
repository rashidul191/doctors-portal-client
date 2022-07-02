import React from "react";
import PrimaryButton from "../../Shared/PrimaryButton/PrimaryButton";
import bgImg from "../../../assets/images/appointment.png"

const ContactUs = () => {
  const handleMessageSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const subject = event.target.subject.value;
    const message = event.target.message.value;
    if (email && subject && message) {
      console.log(email, subject, message);
      alert("message send successfully");
    }
  };
  return (
    <section style={{
        background: `url(${bgImg})`,
        backgroundPosition:" center"
    }} className="my-28 py-10">
      <div className="text-center">
        <h2 className="text-xl font-bold text-secondary">Contact Us</h2>
        <h2 className="text-3xl text-white md:mb-8">Stay connected with us</h2>
      </div>
      <div className="text-center">
        <form onSubmit={handleMessageSubmit}>
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered input-sm w-full max-w-xs"
            required
          />
          <br />
          <br />
          <input
            type="text"
            placeholder="Subject"
            className="input input-bordered input-sm w-full max-w-xs"
            required
          />
          <br />
          <br />
          <textarea
            className="textarea"
            name=""
            id=""
            cols="40"
            rows="5"
            placeholder="Message"
            required
          ></textarea>
          <br />
          <br />
          <PrimaryButton>Send</PrimaryButton>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
