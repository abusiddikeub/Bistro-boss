import React, { useContext, useEffect, useRef, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import loginImage from '../../assets/others/authentication1.png'

import { AuthContext } from "../../Routers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import SocialLogin from "../Home/Home/shared/SocialLogin/SocialLogin";

const Login = () => {
  const { signIn } = useContext(AuthContext);

  // private router ar jonno and home page a nia jawar jonno ------
  const Navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // captcha  validation ar jonno
  //  const captchaRef = useRef(null);
  const [disabled, setDisabled] = useState(true);

  // captcha ar jonno useEffect dia korte hba .......
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  // ------------------------

  // handleLogin form ar jonno ----------
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const captcha = form.captcha.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your Login successfully !!!",
          showConfirmButton: false,
          timer: 1500,
        });
        // home page a nia jawar jonno ------
        Navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  // captcha validation
  const handleValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    console.log(user_captcha_value);
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss || Login</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col md:flex-row-reverse">
          <div className="text-center lg:text-left md:w-1/2">
            <h1 className="text-5xl font-bold text-center mt-3 mb-3">Login now!</h1>
            <img src={loginImage} alt="" />
            {/* <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p> */}
          </div>
          <div className="card md:w-1/2 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>

              {/* type captcha  */}

              <div className="form-control">
                <label className="label">
                  {/* <span className="label-text">Password</span> */}
                  <LoadCanvasTemplate />
                </label>
                <input
                  onBlur={handleValidateCaptcha}
                  type="text"
                  // ref={captchaRef}
                  name="captcha"
                  placeholder="type the text captcha above"
                  className="input input-bordered"
                />
                {/* <button 
               className="btn btn-outline btn-xs mt-2">Validation</button> */}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control ">
                {/* button a jkn true hba tkn login button show korbe na hole disable dekabe */}
                <input
                  //  disabled={disabled}
                  className="btn btn-primary"
                  type="submit"
                  value="login"
                />
              </div>
              <p className="text-center text-2xl">
              <small>
                New Here ?{" "}
                <Link to="/signup" className="text-red-700">
                  Create an account{" "}
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

export default Login;
