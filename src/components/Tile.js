import React from "react";
import "svg-inline-loader";

export default props => {
  const { link, title, image, alt, description } = props;

  return (
    <div>
      <div className="fl w-50 w-25-m w-20-l pa2 h5">
        <a href={link} className="db link dim tc">
          <img
            src={image}
            alt={alt}
            className="w-100 db black-10 h4 bg-white br4"
          />
          <dl className="mt2 f6 lh-copy">
            <dt className="clip">Title</dt>
            <dd className="ml0 black truncate w-100 underline">{title}</dd>
            <dt className="clip">Artist</dt>
            <dd className="ml0 white  w-100">{description}</dd>
          </dl>
        </a>
      </div>
    </div>
  );
};
