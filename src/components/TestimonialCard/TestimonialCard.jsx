import { Figma } from "../../icons/Figma";
import "./style.css";

export const TestimonialCard = ({
  version,
  className,
  logo = "/img/logo.svg",
  text = "&#34;The AI-powered task prioritization and easy-to-use interface have helped me stay organized, meet deadlines, and reduce stress. I can’t imagine working without it!&#34;",
  avatarClassName,
  vectorClassName,
  vector = "/img/vector-12.svg",
  text1 = "Sarah Thompson",
  text2 = "COO",
  img = "/img/logo-1.svg",
  logoClassName,
}) => {
  return (
    <div className={`testimonial-card version-${version} ${className}`}>
      {["five", "one", "six", "three"].includes(version) && (
        <img
          className={`img ${logoClassName}`}
          alt="Logo"
          src={
            version === "three"
              ? img
              : version === "five"
                ? "/img/logo-2.svg"
                : version === "six"
                  ? "/img/logo-4.svg"
                  : logo
          }
        />
      )}

      {["eight", "four"].includes(version) && (
        <div className={`jira-core ${logoClassName}`}>
          {version === "eight" && (
            <div className="jira-core-2">
              <img
                className={`vector ${vectorClassName}`}
                alt="Vector"
                src={vector}
              />

              <img className="vector-2" alt="Vector" src="/img/vector-13.svg" />
            </div>
          )}

          {version === "four" && (
            <>
              <img className="vector-3" alt="Vector" src="/img/vector-14.svg" />

              <img className="vector-4" alt="Vector" src="/img/vector-15.svg" />

              <img className="vector-5" alt="Vector" src="/img/vector-16.svg" />

              <img className="vector-6" alt="Vector" src="/img/vector-17.svg" />

              <img className="vector-7" alt="Vector" src="/img/vector-18.svg" />

              <img className="vector-8" alt="Vector" src="/img/vector-19.svg" />

              <img className="vector-9" alt="Vector" src="/img/vector-20.svg" />

              <img
                className="vector-10"
                alt="Vector"
                src="/img/vector-21.svg"
              />

              <img
                className="vector-11"
                alt="Vector"
                src="/img/vector-22.svg"
              />

              <Figma className="figma-instance" />
            </>
          )}
        </div>
      )}

      <div className="text-2">
        {["eight", "one", "three"].includes(version) && (
          <p className="text-wrapper-19">{text}</p>
        )}

        {version === "five" && (
          <p className="text-wrapper-19">
            &#34;Taskcrea has truly simplified my workflow. It keeps everything
            organized in one place, which saves me time and helps me meet
            deadlines consistently.&#34;
          </p>
        )}

        {version === "six" && (
          <p className="text-wrapper-19">
            &#34;With Taskcrea, I’ve been able to streamline my daily tasks and
            easily integrate it with the tools I already use. It’s made my
            workday much more efficient and has helped me.&#34;
          </p>
        )}

        {version === "four" && (
          <p className="text-wrapper-19">
            &#34;Taskcrea is by far the best. The easy-to-use interface and
            smart features help me prioritize tasks effectively, saving me time
            and allowing me to focus.&#34;
          </p>
        )}
      </div>

      <div className="content-wrapper">
        <div className="content-2">
          <div className={`avatar ${avatarClassName}`} />

          <div className="content-3">
            <div className="text-3">
              {["eight", "one", "three"].includes(version) && <>{text1}</>}

              {version === "five" && <>Emily Kwik</>}

              {version === "six" && <>James Hertfield</>}

              {version === "four" && <>Daniel Timothy</>}
            </div>

            <div className="text-4">
              {["eight", "one", "three"].includes(version) && <>{text2}</>}

              {version === "five" && <>Operations Manager</>}

              {version === "six" && <>Founder</>}

              {version === "four" && <>Business Owner</>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
