import {Auth} from "../components/Auth";
import {Quote} from "../components/Quote";

export const Signup = () => {
  return (
    <div className="min-h-screen bg-[var(--paper)]">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div>
          <Auth type="signup"></Auth>
        </div>
        <div className="hidden lg:block">
          <Quote
            quote="The best writing isn't loud. It's honest. It says the thing other people are thinking but haven't yet found the words for."
            author="Kingsuk Bose"
            company="CEO, Medium Inc"></Quote>
        </div>
      </div>
    </div>
  );
};
