import "./style.css";

export const ToolCard = ({ logo, toolName, category, className = "" }) => {
  return (
    <div className={`tool-card ${className}`}>
      <div className="tool-card-logo">{logo}</div>
      <div className="tool-card-content">
        <div className="tool-card-name">{toolName}</div>
        <div className="tool-card-category">{category}</div>
      </div>
    </div>
  );
};
