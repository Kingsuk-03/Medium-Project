import {Auth} from "../components/Auth";
import {Quote} from "../components/Quote";

export const Signup = () => {
  return (
    <div>
      <div className=" grid gird-cols-1 lg:grid-cols-2">
        <div>
          <Auth type="signup"></Auth>
        </div>
        <div className="hidden lg:block">
          <Quote
            quote='"The customer service I received was exceptional. The support team went
            above and beyond to address my concerns."'
            author="Kingsuk Bose"
            company="CEO,  Medium Inc"></Quote>
        </div>
      </div>
    </div>
  );
};
