import React from "react";
import markdown from "./example-blog.md";
import ReactMarkdown from "react-markdown";


const BlogContent = () => {
  return <div className="flex flex-col max-w-7xl">
    <article className="prose">
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </article>
  </div>;
};

export default BlogContent;