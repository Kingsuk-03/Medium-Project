import axios from "axios";
import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {InputBox} from "../components/InputBox";
import {type SignupInput} from "@kingsuk100x/medium-common";
import {BACKEND_URL} from "../config";

export const Auth = ({type}: {type: "signup" | "signin"}) => {
  const [loading, setLoading] = useState(false);
  const [postInputs, setPostInputs] = useState<SignupInput>({
    email: "",
    password: "",
    name: "",
  });
  const navigate = useNavigate();
  const handleSignupSignin = async () => {
    try {
      setLoading(true);
      const res = await axios.post(
        `${BACKEND_URL}/api/v1/user/${type == "signup" ? "signup" : "signin"}`,
        postInputs
      );
      localStorage.setItem("token", res.data.token);

      if (res.status === 200) {
        setTimeout(() => {
          navigate("/blogs"); // redirect to your target page
        }, 1000);
      }
    } catch (err) {
      alert("Enter Valid Credentials...");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="h-screen flex flex-col justify-center">
      {loading ? (
        <div className="flex justify-center">
          <Loader />
        </div>
      ) : (
        <>
          <div className="flex justify-center">
            <div>
              {/* {JSON.stringify(postInputs)} */}
              <div className="text-3xl font-extrabold">
                {type === "signup" ? "Create an account" : "Login to account"}
              </div>
              <div className="text-slate-400 pl-5">
                {type === "signup"
                  ? "Already have an account?"
                  : "Don't have an account?"}
                <Link
                  className="pl-1 underline"
                  to={type === "signup" ? "/signin" : "/signup"}>
                  {type === "signup" ? "Login" : "Signup"}
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="w-85 pt-4">
              {type === "signup" ? (
                <InputBox
                  label="Your Name"
                  placeholder="John Doe"
                  onChange={(e) => {
                    setPostInputs({...postInputs, name: e.target.value});
                  }}
                />
              ) : null}
            </div>
            <div className="w-85 pt-3">
              <InputBox
                label="Email"
                placeholder="johnDoe@gmail.com"
                onChange={(e) => {
                  setPostInputs({...postInputs, email: e.target.value});
                }}
              />
            </div>
            <div className="w-85 pt-3">
              <InputBox
                label="Password"
                type={"password"}
                placeholder=" "
                onChange={(e) => {
                  setPostInputs({...postInputs, password: e.target.value});
                }}
              />
            </div>
            <div className="pt-6">
              <button
                onClick={handleSignupSignin}
                type="button"
                className=" w-85 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 hover:cursor-pointer">
                {type === "signup" ? "Sign Up" : "Sign In"}
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

const Loader = () => {
  return (
    <div className="animate-pulse flex flex-col items-center gap-4 w-60">
      <div>
        <div className="w-48 h-6 bg-slate-400 rounded-md" />
        <div className="w-28 h-4 bg-slate-400 mx-auto mt-3 rounded-md" />
      </div>
      <div className="h-7 bg-slate-400 w-full rounded-md" />
      <div className="h-7 bg-slate-400 w-full rounded-md" />
      <div className="h-7 bg-slate-400 w-full rounded-md" />
      <div className="h-7 bg-slate-400 w-1/2 rounded-md" />
    </div>
  );
};
