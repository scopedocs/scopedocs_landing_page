import "./style.css";

export const BlogCard = ({ imageUrl, title, description, meta, className = "" }) => {
  return (
    <div className={`blog-card ${className}`}>
      <div className="blog-card-image-wrapper">
        <img
          src={imageUrl}
          alt={title}
          className="blog-card-image"
          loading="lazy"
        />
      </div>
      <div className="blog-card-content">
        <h3 className="blog-card-title">{title}</h3>
        <p className="blog-card-description">{description}</p>
        <div className="blog-card-meta">{meta}</div>
      </div>
    </div>
  );
};
