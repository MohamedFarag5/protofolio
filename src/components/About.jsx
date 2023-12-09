import React, { useEffect, useRef } from "react";
import aboutImg from "../assets/images/about.png";
import Typed from 'react-typed';
import './About.css';
import { useInView } from "framer-motion";
const About = () => {
  const info = [
    { text: "Completed Projects", count: "07" },
    { text: "Companies Work", count: "01" },
  ];
  const myText= useRef('');
  
  const target=useRef('');
  const InView=useInView(target,{ once: true});
  let intervalCount;
  let slideInterval;
   let newText='';
  let chars=[];
let textSlide=`I am mohamed farag. I am 29 years old. I graduated from mansoura university.
My faculty is computers and information technology.I live in mansoura city. 
I am web developer and i can make perfect projects.`;
 const init=()=>{
    // const textSlide=myText.current.innerText;
    // myText.current.innerText='';
   chars=textSlide.trim().split('');
    intervalCount=0;
    slideInterval=setInterval(()=>{
       if(intervalCount >= chars.length-1)
      {
         clearInterval(slideInterval);
      }
      else{
        const char=chars[intervalCount]==' '?'&nbsp':chars[intervalCount];
        newText=document.createElement('span');
        newText.innerHTML=`<span class='text-slide-letter'>${char}</span`;
         myText.current.append(newText);
         intervalCount++;
      }
      },100)

  }
  useEffect(() => {
    if(InView)
    {
    init();
    }
  
    
  }, [InView])
  
  return (
    <section id="about" className="py-10 text-white" ref={target}>
      <div className="text-center mt-8 ">
        <h3 className="text-4xl font-semibold">
          About <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg pb-5">My introduction</p>
        <div className="flex lg:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <p className="text-justify leading-7 w-11/12 mx-auto text-about" ref={myText}>
              </p>
              
              <div className="flex mt-10 items-center gap-7">
                {info.map((content) => (
                  <div key={content.text} >
                    <h3 className="md:text-4xl text-2xl font-semibold text-white">
                      {content.count}
                      <span className="text-cyan-600">+</span>{" "}
                    </h3>
                    <span className="md:text-base text-xs">{content.text}</span>
                  </div>
                ))}
              </div>
              <br />
              <br />
              <a href="" download>
                <button className="btn-primary">Download CV</button>
              </a>
            </div>
          </div>
          <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
            <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg ">
              <img
                src={aboutImg}
                alt=""
                className="w-full object-cover bg-cyan-600 rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
