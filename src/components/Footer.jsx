import "./footer.css";
import Hand from "../assets/Hand.svg";

function Footer() {
  return (
    <>
      <div className="footer-container ">
        <div className="hand-title">
          <img src={Hand} />
          <p>dogather</p>
        </div>
        <div className="services">
          <ul type="none">
            <li className="product header">Product</li>
            <li>
              <a href="#">Docs</a>
            </li>
            <li>
              <a href="#">What&apos;s new</a>
            </li>
          </ul>
          <ul type="none">
            <li className="Build header">Build</li>
            <li>
              <a href="#">Templates</a>
            </li>
            <li>
              <a href="#">API docs</a>
            </li>
            <li>
              <a href="#">Guids & tutorials</a>
            </li>
            <li>
              <a href="#">Become and affiliate</a>
            </li>
          </ul>
          <ul type="none">
            <li className="get_started header">Get started</li>
            <li>
              <a href="#">Sign up</a>
            </li>
            <li>
              <a href="#">Log in</a>
            </li>
          </ul>
          <ul type="none">
            <li className="resources header">Resources</li>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Email us</a>
            </li>
            <li>
              <a href="#">Terms & privacy</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Footer;
