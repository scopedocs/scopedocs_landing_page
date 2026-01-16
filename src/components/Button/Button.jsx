import "./style.css";

export const Button = ({
  showIconPlay = true,
  text = "Button",
  size,
  type,
  className,
  textClassName,
}) => {
  return (
    <button className={`button ${type} ${size} ${className}`}>
      <div className={`text-5 ${textClassName}`}>{text}</div>
    </button>
  );
};
