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
          emulateTouch
          centerMode
          showStatus={false}
          width={700}
          swipeable
          infiniteLoop
          autoPlay
          interval={2000}
        >
          <div className=" bg-[#292C36] rounded-xl sm:mr-0 mr-3 sm:ml-10 ml-0 h-[550px] flex flex-col items-center justify-center">
            <h1 className="text-white text-3xl ">Studying</h1>
            <div>
              <div className=" mt-6 w-96 ml-9 flex flex-col items-start justify-center">
                <h2 className="text-white text-2xl">2019</h2>
                <p className="text-[#B0ADAD] mt-2">
                  • Project Smart Home ( C++ )
                </p>
              </div>
              <div className="mt-6 ml-9 flex flex-col items-start justify-center">
                <h2 className="text-white text-2xl">2018</h2>
                <p className=" text-[#B0ADAD] mt-2">
                  • Joined the Delta Industrial Automation Training Program 2018
                </p>
                <p className="text-[#B0ADAD] mt-2">
                  • Attended the seminar of many companies
                </p>
              </div>
              <div className="mt-6 ml-9 flex flex-col items-start justify-center">
                <h2 className="text-white text-2xl ">2016</h2>
                <p className="text-[#B0ADAD] mt-2">
                  • Worked at Y.NET Co.,Ltd in the field of electrical
                </p>
              </div>
              <div className="pt-6 ml-9 flex flex-col items-start justify-center">
                <h2 className="text-white text-2xl">2015</h2>
                <p className="text-[#B0ADAD] mt-2">
                  • Worked at McDonald’s in general staff
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#292C36] md:mr-0 mr-3 md:ml-10 ml-0 rounded-xl pt-10 pb-10 h-[550px] flex flex-col items-center justify-start">
            <h1 className="text-white text-3xl ">Software Engineer</h1>
            <h1 className="text-white text-2xl pt-4 ">Trinergy Instrument</h1>
            <h1 className="text-white text-1xl pt-4 ">1 Year</h1>
            <div className="flex flex-col items-start justify-start">
              <div className="mt-6 ml-6 flex flex-col items-start justify-center">
                <h2 className="text-white text-xl">
                  Provide technical advice to customers and sales engineer
                  (National Instrument products)
                </h2>
                <p className=" text-[#B0ADAD] mt-2 ml-9">• Specifications</p>
                <p className="text-[#B0ADAD] ml-9">• Usability</p>
              </div>
              <div className="mt-6 ml-16 flex flex-col items-start justify-center">
                <h2 className="text-white text-xl">
                  Develop software LabVIEW automation system
                </h2>
                <p className=" text-[#B0ADAD] mt-2">• Data logger program</p>
                <p className="text-[#B0ADAD]">
                  • Automation calibrate instrument program
                </p>
                <p className="text-[#B0ADAD]">• Control oscilloscope program</p>
              </div>
            </div>
          </div>
          <div className="bg-[#292C36] md:mr-0 mr-3 md:ml-10 ml-0 rounded-xl pt-10 pb-10 h-[550px] flex flex-col items-center justify-center">
            <h1 className="text-white text-3xl ">Electrical Engineer</h1>
            <h1 className="text-white text-2xl pt-4 ">I.M.E Revolution</h1>
            <h1 className="text-white text-1xl pt-4 ">1 Year</h1>
            <div>
              <div className="mt-6 ml-0 flex flex-col items-start justify-center">
                <h2 className="text-white text-xl">Robot and vision systems</h2>
                <p className="text-[#B0ADAD]">• Control oscilloscope program</p>
              </div>
              <div className="mt-6 ml-0 flex flex-col items-start justify-center">
                <h2 className="text-white text-xl">
                  Program PLC,HMI ( Mitsubishi )
                </h2>
                <p className="text-[#B0ADAD]">• Count pills machine</p>
                <p className="text-[#B0ADAD]">• Take rubber handle machine</p>
                <p className="text-[#B0ADAD]">• Packing pills machine</p>
              </div>
              <div className="mt-6 ml-0 flex flex-col items-start justify-center">
                <h2 className="text-white text-xl">Program AGV (Arduino)</h2>
                <p className="text-[#B0ADAD]">
                  • Robot track lines in industry factory ( C++ )
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#292C36] md:mr-0 mr-3 md:ml-10 ml-0 rounded-xl pt-10 pb-10 h-[550px] flex flex-col items-center justify-center">
            <h1 className="text-white text-3xl ">Automation Engineer</h1>
            <h1 className="text-white text-2xl pt-4 ">Thai Optical Group</h1>
            <h1 className="text-white text-1xl pt-4 ">6 Months</h1>
            <div>
              <div className="mt-6 ml-0 flex flex-col items-start justify-center">
                <h2 className="text-white text-xl">
                  Design of electrical machinery
                </h2>
              </div>
              <div className="mt-6 ml-0 flex flex-col items-start justify-center">
                <h2 className="text-white text-xl">
                  Program PLC ( Delta ),HMI,Robo IAI
                </h2>
                <p className="text-[#B0ADAD]">
                  • Automatic brushing lens machine
                </p>
                <p className="text-[#B0ADAD]">
                  • Automatic lens filling machine
                </p>
                <p className="text-[#B0ADAD]">
                  • Develop detects lens color machine ( C# )
                </p>
              </div>
              <div className="mt-6 ml-0 flex flex-col items-start justify-center">
                <h2 className="text-white text-xl">AGV</h2>
                <p className="text-[#B0ADAD]">• Automatic charging station</p>
                <p className="text-[#B0ADAD]">• Maintenance• Maintenance</p>
                <p className="text-[#B0ADAD]">• Re-built ( C++ )</p>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
}
export { WhatDo };
