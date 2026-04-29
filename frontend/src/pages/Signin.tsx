import {Auth} from "../components/Auth";
import {Quote} from "../components/Quote";

export const Signin = () => {
  return (
    <div className="min-h-screen bg-[var(--paper)]">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div>
          <Auth type="signin"></Auth>
        </div>
        <div className="hidden lg:block">
          <Quote
            quote="Stories don't begin with dramatic openings. They begin with someone, somewhere, deciding to write the first sentence."
            author="Kingsuk Bose"
            company="CEO, Medium Inc"></Quote>
        </div>
      </div>
    </div>
  );
};
