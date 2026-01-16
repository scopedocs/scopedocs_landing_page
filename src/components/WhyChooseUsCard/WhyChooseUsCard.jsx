import { Caretright4 } from "../../icons/Caretright4";
import { CatppuccinFolderDocs1 } from "../../icons/CatppuccinFolderDocs1";
import "./style.css";

export const WhyChooseUsCard = ({
  version,
  className,
  iconContainerClassName,
  icon = (
    <CatppuccinFolderDocs1
      className="catppuccin-folder"
      color="white"
      stroke="white"
    />
  ),
  contentClassName,
  contentClassNameOverride,
  text = "User-Friendly Interface",
  text1 = "Enjoy an intuitive and clean design that makes managing tasks simple, even for first-time users.",
  text2 = "Customizable Workflows",
  text3 = "Adapt workflows to match your specific processes, ensuring maximum efficiency and flexibility.",
  text4 = "Real-Time Collaboration",
  text5 = "Collaborate effortlessly with your team, share updates, and track progress together from anywhere.",
  caretright4Color = "#FAFAFA",
  text6 = "Detailed Analytics",
  text7 = "Gain valuable insights with in-depth reports and analytics to track your progress and optimize productivity.",
  textClassName,
}) => {
  return (
    <div className={`why-choose-us-card ${version} ${className}`}>
      <div className={`icon-container ${iconContainerClassName}`}>{icon}</div>

      <div className={`content ${contentClassName}`}>
        <div className={`content ${contentClassNameOverride}`}>
          <div className="text">
            {version === "one" && <>{text}</>}

            {version === "two" && <>{text2}</>}

            {version === "three" && <>{text4}</>}

            {version === "four" && <>{text6}</>}
          </div>

          <div className="div">
            {version === "one" && <p className="text-wrapper-19">{text1}</p>}

            {version === "two" && <p className="text-wrapper-19">{text3}</p>}

            {version === "three" && <p className="text-wrapper-19">{text5}</p>}

            {version === "four" && <p className="text-wrapper-19">{text7}</p>}
          </div>
        </div>

        <div className="button-2">
          <div className={`text-wrapper ${textClassName}`}>Learn More</div>

          <Caretright4 className="caret-right" color={caretright4Color} />
        </div>
      </div>
    </div>
  );
};
