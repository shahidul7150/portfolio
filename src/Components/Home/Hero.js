import React from 'react';
import myPic from '../../images/me1.png';
import doted from '../../images/doted.png';
const Hero = () => {
  return (
    <div
      
      class="hero min-h-screen  "
    >
      <div class="hero-content flex-col lg:flex-row-reverse  ">
        <img style={{ backgroundImage: `url(${doted})`,width: '100%',}} src={myPic} class="max-w-sm lg:ml-32 " />
        <div className=" mr-32">
          <h2 className="font-light">HEY THERE</h2>
          <h1 class="text-5xl font-bold">I'M SHAHIDUL ISLAM</h1>
          <p class="py-6 text-xl font-bold">JUNIOR FRONTEND DEVELOPER</p>
          <button class="btn bg-[#D95960] outline-none border-0">
            <a href="ResumeofSHAHIDULISLAM.pdf" download>
              {' '}
              RESUME
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
