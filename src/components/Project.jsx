import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../assets/images/weather-proj.jpg";
import project2 from "../assets/images/youtube-proj.jpg";
import project3 from "../assets/images/freshCart-proj.jpg";
import project4 from "../assets/images/game-proj.jpg";
import project5 from "../assets/images/Dash-proj.jpg";
import project6 from "../assets/images/Talk-proj.jpg";
import project7 from "../assets/images/proto-proj.jpg";
import project_person from "../assets/images/project_person1.png";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const Project = () => {
  const projects = [
    {
      img: project1,
      name: "Weather website",
      github_Details: "This website developed by reactjs bootstrap5 html5 css3 and api",
      live_link: "https://weather-app-30664.web.app",
    },
    {
      img: project2,
      name: "Youtube-Clone",
      github_Details: "This website developed by reactjs Material UI RapidApi",
      live_link: "https://youtube-n6lw.onrender.com",
    },
    {
      img: project3,
      name: "Ecommerce website",
      github_Details: "This website developed by reactjs ,bootstrap5 and RESTfullApi",
      live_link: "https://freshcart-43bb5.web.app",
    },
    {
      img: project4,
      name: "Free Game Website",
      github_Details:
        "This website developed by reactjs ,bootstrap5 and API",
      live_link: "https://gameover-d2899.web.app",
    },
    {
      img: project5,
      name: "Admin Dashboard",
      github_Details: "This website developed by reactjs material ui  Nivo and Fullcalender.js",
      live_link: "https://admindashboard-vykg.onrender.com",
    },
    {
      img: project6,
      name: "Video Conference",
      github_Details: "This website developed by js html5 css3 webrtc expressjs socket.io firebase",
      live_link: "https://talk-fv15.onrender.com",
    },
    {
      img: project7,
      name: "Protofolio",
      github_Details: "This  website developed by reactjs tailwind css",
      live_link: "https://vuecountry05.netlify.app",
    },
  ];
  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
      </div>
      <br />
      <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative">
        <div className="lg:w-2/3 w-full">
          <Swiper
            slidesPerview={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className=" w-full p-4 bg-slate-700 rounded-xl h-[50vh] sm:h-[54vh] md:h-[50vh]">
                  <img src={project_info.img} alt="" className="rounded-lg" />
                  <h3 className="text-xl my-4">{project_info.name}</h3>
                  <div className="flex justify-between items-center">
                  <a
                      href={project_info.live_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Live Demo
                    </a>
                   
                    <a
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block "
                    >
                      Details below
                    </a>
                  </div>
                 <p className="mt-5">{project_info.github_Details}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="lg:block hidden">
          <img src={project_person} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Project;
