import React from "react";

export default ({ name, email, id }) => {
  return (
    <div className="bg-light-green dib br4 pa3 ma2 grow bw2 shadow-5">
      <img src={`https://robohash.org/${id}?200x200`} alt="icon" />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};
