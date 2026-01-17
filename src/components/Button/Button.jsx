import "./style.css";

export const Button = ({
  showIconPlay = true,
  text = "Button",
  size,
  type,
  className,
  textClassName,
  onClick,
  href,
}) => {
  const buttonContent = (
    <div className={`text-5 ${textClassName}`}>{text}</div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={`button ${type} ${size} ${className}`} onClick={onClick}>
        {buttonContent}
      </a>
    );
  }

  return (
    <button className={`button ${type} ${size} ${className}`} onClick={onClick}>
      {buttonContent}
    </button>
  );
};
