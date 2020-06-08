import React from "react";
import Gio from "../img/Gio.jpg";

function Meet() {
  return (
    <div className="meet">
      <div className="meet-inner">
        <div className="meet-inner--content">
          <h2 className="meet-inner--content__title">
            I'm Gio and I like Muffins
          </h2>
          <p className="meet-inner--content__tagline">
            Ok muffins aren't that great. With their weird shape. You can't even
            eat it in one bite. It's so odd. Hot dogs on the other hand are also
            not that great.
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
