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
          navigate("/blogs");
        }, 1000);
      }
    } catch (err) {
      alert("Enter Valid Credentials...");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen flex flex-col justify-center bg-[var(--paper)] px-6 sm:px-12 lg:px-20 relative">
      {/* Decorative top-left mark */}
      <Link to="/" className="absolute top-8 left-8 lg:top-10 lg:left-12 flex items-center gap-2 group">
        <svg className="h-6 w-6 text-[var(--ink)] group-hover:text-[var(--accent)] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
        <span className="font-display text-xl tracking-tight text-[var(--ink)] group-hover:text-[var(--accent)] transition-colors" style={{fontWeight: 600}}>Medium</span>
      </Link>

      {/* Decorative folio number top-right */}
      <div className="absolute top-10 right-8 lg:right-12 hidden sm:block">
        <span className="font-mono text-[0.7rem] text-[var(--ink-muted)] tracking-[0.2em]">
          № {type === "signup" ? "001" : "002"} / {type.toUpperCase()}
        </span>
      </div>

      {loading ? (
        <div className="flex justify-center fade-in">
          <Loader />
        </div>
      ) : (
        <div className="max-w-md w-full mx-auto fade-up">
          <div className="mb-10">
            <span className="eyebrow">
              {type === "signup" ? "Begin your story" : "Welcome back"}
            </span>
            <h1 className="display-md text-[2.75rem] sm:text-5xl text-[var(--ink)] mt-3 mb-4">
              {type === "signup" ? (
                <>
                  Create your <em className="italic font-display text-[var(--accent)]" style={{fontWeight: 400}}>account</em>.
                </>
              ) : (
                <>
                  Welcome <em className="italic font-display text-[var(--accent)]" style={{fontWeight: 400}}>back</em>.
                </>
              )}
            </h1>
            <p className="text-[var(--ink-muted)] text-base">
              {type === "signup"
                ? "Already have an account?"
                : "Don't have an account?"}
              <Link
                className="ml-1.5 text-[var(--ink)] font-medium underline decoration-[var(--accent)] decoration-2 underline-offset-4 hover:text-[var(--accent)] transition-colors"
                to={type === "signup" ? "/signin" : "/signup"}>
                {type === "signup" ? "Sign in" : "Sign up"}
              </Link>
            </p>
          </div>

          <div className="space-y-7">
            {type === "signup" && (
              <InputBox
                label="Your Name"
                placeholder="John Doe"
                onChange={(e) => {
                  setPostInputs({...postInputs, name: e.target.value});
                }}
              />
            )}
            <InputBox
              label="Email"
              placeholder="johndoe@gmail.com"
              onChange={(e) => {
                setPostInputs({...postInputs, email: e.target.value});
              }}
            />
            <InputBox
              label="Password"
              type={"password"}
              placeholder="••••••••"
              onChange={(e) => {
                setPostInputs({...postInputs, password: e.target.value});
              }}
            />

            <div className="pt-4">
              <button
                onClick={handleSignupSignin}
                type="button"
                className="btn-primary w-full">
                {type === "signup" ? "Create Account" : "Sign In"}
                <i className="ri-arrow-right-line"></i>
              </button>
            </div>

            <div className="editorial-divider mt-8">
              <span className="font-mono text-[0.7rem] tracking-[0.2em]">OR</span>
            </div>

            <button type="button" className="btn-ghost w-full">
              <i className="ri-google-fill text-lg"></i>
              Continue with Google
            </button>
          </div>

          <p className="text-xs text-[var(--ink-muted)] mt-10 text-center font-body leading-relaxed">
            By continuing, you agree to our{" "}
            <a href="#" className="underline hover:text-[var(--ink)]">Terms</a> and{" "}
            <a href="#" className="underline hover:text-[var(--ink)]">Privacy Policy</a>.
          </p>
        </div>
      )}
    </div>
  );
};

const Loader = () => {
  return (
    <div className="animate-pulse flex flex-col items-start gap-5 w-80">
      <div className="h-3 w-24 bg-[var(--line)] rounded-sm" />
      <div className="h-12 w-full bg-[var(--line)] rounded-md" />
      <div className="h-4 w-2/3 bg-[var(--line-soft)] rounded-sm" />
      <div className="space-y-5 w-full pt-4">
        <div className="h-9 bg-[var(--line-soft)] w-full rounded-sm" />
        <div className="h-9 bg-[var(--line-soft)] w-full rounded-sm" />
        <div className="h-9 bg-[var(--line-soft)] w-full rounded-sm" />
      </div>
      <div className="h-12 bg-[var(--ink)] w-full rounded-full mt-2 opacity-60" />
    </div>
  );
};
