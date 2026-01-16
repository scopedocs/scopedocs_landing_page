import { Button } from "../Button";
import { Logo } from "../Logo";
import "./style.css";

export const Navbar = ({
  className,
  logoFill = "/img/fill-3-1.svg",
  logoImg = "/img/fill-2-3.svg",
  logoFill1 = "/img/fill-1-1.svg",
  hasMenu = true,
  menuClassName,
  buttonSizeNormalTypeClassName,
  buttonText = "Try Beta Version",
}) => {
  return (
    <div className={`navbar ${className}`}>
      <div className="logo-wrapper">
        <Logo
          className="logo-2"
          fill={logoFill1}
          fill1={logoImg}
          img={logoFill}
          state="white"
        />
      </div>

      <div className="nav-link">
        <div className="menu">
          <div className="text-9">About</div>
        </div>

        <div className="menu" onClick={() => {
          const element = document.getElementById('smart-solutions');
          if (element) {
            const offset = 120;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }}>
          <div className="text-9">Features</div>
        </div>

        {hasMenu && (
          <div className="menu">
            <div className="text-9">Blog</div>
          </div>
        )}

        <div className={`div-wrapper ${menuClassName}`}>
          <div className="text-9">Pricing</div>
        </div>

        <a href="mailto:hello@scopedocs.ai?subject=ScopeDocs%20Inquiry" className="menu">
          <div className="text-9">Contact Us</div>
        </a>
      </div>

      <Button
        className={buttonSizeNormalTypeClassName}
        size="normal"
        text={buttonText}
        textClassName="button-instance"
        type="secondary"
      />
    </div>
  );
};
