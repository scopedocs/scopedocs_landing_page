import { useState, useEffect } from "react";
import { Logo } from "../Logo";
import "./style.css";

export const Footer = ({
  className,
  contentClassName,
  logoFill = "/img/fill-3.svg",
  logoImg = "/img/fill-2.svg",
  socialMediaClassName,
  socialMedia = "/img/social-media.svg",
}) => {
  const [email, setEmail] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const validateEmail = (email) => {
    return email.trim() !== "" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      setShowSuccessModal(true);
      setEmail("");
    }
  };

  const closeModal = () => {
    setShowSuccessModal(false);
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && showSuccessModal) {
        closeModal();
      }
    };

    if (showSuccessModal) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [showSuccessModal]);

  return (
    <>
      <div className={`footer ${className}`}>
        <div className="content-4">
          <div className={`content-5 ${contentClassName}`}>
            <div className="row">
              <Logo
                className="logo-instance"
                fill="/img/fill-1.svg"
                fill1={logoImg}
                fillClassName="design-component-instance-node"
                fillClassNameOverride="design-component-instance-node"
                img={logoFill}
                state="white"
              />
            </div>

            <div className="row-2">
              <div className="text-6">Company</div>

              <div className="text-7">Our Mission</div>

              <div className="text-7">Our Vision</div>

              <div className="text-7">Our Story</div>

              <div className="text-7">Meet Our Team</div>
            </div>

            <img
              className={`social-media ${socialMediaClassName}`}
              alt="Social media"
              src={socialMedia}
            />
          </div>

          <form className="form-email" onSubmit={handleSubmit}>
            <input
              type="email"
              className="footer-email-input-field"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <div className="rectangle" />

            <button type="submit" className="btn">
              <div className="text-wrapper-4">Subscribe</div>
            </button>
          </form>

          <p className="p">
            Subscribe for updates on workflow tips and ways to simplify your
            team's work.
          </p>

          <p className="p">
            Subscribe for updates on workflow tips and ways to simplify your
            team's work.
          </p>
        </div>

        <div className="content-6">
          <div className="text-8">© Copyright ScopeDocs 2026</div>

          <div className="content-groups">
            <div className="text-8">Privacy Policy</div>

            <div className="text-8">Legal</div>

            <div className="text-8">Term of Services</div>
          </div>
        </div>
      </div>

      {showSuccessModal && (
        <div className="footer-success-overlay" onClick={closeModal}>
          <div
            className="footer-success-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="footer-success-close"
              onClick={closeModal}
              aria-label="Close"
            >
              ×
            </button>
            <h3 className="footer-success-title">Thanks for subscribing!</h3>
            <p className="footer-success-message">
              You'll receive product updates, newsletters, and launch notes. No
              spam.
            </p>
            <button
              className="footer-success-button"
              onClick={closeModal}
            >
              Got it
            </button>
          </div>
        </div>
      )}
    </>
  );
};
