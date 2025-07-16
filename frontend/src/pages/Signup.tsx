import {useState} from "react";
import {Heading} from "../components/Heading";
import {SubHeading} from "../components/Subheading";
import {InputBox} from "../components/InputBox";
import {Quote} from "../components/Quote";

export const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="grid grid-cols-2">
      <div>
        <div className="h-screen flex flex-col justify-center px-70">
          <Heading label="Create an Account" />
          <SubHeading
            label="Already Have an account?"
            buttonText="Login"
            to="/signin"
          />
          <InputBox
            label="Your Name"
            placeholder="John Doe"
            onChange={(e) => setName(e.target.value)}
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
      <Quote
        quote='"The customer service I received was exceptional. The support team went
            above and beyond to address my concerns."'
        author="Kingsuk Bose"
        company="CEO,  Medium Inc"></Quote>
    </div>
  );
};
