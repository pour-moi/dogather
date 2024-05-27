import "./footer.css";
import Hand from "../assets/Hand.svg";

function Footer() {
  return (
    <>
      <hr />
      <div className="footer-container ">
        <div className="hand-title">
          <img src={Hand} />
          <p>dogather</p>
        </div>
        <div className="services">
          <ul type="none">
            <li className="product header">Product</li>
            <li>Docs</li>
            <li>What's new</li>
          </ul>
          <ul type="none">
            <li className="Build header">Build</li>
            <li>Templates</li>
            <li>API docs</li>
            <li>Guids & tutorials</li>
            <li>Become and affiliate</li>
          </ul>
          <ul type="none">
            <li className="get_started header">Get started</li>
            <li>Sign up</li>
            <li>Log in</li>
          </ul>
          <ul type="none">
            <li className="resources header">Resources</li>
            <li>About us</li>
            <li>Email us</li>
            <li>Terms & privacy</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Footer;
