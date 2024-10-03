import { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [showPass, setShowPass] = useState(false);

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center md:w-1/2 ">
          <img
            className="w-[500px]"
            src="https://i.ibb.co/rZkBdjK/sign.jpg"
            alt=""
          />
        </div>
        <div className="card p-2 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-2xl text-center  font-bold">SignUp now!</h1>
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
              />

              <span className="text-red-600">Name is required</span>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                {...register("photoURL", { required: true })}
                name="photoURL"
                placeholder="photo URL"
                className="input input-bordered"
              />
              {errors.photoURL && (
                <span className="text-red-600">photoURL is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
              {errors.email && (
                <span className="text-red-600">Email is required</span>
              )}
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={showPass ? "text" : "password"}
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                })}
                placeholder="password"
                className="input input-bordered"
              />
              <p
                className="absolute top-[54px] right-[15px]"
                onClick={() => setShowPass(!showPass)}
              >
                <small>{showPass ? <FaEye /> : <FaEyeSlash />}</small>
              </p>
              {errors.password?.type === "required" && (
                <p className="text-red-600">Password required</p>
              )}

              {errors.password?.type === "minLength" && (
                <p className="text-red-600">Password minimum 6 required</p>
              )}

              {errors.password?.type === "maxLength" && (
                <p className="text-red-600">Password less than 20 characters</p>
              )}

              {errors.password?.type === "pattern" && (
                <p className="text-red-600">
                  Password must have one uppercase,one number and one special
                  character
                </p>
              )}
            </div>

            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>

              <input
                type={showPass ? "text" : "password"}
                {...register("confirm", { required: true })}
                name="confirm"
                placeholder="confirm password"
                className="input input-bordered"
              />

              <p
                className="absolute top-[54px] right-[15px]"
                onClick={() => setShowPass(!showPass)}
              >
                <small>{showPass ? <FaEye /> : <FaEyeSlash />}</small>
              </p>

              {errors.confirm && (
                <span className="text-red-600">
                  You need to re-type password
                </span>
              )}
            </div>

            <div className="form-control mt-6">
              <input
                type="submit"
                value="Sign Up"
                className="btn btn-primary"
              />
            </div>
          </form>
          <p className="text-center">
            <small>
              Already have an account? <Link to="/login">Login</Link>
            </small>
          </p>
          {/* <SocialLogin></SocialLogin> */}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
