import "./style.css";

export const NewTestimonialCard = ({
  quote,
  name,
  title,
  company,
  logo,
  avatar,
}) => {
  return (
    <div className="new-testimonial-card">
      {logo && (
        <div className="new-testimonial-card-logo">
          {logo}
        </div>
      )}
      {!logo && (
        <div className="new-testimonial-card-logo-placeholder">
          <span>Logo</span>
        </div>
      )}
      
      <div className="new-testimonial-card-quote">
        &ldquo;{quote}&rdquo;
      </div>
      
      <div className="new-testimonial-card-footer">
        {avatar && (
          <div className="new-testimonial-card-avatar">
            <img
              src={avatar}
              alt={name}
              className="new-testimonial-card-avatar-img"
            />
          </div>
        )}
        <div className="new-testimonial-card-info">
          <div className="new-testimonial-card-name">{name}</div>
          <div className="new-testimonial-card-title">
            {title}
            {company && <span className="new-testimonial-card-company">, {company}</span>}
          </div>
        </div>
      </div>
    </div>
  );
};
