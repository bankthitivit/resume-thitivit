import BgHeaderImage from "../images/bg-header-image.png";
import IconsGithub from "../images/icons-github.png";

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
          <div>
            <div>I'm Thitivit Pasomtrup</div>
            <br />
            <div
              className="flex flex-row 
    items-center justify-center text-xl "
            >
              Looking for " Full Stack Development "
            </div>
            <div
              className="flex flex-row 
    items-center justify-center mt-8"
            >
              <img src={IconsGithub} alt="icon-github" className="mr-8" />
            </div>
          </div>
        </div>
      </div>
      <div className="App-navigator-header absolute top-2">
        <span className="m-5">About</span>
        <span className="m-5">What I Do</span>
        <span className="m-5">Skills</span>
        <span className="m-5 mr-28">Contact</span>
      </div>
    </header>
  );
}
export { Header };
