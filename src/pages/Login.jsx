import React from "react";
import Logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { loginSchema } from "../utils/FormValidators";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
const Login = () => {
  const { handleLoginUser, authenticating } = useAuth();
  const btnText = authenticating ? "Loading" : "Login to your account";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema) });

  const handleLogin = (data) => {
    handleLoginUser(data);
    console.log(data);
  };
  return (
    <main className="py-[78px] px-[24px]">
      <Link to="/">
        <img src={Logo} alt="logo" className="block mx-auto" />
      </Link>
      <form
        onSubmit={handleSubmit(handleLogin)}
        className=" bg-[#161D2F] w-full max-w-[400px] rounded-[10px] md:rounded-[20px] p-[24px] md:p-[32px] mt-[58px] md:mt-[82px] mx-auto   "
      >
        <h1 className="text-[32px] mb-[40px] ">Login</h1>
        <div className=" mb-[24px] relative ">
          <input
            type="email"
            placeholder="Email Address"
            className={`border-b  w-full p-3 focus:outline-none caret-[#FC4747] ${
              errors.email ? "border-b-[#FC4747]" : "border-b-[#5A698F]"
            }`}
            {...register("email")}
          />
          <small className="text-[#FC4747] absolute top-[14px] right-[6px]  ">
            {errors.email?.message}
          </small>
        </div>
        <div className=" mb-[24px] relative ">
          <input
            type="password"
            placeholder="Password"
            className={`border-b  w-full p-3 focus:outline-none caret-[#FC4747] ${
              errors.password ? "border-b-[#FC4747]" : "border-b-[#5A698F]"
            }`}
            {...register("password")}
          />
          <small className="text-[#FC4747] absolute top-[14px] right-[6px] ">
            {errors.password?.message}
          </small>
        </div>

        <button
          disabled={authenticating}
          type="submit"
          className="bg-[#FC4747] cursor-pointer rounded-md text-[15px] w-full h-[48px] hover:text-[#161D2f] hover:bg-white "
        >
          {btnText}
        </button>
        <p className="text-center text-[15px] mt-6 ">
          Don't have an account?{" "}
          <Link to="/register" className="text-[#FC4747]">
            Sign Up
          </Link>
        </p>
      </form>
    </main>
  );
};

export default Login;
