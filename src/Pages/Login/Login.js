import React, { useRef } from "react";
import { toast } from "react-toastify";
import SocialLogin from "./SocialLogin/SocialLogin";
import { useForm } from "react-hook-form";
import { useNavigate, useLocation, Link } from "react-router-dom";
import auth from "../../firebase.init";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import Loading from "../Shared/Loading/Loading";
import useToken from "../../hooks/useToken";

const Login = () => {
  const emailRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    signInWithEmailAndPassword(data?.email, data?.password);
  };
  const [token] = useToken(user)

  const handleForgetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast.success("Sent email");
    } else {
      toast.error("please enter email");
    }
  };

  if (loading || sending) {
    return <Loading></Loading>;
  }

  
    if (token) {
      navigate(from, { replace: true });
    }


  let errorElement;
  if (error) {
    errorElement = <p className="text-center text-error">{error?.message}</p>;
  }

  return (
    <section className="h-screen flex justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-secondary text-2xl font-bold">
            Please Login
          </h2>

          {errorElement}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered w-full max-w-xs"
                {...register("email", {
                  required: { value: true, message: "Email is Required" },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Provide a valid Email",
                  },
                })}
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered w-full max-w-xs"
                {...register("password", {
                  required: { value: true, message: "Password is Required" },
                  minLength: {
                    value: 6,
                    message: "Must be 6 characters or longer",
                  },
                })}
              />
              <label className="label">
                {errors.password?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>
            {/* <p onClick={handleForgetPassword} className="btn btn-link">Forget Password</p> */}

            <label htmlFor="forget-modal" className="btn btn-link">
              Forget Password
            </label>

            <input className="btn w-full" type="submit" value="Login" />
          </form>

          {/* Forget password start */}
          <input type="checkbox" id="forget-modal" className="modal-toggle" />
          <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
              <label
                htmlFor="forget-modal"
                className="btn btn-sm btn-circle absolute right-2 top-2"
              >
                ✕
              </label>
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                ref={emailRef}
                placeholder="Enter Email"
                className="input input-bordered w-full max-w-xs"
                required
              />

              <p onClick={handleForgetPassword} className="btn">
                Send Email
              </p>
            </div>
          </div>
          {/* Forget password end */}

          <p>
            <small>
              New to Doctors Portal?{" "}
              <Link to="/register" className="text-primary underline">
                Create a new account
              </Link>{" "}
            </small>
          </p>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </section>
  );
};

export default Login;
