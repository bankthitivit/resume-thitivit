import BgHeaderImage from "../images/bg-header-image.png";
import IconsGithub from "../images/icons-github.png";
import ProfileImage from "../images/profile-images.jpg";

function Header() {
  return (
    <header
      className="flex flex-row items-start justify-end 
text-lg text-white bg-[#292C36]"
    >
      <div className="relative w-screen">
        <img src={BgHeaderImage} alt="display-coding" className="w-screen" />
        <div
          className="text-white absolute inset-0 flex flex-row 
    items-center justify-center text-6xl"
        >
          <div
            className="flex flex-col 
            items-center justify-center"
          >
            <img
              src={ProfileImage}
              alt="profile-image"
              className="rounded-full md:w-[20%] w-[13%] h-[20%] md:mb-10 mt-10"
            />
            <div className="md:text-[4rem] text-[2rem]">
              I'm Thitivit Pasomtrup
            </div>
            <div className="md:text-xl text-sm md:mt-14 mt-1">
              Interested about " Full-Stack Development "
            </div>
            <a href="https://github.com/bankthitivit">
              <img
                src={IconsGithub}
                alt="icons-github"
                className="w-15 md:mt-10 mt-1"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="App-navigator-header absolute top-3 text-[0.7rem] md:text-[1.1rem]">
        <a href="#about-me">
          <span className="md:m-5 m-2">About Me</span>
        </a>
        <a href="#experiences">
          <span className="md:m-5 m-2">Experiences</span>
        </a>
        <a href="#skills">
          <span className="md:m-5 m-2">Skills</span>
        </a>
        <a href="#educations">
          <span className="md:m-5 m-2">Educations</span>
        </a>
        <a href="#contact">
          <span className="md:m-5 md:mr-20 m-2 mr-8">Contact</span>
        </a>
      </div>
    </header>
  );
}
export { Header };
