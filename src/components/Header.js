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
              className="rounded-full w-44 h-54 mb-10 "
            />
            <div>I'm Thitivit Pasomtrup</div>
            <br />
            <div
              className="flex flex-row 
            items-center justify-center text-xl "
            >
              Interested about " Full-Stack Development "
            </div>
            <a href="https://github.com/bankthitivit">
              <img
                src={IconsGithub}
                alt="icons-github"
                className="w-15 mt-10"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="App-navigator-header absolute top-2">
        <span className="m-5">About Me</span>
        <span className="m-5">Experiences</span>
        <span className="m-5">Skills</span>
        <span className="m-5">Educations</span>
        <span className="m-5 mr-28">Contact</span>
      </div>
    </header>
  );
}
export { Header };
