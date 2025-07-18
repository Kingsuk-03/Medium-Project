import avatar from "../assets/51.png";
import "remixicon/fonts/remixicon.css";

export const AppBar = () => {
  return (
    <div>
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <a href="/blogs" className="flex items-center space-x-2">
                <svg
                  className="h-8 w-8 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
                <span className="text-2xl font-bold text-gray-900 font-['Poppins',sans-serif]">
                  Medium
                </span>
              </a>
            </div>
            <div>
              <div className="flex justify-center">
                <div className="flex justify-centertext-slate-600 pr-4 pt-1">
                  <i className="ri-quill-pen-ai-line text-2xl"></i>
                  <div className="text-xl hover:font-semibold hover:cursor-pointer">
                    Write
                  </div>
                </div>
                <i className="text-2xl text-slate-800 ri-notification-4-line pt-1 pr-4 hover:cursor-pointer"></i>
                <img
                  className="w-10 h-10 flex flex-col justify-center rounded-full border-1 border-black mr-2 hover:cursor-pointer"
                  src={avatar}
                  alt="Rounded avatar"
                />
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
