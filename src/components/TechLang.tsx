import React from "react";

interface TechProps {
  image: string;
  progress: string;
}

const TechLang: React.FC<TechProps> = ({ image, progress }) => {
  return (
    <div className="flex items-center gap-5 my-3">
      <img src={image} className="w-14 image-cover" alt="" />
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div className={`bg-blue-600 h-2.5 rounded-full ${progress}`}></div>
      </div>
    </div>
  );
};

export default TechLang;
