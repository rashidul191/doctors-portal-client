import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Pages/Shared/Navbar/Navbar";
import Home from "./Pages/Home/Home/Home";
import NotFound from "./Pages/Shared/NotFound/NotFound";
import Login from "./Pages/Login/Login";
import Appointment from "./Pages/Appointment/Appointment";

function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/appointment" element={<Appointment></Appointment>}></Route>

        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
