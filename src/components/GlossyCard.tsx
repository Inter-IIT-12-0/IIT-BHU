import React from "react";

const GlossyCard = () => {
  return (
    <div className="max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg">
      {/* Image section */}
      <div className="bg-cover bg-center">
        <img src="/GlossyRectangle.jpg"></img>
      </div>
      {/* Text content section */}
      <div className="p-4">
        <div className=" w-full text-center  flex justify-end">
          <p className="text-gray-600 w-20 rounded-md bg-blue-300 font-helvetica-neue text-xs font-light tracking-wider uppercase">
            POPULAR
          </p>
        </div>
        <h2 className="text-xl font-semibold mb-2"> UX Design Foundations</h2>
        <p className="text-gray-600 text-sm mb-4">
          This course provides you the foundation of UX design & concepts. This
          course also covers the basics of...
        </p>
        <p className="text-black font-helvetica-neue text-xs font-light leading-normal tracking-wider uppercase mb-4">
          BEGINNER . 10 HOURS
        </p>
      </div>
    </div>
  );
};

export default GlossyCard;
