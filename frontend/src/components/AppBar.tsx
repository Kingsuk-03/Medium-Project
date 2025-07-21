import {Link} from "react-router-dom";
import avatar from "../assets/51.png";
import "remixicon/fonts/remixicon.css";
import {useState} from "react";

export const AppBar = () => {
  const [showOptions, setShowOptions] = useState(false);
  const clearStorage = () => {
    localStorage.clear();
  };
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
                <span className="text-2xl font-bold text-gray-900">Medium</span>
              </a>
            </div>
            <div>
              <div className="flex justify-center">
                <div className="flex justify-centertext-slate-600 pr-3">
                  <Link to={`/writeBlog`}>
                    <button
                      type="button"
                      className="text-white bg-green-600 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-200 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 cursor-pointer">
                      <i className="ri-quill-pen-ai-line pr-1"></i>Write
                    </button>
                  </Link>
                </div>
                <i className="text-2xl text-slate-800 ri-notification-4-line pt-1 pr-4 hover:cursor-pointer"></i>
                <div className="relative inline-block">
                  <img
                    src={avatar}
                    alt="User avatar"
                    onClick={() => setShowOptions((prev) => !prev)}
                    className="w-10 h-10 rounded-full border border-black cursor-pointer"
                  />

                  {showOptions && (
                    <div className="absolute inline-flex rounded-md shadow-xs left-1/2 transform -translate-x-1/2 top-full mt-2 p-2 z-50">
                      <button
                        type="button"
                        className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-black focus:z-10 focus:ring-black focus:text-black">
                        Profile
                      </button>
                      <button
                        type="button"
                        className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-black focus:z-10 focus:ring-black focus:text-black">
                        Settings
                      </button>
                      <Link to={`/`}>
                        <button
                          type="button"
                          onClick={clearStorage}
                          className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-black focus:z-10 focus:ring-black focus:text-black cursor-pointer">
                          LogOut
                        </button>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
