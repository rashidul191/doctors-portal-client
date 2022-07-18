import React from "react";

const DoctorsRow = ({ doctor, index , setDeleteDoctor}) => {
  const { name, specialty , img} = doctor;


  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div className="avatar">
          <div className="w-20 rounded">
            <img
              src={img}
              alt={name}
            />
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{specialty}</td>
      <td>
        

        <label onClick={()=> setDeleteDoctor(doctor)} for="delete-confirm-model" className="btn btn-error text-white">Delete</label>

      </td>
    </tr>
  );
};

export default DoctorsRow;
