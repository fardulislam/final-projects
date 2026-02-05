import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../Hook/UseAuth";
import { Link, useLocation, useNavigate } from "react-router";
import SocialLogin from "../SocialLogin/SocialLogin";
import axios from "axios";

const Register = () => {
  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();
  const { registeruser, updatauserprofile } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const hendleregistration = (data) => {
    console.log("after data", data.photo[0]);
    const profileimg = data.photo[0];

    registeruser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        //1. store tha from data //
        const fromdata = new FormData();
        fromdata.append("image", profileimg);

        //2. send tha photo to store and get tha url //
        const image_API_URL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host_key}`;
        axios.post(image_API_URL, fromdata).then((res) => {
          console.log("after image upload", res.data.data.display_url);

          // update user profile to the firebase //
          const userprofile = {
            displayName: data.name,
            photoURL: res.data.data.display_url,
          };

          updatauserprofile(userprofile)
            .then((res) => {
              console.log("user profile update done", res);
              navigate(location.state || '/')
            })
            .catch((error) => {
              console.log(error);
            });
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 ">
      <form
        className="card-body"
        onSubmit={handleSubmit(hendleregistration)}
        action=""
      >
        <fieldset className="fieldset">
          {/* name field */}
          <label className="label">Name</label>
          <input
            type="text"
            {...register("name", { required: true })}
            className="input"
            placeholder="Your name"
          />
          {errors.name?.type === "required" && (
            <p className="text-red-500">name is required?</p>
          )}

          {/* photo field */}
          <label className="label">Photo</label>
          <input
            type="file"
            {...register("photo", { required: true })}
            className="file-input"
            placeholder="Your photo"
          />
          {errors.photo?.type === "required" && (
            <p className="text-red-500">photo is required?</p>
          )}
          {/* email field */}
          <label className="label">Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="input"
            placeholder="Email"
          />
          {errors.email?.type === "required" && (
            <p className="text-red-500">email is required?</p>
          )}
          {/* password field */}
          <label className="label">Password</label>
          <input
            type="password"
            {...register("password", {
              required: true,
              minLength: 6,
              pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9]).+$/,
            })}
            className="input"
            placeholder="Password"
          />
          {errors.password?.type === "required" && (
            <p className="text-red-500">password is required?</p>
          )}
          {errors.password?.type === "minLength" && (
            <p className="text-red-500">password must be 6 character needed?</p>
          )}
          {errors.password?.type === "pattern" && (
            <p className="text-red-500">
              {" "}
              Password must be at least 8 characters and include uppercase,
              lowercase, and a special character
            </p>
          )}

          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Register</button>
        </fieldset>
        <p className="text-center">
          Already have an account please
          <Link state={location.state}  className=" text-red-500 hover:underline" to={"/login"}>
            Login
          </Link>
        </p>
      </form>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Register;
