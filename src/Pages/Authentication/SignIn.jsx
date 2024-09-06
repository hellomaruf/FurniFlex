import { TextField } from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "../../Services/AuthProvider";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import loginImg from "../../assets/login.png";

function SignIn() {
  const { register, handleSubmit } = useForm();
  const { signup } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const { email, password } = data;
    console.log(email, password);
    const userInfo = {
      email,
      password,
    };
    signup(userInfo);
    await axios
      .post(`${import.meta.env.VITE_LOCALHOST_URL}/isUserSignUp`, userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          navigate("/");
        }
      })
      .catch((error) => {
        console.log(error);
      });
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
                  <div className=" pb-8">
                    <h2 className="text-3xl font-semibold">Welcome Back!</h2>
                    <h5 className="text-lg text-gray-600 mt-1">
                      Enter your Credentials to access your account
                    </h5>
                  </div>

                  <form onSubmit={handleSubmit(onSubmit)}>
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
                        Sign In
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

export default SignIn;
