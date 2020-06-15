import React from "react";
import Gio from "../img/Gio.jpg";

function Meet() {
  return (
    <div className="meet">
      <div className="meet-inner">
        <div className="meet-inner--content">
          <h2 className="meet-inner--content__title">It's Gio</h2>
          <p className="meet-inner--content__tagline">
            My road has been bumpy but it has humbled me. Meeting new people and
            learning new tools and tricks are what keep me interested in working
            and growing.
          </p>
        </div>
        <div className="meet-inner--img-container">
          <img
            className="meet-inner--img-container__img"
            src={Gio}
            alt="Owner of this wonderful site."
          />
        </div>
      </div>
    </div>
  );
}

export default Meet;
