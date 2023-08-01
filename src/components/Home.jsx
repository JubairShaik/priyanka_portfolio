import React from "react";
import HeroImage from "../assets/heroImage.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className=" w-full   pt-[5rem]  md:h-screen h-full "
    >
      <div className=" bg-red-  mt-[4rem] md:mt-[.3rem]  flex flex-col gap-10 items-center justify-center h-full md:px-[5rem] px-4 md:flex-row">


        <div className="flex flex-col     justify-center h-full">
          <span className="text-blue-500" >hello</span>
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Priyanka

          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            Currently, I love to work on web application using technologies like
            java,python,Machine learning.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
               Download Resume
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div className="flex fle-1  p-2 w-[380px]">
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl w-full h-full object-cover "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
