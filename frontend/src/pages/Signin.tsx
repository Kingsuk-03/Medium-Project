import {useState} from "react";
import {Heading} from "../components/Heading";
import {SubHeading} from "../components/Subheading";
import {InputBox} from "../components/InputBox";
import {Quote} from "../components/Quote";

export const Signin = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Left Section (Form) */}
      <div className="w-full md:w-1/2 py-10 px-6 md:py-40 md:px-20 flex justify-center">
        <div>
          <Heading label="Login To Your Account" />
          <SubHeading
            label="Don't Have an account?"
            buttonText="Signup"
            to="/signup"
          />
          <InputBox
            label="Email"
            placeholder="johnDoe@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputBox
            label="Password"
            placeholder="hello@4321"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>

      {/* Right Section (Testimonial) */}
      <Quote
        quote='"Everyone I interacted with was so friendly and genuinely wanted to help. It made all the difference!"'
        author="Lionel Yamal"
        company="RW,  FC Barcelona"></Quote>
    </div>
  );
};
