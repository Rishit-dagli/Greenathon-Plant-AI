import React from "react";

const BlogPost = ({ imgLink, blogTitle, blogBody }) => {
  return (
    <div className="blogpost">
      <div className="blog-img">
        <img src={`${imgLink}`} alt={blogTitle} />
      </div>
      <div className="blog-text">
        <h3 class="blog-title">{blogTitle}</h3>
        <p class="blog-body">{blogBody}</p>
      </div>
    </div>
  );
};

export default BlogPost;
