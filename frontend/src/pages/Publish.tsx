import {useEffect, useRef, useState} from "react";
import avatar from "../assets/51.png";
import "remixicon/fonts/remixicon.css";
import {useNavigate} from "react-router-dom";
import {BACKEND_URL} from "../config";
import axios from "axios";

export const Publish = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const navigate = useNavigate();
  const publishBlog = async () => {
    if (!title.trim() || !content.trim()) {
      alert("Title and Content are required to publish!");
      return;
    }
    try {
      const res = await axios.post(
        `${BACKEND_URL}/api/v1/blog`,
        {title, content},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (res.status === 200) {
        setTimeout(() => {
          navigate(`/blog/${res.data.id}`);
        }, 1000);
      }
    } catch (err) {
      console.error("Some Error Occured", err);
    }
  };

  const generateBlog = async () => {
    if (!title || !title.trim()) {
      alert("Write a Title to generate Blog!");
      return;
    }
    try {
      const res = await axios.post(
        `${BACKEND_URL}/api/v1/blog/generate-blog`,
        {title},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const GeneratedContent = res.data.content;
      if (res.status === 200) {
        setContent(GeneratedContent);
      }
    } catch (err) {
      console.error("Some Error Occured", err);
    }
  };

  const contentRef = useRef<HTMLTextAreaElement | null>(null);
  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.height = "auto";
      contentRef.current.style.height = `${contentRef.current.scrollHeight}px`;
    }
  }, [content]);

  return (
    <div>
      <DraftBar publishBlog={publishBlog} />
      <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 max-w-screen-xl mx-auto">
        <div className="flex flex-col sm:flex-row mt-10 mb-4">
          <div className="pt-2 sm:pt-5 sm:pr-5 sm:border-r border-gray-300 mb-4 sm:mb-0">
            <div className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-600 text-5xl font-extralight pb-1">
              +
            </div>
          </div>
          <textarea
            rows={1}
            placeholder="Title"
            className="block w-full p-4 text-gray-900 text-3xl sm:text-4xl md:text-5xl focus:outline-none focus:ring-0 focus:border-transparent resize-none"
            onInput={(e) => {
              const target = e.target as HTMLTextAreaElement;
              target.style.height = "auto";
              target.style.height = `${target.scrollHeight}px`;
            }}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="mb-6">
          <textarea
            ref={contentRef}
            rows={1}
            placeholder="Tell Your Story..."
            className="block w-full text-xl sm:text-2xl rounded-lg focus:outline-none focus:ring-0 focus:border-transparent p-2.5 resize-none"
            value={content}
            onInput={(e) => {
              const target = e.target as HTMLTextAreaElement;
              target.style.height = "auto";
              target.style.height = `${target.scrollHeight}px`;
            }}
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />
          <div className="flex flex-row-reverse">
            <button
              type="button"
              onClick={generateBlog}
              className="text-white py-2 px-3 rounded-full cursor-pointer m-2 animate-[gradientShift_5s_linear_infinite]"
              style={{
                background: "linear-gradient(45deg, white, black, white)",
                backgroundSize: "200% 200%",
                backgroundPosition: "0% 50%",
              }}>
              <i className="ri-bard-line pr-0.5"></i>
              Generate with AI
            </button>
            <style>{`@keyframes gradientShift {0%, 100% { background-position: 0% 50%; }50% { background-position: 100% 50%; }}`}</style>
          </div>
        </div>
      </div>
    </div>
  );
};

interface DraftBarProps {
  publishBlog: () => void;
}

const DraftBar = ({publishBlog}: DraftBarProps) => {
  return (
    <div>
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <a className="flex items-center space-x-2">
                <i className="ri-draft-fill text-3xl"></i>
                <span className="text-2xl font-bold text-gray-700">Draft</span>
              </a>
            </div>
            <div>
              <div className="flex justify-center">
                <div className="flex justify-centertext-slate-600 pr-3">
                  <button
                    type="button"
                    onClick={publishBlog}
                    className="text-white bg-green-600 hover:bg-green-800
                    focus:outline-none focus:ring-4 focus:ring-green-200 font-medium
                    rounded-full text-sm px-5 py-2.5 text-center me-2 cursor-pointer">
                    Publish
                  </button>
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
