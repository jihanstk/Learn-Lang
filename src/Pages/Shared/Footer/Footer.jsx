import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-slate-700 text-white">
      <div>
        <NavLink to="/" className="btn btn-ghost text-xl uppercase font-mono">
          Learn
          <img
            className="w-8 h-8 p-0"
            src="https://www.reshot.com/preview-assets/icons/2RKQ6GCBVH/language-2RKQ6GCBVH.svg"
            alt=""
          />
          Lang
        </NavLink>
        <p>
          That is Language course
          <br />
          Providing reliable teach since 2023
        </p>
      </div>
      <div>
        <span className="footer-title">Contact Info</span>
        <p className="link link-hover">Phone: +88011222222</p>
        <p className="link link-hover">Email: jihanstk@gmail.com</p>
        <p className="link link-hover">Address: Satkhira,Bangladesh</p>
      </div>

      <div>
        <span className="footer-title">Social</span>
        <a href="https://www.faacebook.com" className="link link-hover">
          Facebook
        </a>
        <a href="https://www.instagram.com" className="link link-hover">
          Instagram
        </a>
        <a href="https://www.twitter.com" className="link link-hover">
          Twitter
        </a>
      </div>
    </footer>
  );
};

export default Footer;
