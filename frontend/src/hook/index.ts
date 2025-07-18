import {useEffect, useState} from "react";
import {BACKEND_URL} from "../config";
import axios from "axios";

interface Blog {
  content: string;
  title: string;
  id: string;
  author: {
    name: string;
  };
}

export const useBlogs = () => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/api/v1/blog/bulk`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setLoading(false);
        setBlogs(response.data.posts);
      });
  }, []);

  return {
    loading,
    blogs,
  };
};
