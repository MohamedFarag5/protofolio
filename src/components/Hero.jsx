import React, { useEffect, useRef } from "react";
import hero from "../assets/images/hero.png";
import Typed from 'react-typed';
import { useInView } from "framer-motion";
import './Hero.css';

const Hero = () => {
  const social_media = [
    {name:"logo-instagram",
  link:"https://instagram.com/mohammed.elmorsy.507027?igshid=OGQ5ZDc2ODk2ZA=="},
    {name:"logo-facebook",
  link:"https://www.facebook.com/profile.php?id=100013564238639&mibextid=ZbWKwL"},
    {name:"logo-linkedin",
  link:"https://www.linkedin.com/in/mohamed-farag-elmorsy-5548aa193?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"}
  ];
  const myName= useRef('');
  
  const target=useRef('');
  const InView=useInView(target,{ once: true});
  let intervalCount;
  let slideInterval;
   let newText='';
  let chars=[];
let textSlide=`My Name
 is Mohamed Farag ..`;
 const init=()=>{
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
        newText.innerHTML=`<span class='text-letter'>${char}</span`;
         myName.current.append(newText);
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
    <section ref={target}
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center justify-center h-full">
        <img src={hero} alt="" className="md:w-11/12 h-full object-cover" />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl">
              Hello!
              <br />
            </span>
            <span ref={myName}>
            </span>
          </h1>
          <h4 className="md:text-2xl text-xl md:leading-normal leading-5 mt-4  font-bold text-gray-600">
          <Typed
                strings={[
                    'I am Front End Developer',
                    'I am JavaScript Developer',
                    'I am TypeScript Developer',
                    'I am ReactJs Developer']}
                    typeSpeed={40}
                    backSpeed={50}
                  loop  >
                </Typed>
            
          </h4>
          <button className="btn-primary mt-8">Contact Me</button>
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            {social_media?.map((icon,index) => (
              <a href={icon.link} target="_blank"
                key={index}
                className="text-gray-600 hover:text-white cursor-pointer "
              >
                <ion-icon name={icon.name}></ion-icon>
            </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
