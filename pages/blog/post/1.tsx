import Brawny from "../../../components/Blog/Blogs/Brawny.md";
import React from "react";
import ReactMarkdown from "react-markdown";


const BlogPost = () => {
  return <div className="flex flex-col max-w-7xl">
    <article className="prose">
      <ReactMarkdown className="p-4 sm:py-4 px-16 lg:px-32">{Brawny}</ReactMarkdown>
    </article>
  </div>;
};

export default BlogPost;