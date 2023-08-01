import React from "react";
 
import mlProject from "../assets/portfolio/ml-project.webp";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: mlProject,
      gitRepoLink: "https://github.com/priyanka77-priya/ML-Project-Diabetes-prediction",
    },
  ];
  

  return (
    <div
      name="projects"
      className="md:h-screen  "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 sm:px-0">
          {portfolios.map(({ id, src ,gitRepoLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <h2 className="p-3 text-semibold text-[17px] text-blue-400" >ML-Project-Diabetes-prediction</h2>
              <div className="flex items-center justify-center">
                
                <a href={gitRepoLink}  className="w-full p-2 " >
                <button className="w-full px-6 py-3 bg-slate-800 rounded-md duration-200 hover:scale-105">
                   Github Repo Link
                </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
