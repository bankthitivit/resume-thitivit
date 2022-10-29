import BgHeaderImage from "../images/bg-header-image.png";
import ProfileImage from "../images/profile-images.jpg";
import Typed from "react-typed";
function Header() {
  return (
    <header
      className="flex flex-row items-start justify-end 
text-lg text-white bg-[#292C36]"
    >
      <div className="relative">
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
              className="rounded-full md:w-[20%] w-[13%] h-[20%] md:mb-10"
            />
            <div className="md:text-[4rem] text-[2rem]">Thitivit Pasomtrup</div>
            <div className="md:text-xl text-sm md:mt-10 mt-1">
              I'm&nbsp;
              <Typed
                className="text-2xl"
                strings={[`Web Developer`, "Mobile Developer"]}
                typeSpeed={80}
                backSpeed={30}
                loop
              />
            </div>
            <div className="flex flex-row items-center justify-center md:mt-[10%] h-[50px]">
              <a href="https://www.linkedin.com/in/thitivit/">
                <svg
                  className="mr-4 md:w-[50px] md:h-[50px] w-[30px] h-[30px] hover:scale-150 transition ease-in-out duration-500 delay-50"
                  fill="rgb(255, 255, 255)"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                  width="100px"
                  height="100px"
                >
                  <path d="M25,2C12.318,2,2,12.317,2,25s10.318,23,23,23s23-10.317,23-23S37.682,2,25,2z M18,35h-4V20h4V35z M16,17c-1.105,0-2-0.895-2-2c0-1.105,0.895-2,2-2s2,0.895,2,2C18,16.105,17.105,17,16,17z M37,35h-4v-5v-2.5c0-1.925-1.575-3.5-3.5-3.5S26,25.575,26,27.5V35h-4V20h4v1.816C27.168,20.694,28.752,20,30.5,20c3.59,0,6.5,2.91,6.5,6.5V35z" />
                </svg>
              </a>
              <a href="https://www.facebook.com/thitivit.pasomtrup/">
                <svg
                  className="mr-4 md:w-[50px] md:h-[50px] w-[30px] h-[30px] hover:scale-150 transition ease-in-out duration-500 delay-50"
                  fill="rgb(255, 255, 255)"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 30 30"
                >
                  <path d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z" />
                </svg>
              </a>
              <a href="https://github.com/bankthitivit">
                <svg
                  className=" md:w-[50px] md:h-[50px] w-[30px] h-[30px] hover:scale-150 transition ease-in-out duration-500 delay-50"
                  fill="rgb(255, 255, 255)"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 30 30"
                >
                  <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z" />
                </svg>
              </a>
            </div>
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
