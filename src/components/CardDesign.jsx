import React from "react";

const CardDesign = (props) => {
  return (
    <div className="p-8">
      <div className="max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:shadow-xl hover:scale-105">
        <img
          className="w-full object-cover h-48 md:h-56 lg:h-64"
          src={props.image}
          alt="Card Image"
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2">{props.title}</h2>
          <p className="text-gray-700 mb-4">{props.content}</p>
          <a
            href="#"
            className="inline-block bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-800 transition duration-300"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardDesign;
