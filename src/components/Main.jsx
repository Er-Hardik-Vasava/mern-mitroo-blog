import React from "react";

const Main = () => {
  return (
    <div className="flex flex-wrap bg-gray-300 p-4 md:p-16">
      <div className="flex flex-col justify-center p-3 md:p-5 order-2 md:order-1 md:h-full w-full md:w-1/2">
        <p className="md:text-2xl md:p-14">
          In the fast-paced world of information technology, staying ahead of
          the curve is essential for success. With rapid advancements in
          artificial intelligence, cloud computing, and cybersecurity, IT
          professionals must continually adapt and upskill to meet the evolving
          demands of the industry.
        </p>
      </div>
      <div className="w-full md:w-1/2 flex justify-center items-center order-1 md:order-2">
        <img
          src="https://images.pexels.com/photos/113850/pexels-photo-113850.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className="w-full h-auto max-w-screen-sm rounded-lg"
          alt="Descriptive Alt Text"
        />
      </div>
    </div>
  );
};

export default Main;
