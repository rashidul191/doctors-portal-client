import React from "react";
import { toast } from "react-toastify";

const UsersInfo = (props) => {
  const { user, index, refetch } = props;
  const { email, role } = user;
  const makeAdmin = () => {
    fetch(`https://warm-springs-53250.herokuapp.com/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("Failed to make an admin");
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          toast.success("Make an admin successfully");
        }
      });
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{email}</td>
      <td>
        {role !== "admin" ? (
          <button onClick={makeAdmin} className="btn btn-secondary text-white">
            Make Admin
          </button>
        ) : (
          <p className="text-primary font-bold">Already Admin</p>
        )}
      </td>
      <td>
        <button className="btn btn-error text-white">Remove User</button>
      </td>
    </tr>
  );
};

export default UsersInfo;
