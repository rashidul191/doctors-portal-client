import bannerChair from "../../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import bannerImg from "../../../assets/images/bg.png";

const AppointmentBanner = (props) => {
  const { date, setDate } = props;
  return (
    <div
      style={{
        backgroundImage: `url(${bannerImg})`,
        backgroundRepeat: "no-repeat",
      }}
      className="hero min-h-screen "
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={bannerChair}
          className="max-w-sm md:max-w-lg rounded-lg shadow-2xl"
          alt="Dentist Chair"
        />
        <div className="md:mr-10 bg-white p-4 rounded-lg">
          <DayPicker mode="single" selected={date} onSelect={setDate} />
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
