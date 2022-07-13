import { useEffect } from "react";
import { useState } from "react";


const useAdmin = (user) => {
    const [adminLoading, setAdminLoading] = useState(true)
    const [admin, setAdmin] = useState(false)
    useEffect(()=>{
        const email = user?.email;

        if(email){
            const url =`https://warm-springs-53250.herokuapp.com/admin/${email}`
        fetch(url, {
            method:"GET",
            headers:{
                authorization:`Bearer ${localStorage.getItem("accessToken")}`
            }
        })
        .then(res=> res.json())
        .then(data => {
            setAdmin(data.admin)
            setAdminLoading(false)
        })
        }
    },[user])
    return[admin, adminLoading]
};

export default useAdmin;