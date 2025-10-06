import logo from "./assets/logo.png";
import instagramIcon from "./assets/instagram.png";
import emailIcon from "./assets/email.png";

const footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-column-1">
          <img src={logo} alt="logo" loading="lazy" />
          <p>
            Mason And Eva comics is a new indie publishing company based in VA,
            born from two writers and their love of all things comics. We strive
            to tell unique and original stories.
          </p>
        </div>
        <div className="footer-column-2">
          <div className="links">
            <h3>Links</h3>
            <a href="/faq">FAQ</a>

            <a href="/privacy">Privacy Policy</a>

            <a href="/terms">Terms of Use</a>
          </div>
          <div className="links">
            <h3>Other</h3>
            <span>
              <img src={instagramIcon} alt="" />
              <a href="https://www.instagram.com/maecomic/">Instagram</a>
            </span>
            <span>
              <img src={emailIcon} alt="" />
              <a href="mailto:maecomics@gmail.com">Email Us</a>
            </span>
          </div>
        </div>
      </div>
      <p>© 2025 MAE Comics. All rights reserved.</p>
    </footer>
  );
};

export default footer;
