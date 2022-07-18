import React from "react";
import { toast } from "react-toastify";

const DeleteConfirmModal = ({deleteDoctor, refetch, setDeleteDoctor}) => {
    const {name, email} = deleteDoctor;

    const handleDeleteDoctor = () =>{
        fetch(`https://desolate-reef-87616.herokuapp.com/doctors/${email}`,{
            method:"DELETE",
            headers:{
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.deletedCount){
                toast.success(`Doctor: ${name} is deleted.`)
                setDeleteDoctor(null)
                refetch()
            }
        })
    
      }

  return (
    <div>
      <input type="checkbox" id="delete-confirm-model" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-red-500">
            Are you sure you want to delete {name}
          </h3>
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div className="modal-action">
          <button onClick={()=> handleDeleteDoctor()} className="btn btn-error btn-xm">Yes</button>
            <label for="delete-confirm-model" className="btn btn-xm">
              No
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;
