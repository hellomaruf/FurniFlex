import { useForm } from "react-hook-form";
import loginImg from "../../assets/login.png";
import { Link } from "react-router-dom";
import { TextField } from "@mui/material";
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { AuthContext } from "../../Services/AuthProvider";

function SignUp() {
  const { register, handleSubmit } = useForm();
  const { signup } = useContext(AuthContext);

  const onSubmit = (data) => {
    const { firstName, lastName, email, password } = data;
    console.log(firstName, lastName, email, password);
    const userInfo = {
      firstName,
      lastName,
      email,
      password,
    };
    signup(userInfo);
  };
  return (
    <div className="">
      <div className="">
        <div className="bg-white hidden sm:block ">
          <div className="grid grid-cols-1 md:grid-cols-7   items-center justify-center    ">
            {/* Signup Form */}
            <div className=" col-span-4 px-10 ">
              <div className="w-full  mx-auto overflow-hidden bg-[#FAFAFA] p-9 max-w-xl  rounded-lg ">
                <div className=" py-4  mx-auto">
                  <div className="text-center pb-5">
                    <h3 className="text-2xl font-semibold">Welcome to</h3>
                    <div className="flex  mx-auto py-2 justify-center">
                      <h2 className="text-4xl font-bold">
                        Furni<span className="text-[#1E99F5]">Flex</span>
                      </h2>
                    </div>
                    <h5 className="text-lg text-gray-600">
                      Signup for purchase your desire products
                    </h5>
                  </div>

                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="w-full grid grid-cols-2 gap-6">
                      <div className="col-span-1">
                        <TextField
                          className="w-full bg-white"
                          {...register("firstName", { required: true })}
                          label="Full Name (Optional)"
                          variant="outlined"
                          name="firstName"
                        />
                      </div>
                      <div className="col-span-1">
                        <TextField
                          className="w-full bg-white"
                          {...register("lastName", { required: true })}
                          label="Full Name (Optional)"
                          variant="outlined"
                          name="lastName"
                        />
                      </div>
                    </div>
                    <div className="w-full mt-6">
                      <TextField
                        className="w-full bg-white"
                        {...register("email", { required: true })}
                        label="Email Address"
                        variant="outlined"
                        name="email"
                      />
                    </div>

                    <div className="w-full mt-6">
                      <TextField
                        className="w-full bg-white"
                        {...register("password", { required: true })}
                        label="Password"
                        variant="outlined"
                        name="password"
                        type="password"
                      />
                    </div>

                    <div className=" mt-3">
                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          //   checked={isChecked}
                          //   onChange={handleCheckboxChange}
                          className="checkbox checkbox-sm [--chkbg:theme(colors.blue.600)]"
                        />
                        <p className="text-sm font-medium">
                          I agree to the{" "}
                          <span className="underline">Terms & Policy</span>
                        </p>
                      </div>
                      {/* <p className="text-sm text-red-600 mt-2">{error}</p> */}
                    </div>
                    <div className="flex mt-8 items-center justify-center">
                      <button className="bg-black hover:bg-gray-900 btn text-white w-full h-16 text-lg">
                        Sign Up
                      </button>
                    </div>
                  </form>
                  <div className="divider">OR</div>
                  <div className="">
                    <div className="grid grid-cols-2 gap-6">
                      <button
                        // onClick={hangleGoogleSignIn}
                        className="btn flex-1   text-base border border-gray-300 bg-[#FAFAFA] h-16 "
                      >
                        <FcGoogle className="text-2xl" /> Sign in with Google
                      </button>
                      <button className="btn flex-1 text-base border border-gray-300 bg-[#FAFAFA] h-16 ">
                        <FaApple className="text-2xl" /> Sign in with Apple
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center pb-4 text-center ">
                  <span className="text-sm text-gray-600 ">
                    Dont have an account?{" "}
                  </span>

                  <Link
                    to={"/login"}
                    className="mx-2 underline text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline"
                  >
                    Login
                  </Link>
                </div>
              </div>
            </div>
            <div className=" col-span-3 relative">
              <div className="  mx-auto">
                <img className="w-full " src={loginImg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
