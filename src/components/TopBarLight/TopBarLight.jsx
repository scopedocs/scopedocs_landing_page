import "./style.css";

export const TopBarLight = ({ style, className, iconClassName }) => {
  return (
    <div className={`top-bar-light ${style} ${className}`}>
      <div className={`icon ${iconClassName}`}>
        <div className="ellipse" />

        <div className="ellipse-2" />

        <div className="ellipse-3" />
      </div>
    </div>
  );
};
