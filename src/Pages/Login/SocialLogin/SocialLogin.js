import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate, useLocation } from "react-router-dom";
import auth from "../../../firebase.init";
import useToken from "../../../hooks/useToken";

const SocialLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  
const [token] = useToken(user);


  if (loading) {
    return <p className="text-center">Loading........</p>;
  }
 
    if (token) {
      navigate(from, { replace: true });
    }


  let errorElement;
  if (error) {
    errorElement = <p className="text-center text-error">{error?.message}</p>;
  }

  return (
    <div className="text-center">
      {errorElement}
      <div className="divider">OR</div>
      <button
        onClick={() => signInWithGoogle()}
        className="btn btn-outline w-full"
      >
        Continue With Google
      </button>
    </div>
  );
};

export default SocialLogin;
