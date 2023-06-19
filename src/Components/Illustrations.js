import React from "react";

const Illustrations = () => {
  return (
    <div className="illu-container">
      <div className="illu-head">
        <h4>Illustrations</h4>
      </div>
      <img
        src="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_posting_photo.svg"
        alt=""
      />
      <p>
        Add some quality, svg illustrations to your project courtesy of unDraw,
        a constantly updated collection of beautiful svg images that you can use
        completely free and without attribution!
      </p>
      <a style={{ padding: "15px" }} href="https://undraw.co/" target="_blank" rel="noreferrer">
        Browse Illustrations on unDraw➡
      </a>
    </div>
  );
};

export default Illustrations;
