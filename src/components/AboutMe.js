import ImageAboutMe from "../images/image-about-me.png";
function AboutMe() {
  return (
    <section
      id="about-me"
      className="pb-32 pt-32 flex md:flex-row flex-col items-start justify-center bg-[#212121]"
    >
      <div className="mr-16 ml-[12%]">
        <img src={ImageAboutMe} />
      </div>
      <div className="w-96 md:ml-1 ml-[16%]">
        <h1 className="text-2xl text-[#4C70EF] pt-5">ABOUT ME</h1>
        <h1 className="text-4xl text-white pt-5">I'm Thitivit Pasomtrup</h1>
        <p className="text-[#B0ADAD] pt-8">
          Electrical engineer with an interest in coding , Due to the
          opportunity to write C# C++ in the project. then have interest, So I
          studied about making a web application.
        </p>
        <p className="text-[#B0ADAD] pt-8">
          I seeking a position " Full-Stack Development " which will allow me to
          implement my knowledge and skills to the development of the
          organization.
        </p>
      </div>
    </section>
  );
}
export { AboutMe };
