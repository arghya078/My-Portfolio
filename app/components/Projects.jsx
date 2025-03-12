import { serviceData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { assets } from "@/assets/assets";
import { motion } from "motion/react";

const Projects = () => {
  return (
    <motion.div
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1}}
     id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <motion.h4
      initial={{opacity:0, y:-20}}
      whileInView={{opacity:1, y:0}}
      transition={{duration:0.5, delay:0.3}}
       className="text-center mb-2 text-lg ">My Works</motion.h4>
      
      <motion.h2
      initial={{opacity:0, y:-20}}
      whileInView={{opacity:1, y:0}}
      transition={{duration:0.5, delay:0.5}}
       className="text-center text-5xl font-bold">Projects</motion.h2>

      <motion.p
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:0.5, delay:0.7}} className="text-center max-w-2xl mx-auto mt-5 mb-2">
        I am a passionate and motivated React Developer with a strong foundation
        in web development.
      </motion.p>

      <motion.div
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:0.6, delay:0.9}}
       className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-10">
        {serviceData.map(({ icon, title, description, link }, index) => (
          <motion.div
          whileHover={{scale:1.05}}
            key={index}
            className="p-4 border-[0.5px] border-gray-300 rounded-xl cursor-pointer hover:bg-gray-100 hover:transform hover:scale-105 transition-all ease-in-out duration-300"
          >
            <Image src={icon} alt={title} className="w-10" />
            <h3 className="text-md my-4 text-gray-700">{title}</h3>
            <p className="text-gray-600 text-sm leading-5">{description}</p>
            <a href={link} className="flex items-center gap-2 mt-5 text-sm">
              View Project{" "}
              <Image
                src={assets.right_arrow}
                alt="arrow icon"
                className="w-4"
              />
            </a>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Projects;
