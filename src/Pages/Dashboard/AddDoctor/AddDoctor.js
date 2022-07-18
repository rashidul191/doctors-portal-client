import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Loading from "../../Shared/Loading/Loading";

const AddDoctor = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  // React Query
  const { data: services, isLoading } = useQuery("services", () =>
    fetch("https://desolate-reef-87616.herokuapp.com/service").then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }

  /**
   * 3 ways to store images
   * 1. Third party storage
   * 2. Your own storage in you own server (file system)
   * 3. Database: Mongodb
   *
   * YUP: to validate file:
   * Search YUP file validation for react hook
   */
  const imgStorageKey = `1b91428733543b6b75ad960c33573c1a`;

  const onSubmit = async (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const imageUrl = result.data.url;
          const doctor = {
            name: data.name,
            email: data.email,
            img: imageUrl,
            specialty: data.specialty,
          };
          // send to doctor info database
          fetch("https://desolate-reef-87616.herokuapp.com/doctor", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((insertedData) => {
              if (insertedData.insertedId) {
                toast.success("Doctor added Successfully");
                reset();
              } else {
                toast.error("Failed to added doctor");
              }
            });
        }
      });
  };

  return (
    <div className="w-96">
      <h2 className="text-2xl">Add a new Doctors</h2>
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

        <div className=" form-control w-full max-w-xs">
          <label className=" block">
            <span className="sr-only">Choose profile photo</span>
          </label>
          <input
            type="file"
            className=" block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100
    "
            {...register("image", {
              required: { value: true, message: "Image is Required" },
            })}
          />

          <label className="label">
            {errors.image?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.image.message}
              </span>
            )}
          </label>
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Specialty</span>
          </label>

          <select
            {...register("specialty")}
            className="select input-bordered w-full max-w-xs"
          >
            {services.map((service) => (
              <option key={service._id} value={service.name}>
                {service.name}
              </option>
            ))}
          </select>
        </div>

        <input className="btn w-full mt-5" type="submit" value="Add" />
      </form>
    </div>
  );
};

export default AddDoctor;
