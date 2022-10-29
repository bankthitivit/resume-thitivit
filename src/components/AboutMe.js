import ImageAboutMe from "../images/image-about-me.png";
function AboutMe() {
  return (
    <section
      id="about-me"
      className="pb-32 pt-32 flex md:flex-row flex-col items-start justify-center bg-[#212121]"
    >
      <div className="mr-14 ml-[8%]">
        <img src={ImageAboutMe} alt="image-aboutme" />
      </div>
      <div className="w-80 md:ml-0 ml-[16%]">
        <h1 className="text-2xl text-[#4C70EF] pt-5">ABOUT ME</h1>
        <h1 className="text-4xl text-white pt-5">
          Hi, I'm Bank <br />
          Nice to meet you.
        </h1>
        <p className="text-[#B0ADAD] pt-8">
          Programming was something I was interested in since I got the chance
          to develop C# and C++ on a few projects in the past. Then started
          researching and studying for application development. Always feel
          challenged and enjoy studying it.
        </p>
        <p className="text-[#B0ADAD] pt-3">
          I'm looking for a job as a "Web Developer" or "Mobile Developer" that
          will let me put my skills and knowledge to produce applications for
          the company.
        </p>
      </div>
    </section>
  );
}
export { AboutMe };
