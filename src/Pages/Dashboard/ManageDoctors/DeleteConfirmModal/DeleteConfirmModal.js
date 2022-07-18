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
      <input type="checkbox" id="delete-confirm-model" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg text-red-500">
            Are you sure you want to delete {name}
          </h3>
          <p class="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div class="modal-action">
          <button onClick={()=> handleDeleteDoctor()} className="btn btn-error btn-xm">Yes</button>
            <label for="delete-confirm-model" class="btn btn-xm">
              No
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;
