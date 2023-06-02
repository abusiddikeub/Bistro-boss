import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Routers/AuthProvider";
// react hook from --------------
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import signInImage from "../../assets/others/authentication2.png";
import SocialLogin from "../Home/Home/shared/SocialLogin/SocialLogin";

const SignUp = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  //  hook form -----
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);

// update profile ar jonno ----------
      updateUserProfile(data.name, data.photoURL)
        .then(() => {
          // console.log('user profile info update')

          // datar information ----
          const saveUser = {name : data.name, email:data.email}


          // server theka data anche ay jonno ja users create korche and users pawar jonno ---
          fetch("http://localhost:5000/users",{
            method:"POST",
            headers:{
              'content-type':'application/json'
            },
            // users information dite hba -----(ar modda)
            body:JSON.stringify(saveUser)
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
              }
            });

          reset();

          Swal.fire({
            title: "SignUp is Successfully Done !!!!!",
            showClass: {
              popup: "animate__animated animate__fadeInDown",
            },
            hideClass: {
              popup: "animate__animated animate__fadeOutUp",
            },
          });
          // navigate korle home page a pathaay dische
          navigate("/");
        })
        // .catch((error) => console.log(error));
    });
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss || sign Up</title>
      </Helmet>
      <div className="hero  min-h-screen bg-base-200">
        <div className=" hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-center">SignUp!</h1>
            <img src={signInImage} alt="" />
            {/* <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p> */}
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="p-24 ">
              {errors.exampleRequired && <span></span>}

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  className="text-input border border-red-500 p-2 mt-4 "
                  {...register("name", { required: true })}
                  placeholder="Name"
                />
                {errors.name && (
                  <span className="text-red-600">Name is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  className="text-input border border-green-500 p-2 mt-4 "
                  {...register("email", { required: true })}
                  placeholder="Email"
                />
                {errors.email && (
                  <span className="text-green-600">Email is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  className="text-input border border-purple-600 p-2 mt-4 "
                  {...register("photoURL")}
                  placeholder="photo Url"
                  type="url"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  className="text-input border border-blue-500 p-2 mt-4 "
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                  })}
                  placeholder="password"
                  type="password"
                />
                {errors.password && (
                  <span className="text-blue-600">Must be 6 character !!</span>
                )}
              </div>
              <input
                className="mt-3 bg-purple-800 text-white p-2 w-1/2 hover:bg-orange-600 rounded-xl"
                value="Submit "
                type="submit"
              />
                  <p className="text-center text-2xl">
              <small>
                Already have an account{" "}
                <Link to="/login" className="text-red-700">
                  Please Login
                </Link>
              </small>
            </p>
            </form>
            <SocialLogin></SocialLogin>
        
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
