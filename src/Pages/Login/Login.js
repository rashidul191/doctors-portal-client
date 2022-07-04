import React from "react";
import SocialLogin from "./SocialLogin/SocialLogin";

const Login = () => {
  return (
    <section className="h-screen flex justify-center items-center">
      
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-secondary text-2xl font-bold">Login page</h2>
         <form>
         <input type="text" placeholder="Type here" className="input input-bordered input-md w-full max-w-xs" />
         </form>


          <div className="card-actions justify-end">
            <button className="btn w-full ">Login</button>
          </div>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </section>
  );
};

export default Login;
