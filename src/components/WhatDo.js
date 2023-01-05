import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function WhatDo() {
  return (
    <section
      id="experiences"
      className="pb-32 pt-16 flex flex-col items-center justify-center bg-[#212121]"
    >
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl text-[#4C70EF] pt-5">WHAT I DO</h1>
        <h1 className="text-4xl text-white pt-5 pb-12">Experiences</h1>
      </div>
      <div className="flex md:flex-row flex-col items-start justify-start">
        <Carousel
          infiniteLoop
          axis="horizontal"
          centerMode
          centerSlidePercentage="50"
          width={1100}
          showIndicators={false}
          showStatus={false}
          swipeable
          emulateTouch
          interval={1500}
          transitionTime={700}
          autoPlay
          showArrows={true}
          showThumbs={true}
        >
          <div className="bg-[#292C36] md:mr-0 mr-3 md:ml-10 ml-0 pl-20 rounded-xl  pb-10 h-[550px] flex flex-col items-start justify-start">
            <h1 className="text-[#b0c1ff] text-3xl mt-10">
              Full-Stack Developer
            </h1>
            <h1 className="text-[#b0c1ff] text-2xl pt-4 ">TechUp Bootcamp</h1>
            <h1 className="text-[#B0ADAD] text-1xl pt-4 ">4 Months</h1>
            <div className="flex flex-col items-start justify-start">
              <div className="mt-0 flex flex-col items-start justify-center">
                <p className=" text-[#B0ADAD] mt-2">
                  Take course for learning full-time
                </p>
              </div>
              <div className="mt-6 flex flex-col items-start justify-center">
                <h2 className="text-white text-xl">Mini Project</h2>
                <p className=" text-[#B0ADAD] mt-0">• Resume website</p>
              </div>
              <div className="mt-6 flex flex-col items-start justify-center">
                <h2 className="text-white text-xl">Final Project</h2>
                <p className=" text-[#B0ADAD] mt-0">
                  • Platform Online Learning
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#292C36] md:mr-0 mr-3 md:ml-10 ml-0 pl-20 rounded-xl  pb-10 h-[550px] flex flex-col items-start justify-start">
            <h1 className="text-[#b0c1ff] text-3xl mt-10">Software Engineer</h1>
            <h1 className="text-[#b0c1ff] text-2xl pt-4 ">
              Trinergy Instrument
            </h1>
            <h1 className="text-[#B0ADAD] text-1xl pt-4 ">1 Year</h1>
            <div className="flex flex-col items-start justify-start">
              <div className="mt-6 ml-0 flex flex-col items-start justify-center">
                <h2 className="text-white text-xl">
                  Support sales engineer in technical field
                </h2>
                <p className=" text-[#B0ADAD] mt-0 ">• Specifications</p>
                <p className="text-[#B0ADAD] ">• Usability</p>
              </div>
              <div className="mt-6 ml-0 flex flex-col items-start justify-center">
                <h2 className="text-white text-xl">Develop software LabVIEW</h2>
                <p className=" text-[#B0ADAD] mt-0">
                  • Data logger program for research data
                </p>
                <p className="text-[#B0ADAD]">
                  • Automation calibrate instrument program for reduce time
                </p>
                <p className="text-[#B0ADAD]">• Control oscilloscope program</p>
              </div>
            </div>
          </div>
          <div className="bg-[#292C36] md:mr-0 mr-3 md:ml-10 ml-0 pl-16 rounded-xl  pb-10 h-[550px] flex flex-col items-start justify-start">
            <h1 className="text-[#b0c1ff] text-3xl mt-10">
              Electrical Engineer
            </h1>
            <h1 className="text-[#b0c1ff] text-2xl pt-4 ">I.M.E Revolution</h1>
            <h1 className="text-[#B0ADAD] text-1xl pt-4 ">1 Year</h1>
            <div className="ml-0 w-[500px]">
              <div className="mt-6 ml-0 flex flex-col items-start justify-center">
                <h2 className="text-white text-xl">Robot and vision systems</h2>
                <p className="text-[#B0ADAD]">
                  • Develop robot programming with vision system
                </p>
              </div>
              <div className="mt-6 ml-0 flex flex-col items-start justify-center">
                <h2 className="text-white text-xl">
                  Program PLC,HMI ( Mitsubishi )
                </h2>
                <p className="text-[#B0ADAD]">
                  • Develop count pills machine for increase production
                </p>
                <p className="text-[#B0ADAD]">
                  • Built take rubber handle machine for increase production
                </p>
                <p className="text-[#B0ADAD]">
                  • Built Packing pills machine for increase production and
                  <br />
                  reduce staff
                </p>
              </div>
              <div className="mt-6 ml-0 flex flex-col items-start justify-center">
                <h2 className="text-white text-xl">Program AGV (Arduino)</h2>
                <p className="text-[#B0ADAD]">
                  • Robot track lines in industry for reduce staff to transport
                  <br />
                  the product
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#292C36] md:mr-0 mr-3 md:ml-10 ml-0 rounded-xl pb-10 pl-20 h-[550px] flex flex-col items-start justify-start">
            <h1 className="text-[#b0c1ff] text-3xl mt-10">
              Automation Engineer
            </h1>
            <h1 className="text-[#b0c1ff] text-2xl pt-4 ">
              Thai Optical Group
            </h1>
            <h1 className="text-[#B0ADAD] text-1xl pt-4 ">6 Months</h1>

            <div>
              <div className="mt-6 ml-0 flex flex-col items-start justify-center">
                <h2 className="text-white text-xl">Electrical System Design</h2>
              </div>
              <div className="mt-6 ml-0 flex flex-col items-start justify-center">
                <h2 className="text-white text-xl">Maintenance Machine</h2>
              </div>
              <div className="mt-6 ml-0 flex flex-col items-start justify-center">
                <h2 className="text-white text-xl">
                  Program PLC, HMI, Robo IAI
                </h2>
                <p className="text-[#B0ADAD]">
                  • Develop automatic brushing lens machine
                </p>
                <p className="text-[#B0ADAD]">
                  • Develop automatic lens filling machine
                </p>
                <p className="text-[#B0ADAD]">
                  • Develop detect lens color machine ( C# )
                </p>
                <p className="text-[#B0ADAD]">• Programming AGV ( C++ )</p>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
}
export { WhatDo };
