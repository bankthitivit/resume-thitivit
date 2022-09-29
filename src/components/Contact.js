import IconsLine from "../images/icons-line.png";
import IconsTel from "../images/icons-tel.png";

function Contact() {
  return (
    <section
      id="contact"
      className="pb-32 pt-16 flex flex-col items-center justify-center bg-[#212121]"
    >
      <div className="flex flex-row items-start justify-start">
        <div className="bg-[#292C36] w-[80vw] rounded-full pt-10 pb-8 mt-8 flex flex-col items-center justify-center">
          <h1 className="text-white text-3xl bg-[#86787873] rounded-xl p-5 md:pl-28 pl-10 md:pr-28 pr-10">
            Contact me
          </h1>

          <div className=" mt-1 flex flex-row items-start justify-center">
            <div className=" mt-6 w-50 flex flex-row items-start justify-center">
              <img src={IconsLine} alt="icons-line" className="w-12" />
              <span className="text-white mt-2 text-xl"> bankankk</span>
            </div>

            <div className=" mt-6 w-50 ml-10 flex flex-row items-start justify-center">
              <img src={IconsTel} alt="icons-line" className="w-8 mt-2 mr-3" />
              <span className="text-white mt-2 text-xl"> 062-565-1961</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export { Contact };
