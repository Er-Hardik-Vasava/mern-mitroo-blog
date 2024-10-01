import React from "react";
import CardDesign from "./CardDesign";
import blogPosts from "../../public/blogPosts.js";

const Card = () => {
  return (
    <div className="flex flex-wrap justify-center items-center bg-gray-300">
      {blogPosts.map((post) => (
        <CardDesign
          key={post.id}
          image={post.image}
          title={post.title}
          content={post.content}
        />
      ))}
    </div>
  );
};

export default Card;
