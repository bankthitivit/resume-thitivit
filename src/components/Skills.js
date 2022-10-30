import IconsHtml from "../images/icons-html.png";
import IconsCss from "../images/icons-css.png";
import IconsJs from "../images/icons-js.png";
import IconsGit from "../images/icons-git.png";
import IconsReact from "../images/icons-react.png";
import IconsTailwind from "../images/icons-tailwind.png";
import IconsNodejs from "../images/icons-nodejs.png";
import IconsMongodb from "../images/icons-mongodb.png";
import IconsPostgresql from "../images/icons-postgresql.png";

function Skills() {
  return (
    <section
      id="skills"
      className="pr-40 md:pr-0 w-96 pb-32 pt-[50px] flex flex-row items-center justify-center bg-[#212121]"
    >
      <div className="ml-[60%]">
        <h1 className="w-[200px] text-2xl text-[#4C70EF] flex flex-row items-center justify-center">
          TECH STACKS
        </h1>

        <div className="flex flex-row items-center justify-center mt-4">
          <img
            src={IconsHtml}
            alt="icons-html"
            className="w-16 m-5 hover:scale-150 transition ease-in-out duration-500 delay-50"
          />
          <img
            src={IconsCss}
            alt="icons-css"
            className="w-16 m-5 hover:scale-150 transition ease-in-out duration-500 delay-50"
          />
        </div>
        <div className="flex flex-row items-center justify-center">
          <img
            src={IconsJs}
            alt="icons-js"
            className="w-16 m-5 hover:scale-150 transition ease-in-out duration-500 delay-50"
          />
          <img
            src={IconsNodejs}
            alt="icons-nodejs"
            className="w-16 m-5 hover:scale-150 transition ease-in-out duration-500 delay-50"
          />
        </div>
        <div className="flex flex-row items-center justify-center">
          <img
            src={IconsTailwind}
            alt="icons-tailwind"
            className="w-16 m-5 hover:scale-150 transition ease-in-out duration-500 delay-50"
          />
          <img
            src={IconsReact}
            alt="icons-react"
            className="w-16 m-5 hover:scale-150 transition ease-in-out duration-500 delay-50"
          />
        </div>
        <div className="flex flex-row items-center justify-center">
          <img
            src={IconsMongodb}
            alt="icons-mongodb"
            className="w-16 m-5 hover:scale-150 transition ease-in-out duration-500 delay-50"
          />
          <img
            src={IconsPostgresql}
            alt="icons-mongodb"
            className="w-16 m-5 hover:scale-150 transition ease-in-out duration-500 delay-50"
          />
        </div>
        <div className="flex flex-row items-center justify-center">
          <img
            src={IconsGit}
            alt="icons-git"
            className="w-16 m-5 hover:scale-150 transition ease-in-out duration-500 delay-50"
          />
        </div>
      </div>
    </section>
  );
}
export { Skills };
