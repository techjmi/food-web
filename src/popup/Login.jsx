
import React, { useContext, useState } from "react";
import SignUp from "./SignUp";
import { RxCross2 } from "react-icons/rx";
import { Button, Spinner } from "flowbite-react";
import { LoginUser } from "../service/api";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../context/Dataprovider";

const Login = ({ onClose, onCancel }) => {
  const [showSignup, setShowSignup] = useState(false);
  const [currState, setCurrState] = useState("login");
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { fetchUser } = useContext(DataContext);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrormsg] = useState("");
  const navigate = useNavigate();

  const handleSignup = () => {
    setCurrState("signUp");
    setShowSignup(true);
  };

  const handleClose = () => {
    setCurrState("login");
    setShowSignup(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  //handle submit

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrormsg(""); 
  
    try {
      const res = await LoginUser(formData);
      console.log(res);
    localStorage.setItem("food_token", res.data.token);
      if (res.status === 200) {
        // localStorage.setItem("food_token", res.data.token);
        await fetchUser();
        navigate("/");
      } else {
        setErrormsg(res.data.message||"Login failed");
        setLoading(false)
      }
    } catch (error) {
      console.log("Error while logging in:", error.message);
      // setErrormsg("An error occurred. Please try again."); 
      setLoading(false);
    }
  };
  
  
  return (
    <div className="inset-0 flex items-center justify-center bg-opacity-50 z-40 fixed">
      <div className="w-[95%] max-w-md bg-white pb-8 pt-2 rounded-lg shadow dark:border md:mt-0 xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <RxCross2
          className="float-right mt-4 me-4 font-extrabold cursor-pointer size-6"
          onClick={onClose}
        />
        <div className="space-y-2 md:space-y-3 sm:p-4">
          {currState === "login" ? (
            <>
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
                Login Here
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required
                    onChange={handleChange}
                    value={formData.email} // Bind value to formData.email
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                    onChange={handleChange}
                    value={formData.password} // Bind value to formData.password
                  />
                </div>
                {errorMsg && (
                  <p className="text-sm font-light text-red-500 dark:text-red-400">
                    {errorMsg}
                  </p>
                )}
                <Button
                  type="submit"
                  className="w-full text-black bg-blue-400 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-2 py-1 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  {loading ? <Spinner /> : "Login"}
                </Button>
              </form>
            </>
          ) : (
            <>
              <h2 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
                Sign Up Here
              </h2>
              <SignUp handleClose={handleClose} />
            </>
          )}
          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            {currState === "login"
              ? "Don't have an account? "
              : "Already have an account? "}
            <span
              onClick={currState === "login" ? handleSignup : handleClose}
              className="cursor-pointer font-medium text-primary-600 hover:underline dark:text-primary-500"
            >
              {currState === "login" ? "Sign Up Here" : "Login Here"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
