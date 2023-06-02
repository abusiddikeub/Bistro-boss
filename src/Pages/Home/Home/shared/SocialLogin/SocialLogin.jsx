import React, { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../../../Routers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  // private router ar jonno home page a pathay dite hba
  const Navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleGoogle = () => {
    googleSignIn().then((result) => {
      const loggedInUser = result.user;
      console.log(loggedInUser);

      // datar information ----
      const saveUser = {
        name: loggedInUser.displayName,
        email: loggedInUser.email,
      };
// akane user akber gmail dia login korte parbe but conditionally users dia server side theke
// data ana user joto khusi login korte parbe ak user dia 
      fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        // users information dite hba -----(ar modda)
        body: JSON.stringify(saveUser),
      })
        .then((res) => res.json())
        .then(() => { 
            Navigate(from, { replace: true });
        });
    });
  };
  return (
    <div>
      <div className="divider">OR</div>
      <div className="w-full text-center my-4">
        <button onClick={handleGoogle} className="btn btn-circle btn-outline">
          <FaGoogle></FaGoogle>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
