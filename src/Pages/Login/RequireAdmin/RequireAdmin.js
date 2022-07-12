import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useLocation, Navigate } from "react-router-dom";
import auth from "../../../firebase.init";
import useAdmin from "../../../hooks/useAdmin";
import Loading from "../../Shared/Loading/Loading";


const RequireAdmin = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);
  const [admin, adminLoading] = useAdmin(user)
  let location = useLocation();

  if (loading || adminLoading) {
    return <Loading></Loading>
  }
  if (!user || !admin) {
    signOut(auth)
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  if (error) {
    return <p className="text-center text-red-500">{error?.message}</p>;
  }
  return children;
};

export default RequireAdmin;
