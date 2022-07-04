import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";

const SocialLogin = () => {
  const navigate = useNavigate();
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  if (loading) {
    return <p>Loading........</p>;
  }

  if (user) {
    navigate("/");
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
