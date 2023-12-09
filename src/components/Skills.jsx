import React, { useEffect, useRef } from "react";
const Skills = () => {
  const skills = [
    {
      skill:"Html5"
    },
    {
      skill:"Css3"
    },
    {skill:"javaScript"
    },
    {
      skill:"typeScript"
    },
    {
      skill:"unit Testing"
    },
    {
      skill:"Jest"
    },
    {skill:"testing Library"
    },
    {
      skill:"Express.js"
    },
    {
      skill:"socket.io"
    },
    {
      skill:"BDD"
    },
    {skill:"TDD"
    },
    {
      skill:"Webrtc"
    },
    {
      skill:"Peerjs"
    },
    {
      skill:"microFrontEnds"
    },
    {skill:"Sass"
    },
    {
      skill:"Jquery"
    },
    {
      skill:"MongoDB"
    },
    {
      skill:"Reactjs"
    },
    {skill:"RESTful Api"
    },
    {
      skill:"Material UI"
    },
    {
      skill:"Tailwind Css"
    },
    {
      skill:"Json"
    },
    {skill:"Framer motion"
    },
    {
      skill:"Postman"
    },
    {
      skill:"git"
    },
    {
      skill:"Github"
    },
    {skill:"CI/CD"
    },
    {
      skill:"Agile"
    },
    {
      skill:"Firebase"
    },
    
    {
      skill:"oop"
    },
    {
      skill:"Bootstrap5"
    },
    {
      skill:"Problem solving"
    },
    {skill:"Ajax"
    },
    {
      skill:"styled.components"
    },
    {
      skill:"firebase"
    },
    {
      skill:"Figma"
    }
   
  ];

  

    

  return (
    <section id="skills" className="py-10 bg-gray-800 relative" >
      <div className="mt-8 text-gray-100 text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Skills</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My knowledge</p>
        <div className="flex items-center justify-center mt-12 gap-10 flex-wrap">
         {skills.map((item,index)=>{
          return <div
              key={index}
          className=" flex justify-around border-0 items-center relative min-w-[1rem] max-w-[10rem]  "
        >
         <span  className="mr-2 ml-2">{item.skill}</span>
        </div>
}
         )}
            
        </div>
      </div>
    </section>
  );
};

export default Skills;
