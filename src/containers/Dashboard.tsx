import React, { useState } from "react";
import pic from "../resources/IMG_1659.jpg";

import pic1 from "../resources/techIcons/react.png";
import pic2 from "../resources/techIcons/fire.png";
import pic3 from "../resources/techIcons/git.png";
import pic4 from "../resources/techIcons/mongo.png";
import pic5 from "../resources/techIcons/node.png";
import pic6 from "../resources/techIcons/sass.png";
import pic7 from "../resources/techIcons/tail.png";
import pic8 from "../resources/techIcons/ts.png";
import pic9 from "../resources/techIcons/go.png";

import linkedin from "../resources/linkedin.png";
import github from "../resources/github.png";
import twitter from "../resources/twitter.png";

import eng from "../resources/united-kingdom.png";
import esp from "../resources/spain.png";
import cat from "../resources/ddd.jpg";

import skualo from "../resources/skualo.png";
import mm from "../resources/mm.png";

import Project from "../components/Project.tsx";
import SideNavbar from "../components/SideNavbar.tsx";
import TechLang from "../components/TechLang.tsx";

const resume = require("../resources/Resume2.pdf");

const Dashboard: React.FC = () => {
  return (
    <div className="text-white relative">
      <SideNavbar />
      <div className="sm:ml-20">
        <div className="h-screen bg-gray-100 flex justify-center items-center gap-20 text-blue-500 w-full">
          <img
            src={pic}
            alt="pic"
            className="w-56 h-56 object-cover shadow-2xl rounded-full"
          />
          <div className="text-gray-700 space-y-5 uppercase font-bold">
            <p>Hi there! i'm</p>
            <h1 className="text-6xl space-x-5">
              <span className="text-blue-700">Marc</span>
              <span className="text-gray-700">Alzamora</span>
            </h1>
            <p className="text-gray-500 text-sm max-w-md font-semibold">
              A Fullstack developer focused on MERN stack, with interest in
              Golang, web security and creating useful web applications.
            </p>
            <div className="flex items-center gap-8">
              <a
                href={resume}
                download
                className="py-3 px-5 text-xs bg-blue-700 text-white rounded-full hover:opacity-90"
              >
                Resume
              </a>
              {/* Social Media */}
              <a
                className="p-2 rounded-md shadow-xl bg-white"
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/marc-alzamora/"
              >
                <img src={linkedin} alt="" className="w-6" />
              </a>
              <a
                className="p-2 rounded-md shadow-xl bg-white"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/manzcube"
              >
                <img src={github} alt="" className="w-6" />
              </a>
              <a
                className="p-2 rounded-md shadow-xl bg-white"
                target="_blank"
                rel="noreferrer"
                href="https://twitter.com/marcalzanico"
              >
                <img src={twitter} alt="" className="w-6" />
              </a>
            </div>
          </div>
        </div>
        <div id="tech" className="h-screen border-t pt-20">
          <p className="uppercase text-center my-10 font-extrabold text-gray-700 text-2xl">
            tech stack
          </p>
          <div className="w-full flex px-10">
            <div className="w-1/2 flex flex-col gap-5 justify-between px-10">
              <TechLang image={pic1} progress="w-full" />
              <TechLang image={pic2} progress="w-5/6" />
              <TechLang image={pic3} progress="w-1/2" />
              <TechLang image={pic7} progress="w-full" />
              <TechLang image={pic8} progress="w-1/2" />
            </div>
            <div className="w-1/2 flex flex-col gap-5 justify-between px-10">
              <TechLang image={pic4} progress="w-5/6" />
              <TechLang image={pic5} progress="w-3/4" />
              <TechLang image={pic6} progress="w-5/6" />
              <TechLang image={pic9} progress="w-1/5" />
            </div>
          </div>
        </div>

        <div
          id="languages"
          className="languages h-screen py-20 bg-gray-100 text-gray-800"
        >
          <p className="uppercase text-center py-20 font-extrabold text-gray-700 text-2xl">
            languages
          </p>
          <div className="flex justify-around gap-20">
            <div>
              <img className="h-16 relative" src={eng} alt="" />
              <span className="absolute mt-5">C1 IELTS Certificate</span>
            </div>
            <div>
              <img className="h-16 relative" src={esp} alt="" />
              <span className="absolute mt-5">Native</span>
            </div>
            <div>
              <img
                className="relative h-16 w-16 rounded-xl opacity-90"
                src={cat}
                alt=""
              />
              <span className="absolute mt-5">Native</span>
            </div>
          </div>
        </div>
        <div id="experience" className="py-20 text-gray-800">
          <p className="uppercase text-center py-20 font-extrabold text-gray-700 text-2xl">
            working experience
          </p>

          <div className="py-10 flex flex-wrap justify-center">
            <Project
              image={skualo}
              title="SKUALO Diving Center's website with Fareharbor"
              url="https://skualo-8badb.web.app"
            />
            <Project
              image={mm}
              title="Mixing Media Design products agency "
              url="https://mixing-media.web.app"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
