import React from "react";
import Logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../utils/FormValidators";
import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";

const Register = () => {
  const { handleRegisterUser, authenticating } = useAuth();
  const btnText = authenticating ? "Loading" : "Create account";
   
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(registerSchema) });

  const handleRegister = (data) => {
    handleRegisterUser(data);
    console.log(data);
  };

  return (
    <main className="py-[78px] px-[24px]">
      <Link to="/">
        <img src={Logo} alt="logo" className="block mx-auto" />
      </Link>{" "}
      <form
        onSubmit={handleSubmit(handleRegister)}
        className=" bg-[#161D2F] w-full max-w-[400px] rounded-[10px] md:rounded-[20px] p-[24px] md:p-[32px] mt-[58px] md:mt-[82px] mx-auto   "
      >
        <h1 className="text-[32px] mb-[40px] ">Sign Up</h1>
        <div className=" mb-[24px] relative ">
          <input
            type="email"
            placeholder="Email Address"
            className={`border-b  w-full p-3 focus:outline-none caret-[#FC4747] ${
              errors.email ? "border-b-[#FC4747]" : "border-b-[#5A698F]"
            } `}
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
            } `}
            {...register("password")}
          />
          <small className="text-[#FC4747] absolute top-[14px] right-[6px] ">
            {errors.password?.message}
          </small>
        </div>
        <div className=" mb-[24px] relative ">
          <input
            type="password"
            placeholder="Repeat password"
            className={`border-b  w-full p-3 focus:outline-none caret-[#FC4747] ${
              errors.repeatPassword
                ? "border-b-[#FC4747]"
                : "border-b-[#5A698F]"
            } `}
            {...register("repeatPassword")}
          />
          <small className="text-[#FC4747] absolute top-[14px] right-[6px] ">
            {errors.repeatPassword?.message}
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
          Already have an account?{" "}
          <Link to="/login" className="text-[#FC4747]">
            Login
          </Link>
        </p>
      </form>
    </main>
  );
};

export default Register;
