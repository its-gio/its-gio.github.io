import React from "react";
import {
  AiFillMail,
  AiFillGithub,
  AiFillLinkedin,
  AiFillCodepenCircle,
} from "react-icons/ai";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-inner">
        <div className="footer-inner--content">
          <h2 className="footer-inner--content__title">Keep in touch</h2>
          <p className="footer-inner--content__tagline">
            If there are any questions or ideas for a project, feel free to
            reach out!
          </p>
        </div>

        <div className="footer-inner--connect">
          <div className="footer-inner--connect__links">
            <a
              target="_blank"
              href="mailto: media@its-g.io"
              className="link"
              rel="noopener noreferrer"
            >
              <AiFillMail />
              Media@its-g.io
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/giovani-aguirre/"
              className="link"
              rel="noopener noreferrer"
            >
              <AiFillLinkedin />
              Linkedin
            </a>
            <a
              target="_blank"
              href="https://github.com/its-gio"
              className="link"
              rel="noopener noreferrer"
            >
              <AiFillGithub />
              Github
            </a>
            <a
              target="_blank"
              href="https://codepen.io/its-gio/"
              className="link"
              rel="noopener noreferrer"
            >
              <AiFillCodepenCircle />
              Codepen
            </a>
          </div>

          <div className="footer-inner--connect__form"></div>
        </div>
      </div>

      <div className="footer-reserved">
        <p>&copy; All rights reserved.</p>
      </div>
    </div>
  );
}
