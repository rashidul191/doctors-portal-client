import React from "react";

const Review = (props) => {
  const { name, img, review, location } = props.review;
  return (
    <div>
      <div className="card lg:max-w-lg bg-base-100 shadow-xl">
        <div className="card-body">
          <p>{review}</p>
          <div className="flex items-center">
            <div className="avatar">
              <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-6">
                <img src={img} alt="" />
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold">{name}</h2>
              <p>{location}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
