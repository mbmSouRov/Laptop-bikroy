import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../../Contexts/AuthProvider";
const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [loginError, setLoginError] = useState("");
  const { signIn, userLogInWithGoogle } = useContext(AuthContext);
  const [loginUserEmail, setLoginUserEmail] = useState("");
  //   -------------------------------------------
  //   GAP
  //   -------------------------------------------
  const handleLogin = (data, e) => {
    console.log(data);
    setLoginError("");
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setLoginUserEmail(data.email);
        e.target.reset();
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
        setLoginError(error.message);
      });
  };

  const handleGoogleLogIn = (event) => {
    event.preventDefault();
    userLogInWithGoogle()
      .then((userInfo) => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-96 p-7">
        <h2 className="text-xl text-center">Login</h2>

        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              {...register("email", {
                required: "Email Address is required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {/* errors.email && {errors.email?.message} */}
            {<p className="text-red-600"></p>}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be 6 characters or longer",
                },
              })}
              className="input input-bordered w-full max-w-xs"
            />
            <label className="label">
              {" "}
              <span className="label-text">
                <Link className="hover:underline">Forget Password?</Link>{" "}
              </span>
            </label>
            {errors.password && (
              <p className="text-red-600">{errors.password?.message}</p>
            )}
          </div>
          <input
            className="btn btn-primary w-full"
            value="Login"
            type="submit"
          />
          <div>
            {loginError && <p className="text-red-600">{loginError}</p>}
          </div>
        </form>
        <p>
          New Here?{" "}
          <Link
            className="text-secondary hover:underline hover:text-primary"
            to="/signup"
          >
            Click Here To Create Account
          </Link>
        </p>
        <div className="divider">OR</div>
        <button
          className="btn btn-outline btn-success w-full"
          onClick={handleGoogleLogIn}
        >
          <FaGoogle className="mx-2" />
          CONTINUE WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default Login;
