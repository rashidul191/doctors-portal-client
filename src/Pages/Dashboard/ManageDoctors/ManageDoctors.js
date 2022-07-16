import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading/Loading";
import DeleteConfirmModal from "./DeleteConfirmModal/DeleteConfirmModal";
import DoctorsRow from "./DoctorsRow/DoctorsRow";

const ManageDoctors = () => {

  const [deleteDoctor, setDeleteDoctor] = useState(null)
  const {
    data: doctors,
    isLoading,
    refetch,
  } = useQuery("doctors", () =>
    fetch("http://localhost:5000/doctors", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h2 className="text-3">Manage Doctors</h2>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>S.N</th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Specialty</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor, index) => (
              <DoctorsRow
                key={doctor._id}
                doctor={doctor}
                index={index}
                setDeleteDoctor={setDeleteDoctor}
              ></DoctorsRow>
            ))}
          </tbody>
        </table>
      </div>
      {deleteDoctor && <DeleteConfirmModal 
      deleteDoctor ={deleteDoctor}
      refetch={refetch}
      setDeleteDoctor={setDeleteDoctor}
      ></DeleteConfirmModal>}
    </div>
  );
};

export default ManageDoctors;
