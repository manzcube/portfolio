import React from "react";

import "../style/Components.css";

interface Project {
  title: string;
  image: string;
  url: string;
}

const Project: React.FC<Project> = ({ title, image, url }) => {
  return (
    <a target="_blank" href={url} className="m-5 md:m-20 max-w-[80ch]">
      <div className="mb-5 text-xs sm:text-md md:text-lg font-bold">
        {title}
      </div>
      <img src={image} className="object-cover rounded cursor-pointer" alt="" />
    </a>
  );
};

export default Project;
