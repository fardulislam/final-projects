import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../Hook/UseAuth";
import { Link, useLocation, useNavigate } from "react-router";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const navigate = useNavigate();

  const location = useLocation();
  console.log('in the login page ',location)

  const { signinuser } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const hendlelogin = (data) => {
    console.log("after login ", data);
    signinuser(data.email, data.password)
      .then((result) => {

        console.log(result.user);
        navigate(location?.state || '/')
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 ">
      <h2 className="text-center text-2xl font-semibold">Welcome back</h2>
      <p className="text-center">please login</p>
      <form onSubmit={handleSubmit(hendlelogin)} className="card-body">
        <fieldset className="fieldset">
          <label className="label">Email</label>
          {/* email */}
          <input
            type="email"
            {...register("email",{required: true})}
            className="input"
            placeholder="Email"
          />
          {
            errors.email?.type === 'required' && <p className="text-red-500">email is required</p>
          }
          <label className="label">Password</label>
          {/* password */}
          <input
            type="password"
            {...register("password",{required:true ,minLength:6})}
            className="input"
            placeholder="Password"
          />
          {
            errors.password?.type === 'minLength' && <p className="text-rose-500">password must be 6 characters or longer</p>
          }
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
        <p className="text-center">New to Zap-shift <Link className=" text-red-500 hover:underline" state={location.state} to={'/register'}>Register</Link></p>
      </form>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
