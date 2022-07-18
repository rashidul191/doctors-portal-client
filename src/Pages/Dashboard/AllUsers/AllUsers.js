import React from "react";
// import { useEffect, useState } from 'react';
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading/Loading";
import UsersInfo from "./UsersInfo/UsersInfo";

const AllUsers = () => {
  // react query
  const { data: users, isLoading, refetch } = useQuery("users", () =>
    fetch("https://desolate-reef-87616.herokuapp.com/users", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }

  // useEffect fetch
  /* const [allUsers, setAllUsers] = useState([]);
    useEffect(()=>{
        fetch("https://desolate-reef-87616.herokuapp.com/users",{
            method:"GET",
                 headers:{
            authorization: `Bearer ${localStorage.getItem("accessToken")}`
        }
        })
        .then(res => res.json())
        .then(data => {
            setAllUsers(data)
        })
    },[]) */
  return (
    <div>
      <h2>All users : {users.length}</h2>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>S.N</th>
              <th>Email</th>
              <th>Make Admin</th>
              <th>Remove User</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <UsersInfo key={user._id} user={user} index={index}
              refetch={refetch}></UsersInfo>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
