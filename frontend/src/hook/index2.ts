import {useEffect, useState} from "react";
import {BACKEND_URL} from "../config";
import axios from "axios";
import {useParams} from "react-router-dom";

interface Blog {
  content: string;
  title: string;
  id: string;
  author: {
    name: string;
  };
}

export const useBlog = () => {
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState<Blog>();
  const token = localStorage.getItem("token");
  const {id} = useParams();
  console.log(id);

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/api/v1/blog/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setLoading(false);
        setBlog(response.data);
      });
  }, [blog]);

  return {
    loading,
    blog,
  };
};
