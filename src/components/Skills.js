import IconsHtml from "../images/icons-html.png";
import IconsCss from "../images/icons-css.png";
import IconsJs from "../images/icons-js.png";
import IconsGit from "../images/icons-git.png";
import IconsReact from "../images/icons-react.png";
import IconsTailwind from "../images/icons-tailwind.png";

function Skills() {
  return (
    <section
      id="skills"
      className="w-96 pb-32 pt-10 flex flex-row items-center justify-center bg-[#212121]"
    >
      <div className="ml-[60%]">
        <h1 className="text-2xl text-[#4C70EF] pt-5 flex flex-row items-center justify-center">
          SKILLS
        </h1>

        <div className="flex flex-row items-center justify-center mt-12">
          <img src={IconsHtml} alt="icons-html" className="w-16 m-5" />
          <img src={IconsCss} alt="icons-css" className="w-16 m-5" />
        </div>
        <div className="flex flex-row items-center justify-center">
          <img src={IconsJs} alt="icons-js" className="w-16 m-5" />
          <img src={IconsReact} alt="icons-react" className="w-16 m-5" />
        </div>
        <div className="flex flex-row items-center justify-center">
          <img src={IconsTailwind} alt="icons-tailwind" className="w-16 m-5" />
          <img src={IconsGit} alt="icons-git" className="w-16 m-5" />
        </div>
      </div>
    </section>
  );
}
export { Skills };
