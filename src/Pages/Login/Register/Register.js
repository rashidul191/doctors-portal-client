import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";

const Register = () => {
  const navigate = useNavigate();

  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    await createUserWithEmailAndPassword(data?.email, data?.password)
    await updateProfile({ displayName:data.name });
    
  };

  if (loading || updating) {
    return <p>Loading...........</p>;
  }

  if (user) {
    navigate("/");
  }

  let errorElement;
  if (error ||updateError ) {
    errorElement = <p className="text-center text-error">{error?.message}</p>;
  }
  return (
    <section className="h-screen flex justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-secondary text-2xl font-bold">
            Registration
          </h2>

          {errorElement}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                type="text"
                placeholder="Full Name"
                className="input input-bordered w-full max-w-xs"
                {...register("name", {
                  required: { value: true, message: "Full Name is Required" },
                })}
              />
              <label className="label">
                {errors.name?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.name.message}
                  </span>
                )}
              </label>
            </div>
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
                <span className="label-text">Email</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered w-full max-w-xs"
                {...register("password", {
                  required: { value: true, message: "Password is Required" },
                  pattern: {
                    value: /^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{6,}$/,
                    message: <ul>
                        <li>Must be 6 characters or longer</li>
                        <li>Must at least 1 alphabet letter</li>
                        <li>Must at least 1 numeric character</li>
                        <li>Must at least 1 special character</li>
                    </ul>
                  },
                })}
              />
              <label className="label">
                {errors.password?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
                    {errors.password?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>

            <input className="btn w-full" type="submit" value="Registration" />
          </form>
          <p>
            <small>
              Already have a account?{" "}
              <Link to="/login" className="text-primary underline">
                Login
              </Link>{" "}
            </small>
          </p>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </section>
  );
};

export default Register;
