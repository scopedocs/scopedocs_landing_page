import "./style.css";

export const Logo = ({
  showLogo = true,
  companyName = "Logo",
  state,
  className,
  fillClassName,
  fill = "/img/fill-1-1.svg",
  fillClassNameOverride,
  img = "/img/fill-3-1.svg",
  fill1 = "/img/fill-2-2.svg",
}) => {
  return (
    <div className={`logo ${state} ${className}`}>
      <div className="div-2">
        {state === "colored" && (
          <div className="group">
            <div className="text-wrapper-2">ScopeDocs</div>

            <div className="group-2">
              <img className="fill" alt="Fill" src="/img/fill-1-1.svg" />

              <img className="fill-2" alt="Fill" src="/img/fill-3-1.svg" />

              <img className="fill-3" alt="Fill" src="/img/fill-2-1.svg" />
            </div>
          </div>
        )}

        {state === "white" && (
          <>
            <div className="text-wrapper-2">ScopeDocs</div>

            <div className="group-2">
              <img className={`fill ${fillClassName}`} alt="Fill" src={fill} />

              <img
                className={`fill-2 ${fillClassNameOverride}`}
                alt="Fill"
                src={img}
              />

              <img className="fill-3" alt="Fill" src={fill1} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};
