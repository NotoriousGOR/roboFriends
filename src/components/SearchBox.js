import React from "react";

export default ({ searchfield, searchChange }) => {
  return (
    <div>
      <input
        type="search"
        placeholder="Search Robots"
        className="pa3 ba b--green bg-lightest-blue"
        onChange={searchChange}
      />
    </div>
  );
};
