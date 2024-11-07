import React from "react";

const CardDesign = ({ title, content, author }) => {
  return (
    <div className="p-8">
      <div className="max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:shadow-xl hover:scale-105" style={{ width: '300px', height: '300px' }}>
        <div className="p-4 h-full">
          <h2 className="text-xl font-semibold mb-2">{title}</h2>
          <p className="text-gray-700 mb-4">{content}</p>
          <p className="text-gray-700 mb-4">Author : {author}</p>
        </div>
      </div>
    </div>
  );
};

export default CardDesign;
