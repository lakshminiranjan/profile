import React from "react";

const NavBar = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-dark bg-dark navbar-expand-sm d-flex justify-content-center align-items-center">
        <i
          className="fa fa-user text-warning mt-3 "
          style={{ marginRight: "15px" }}
        />
        <span className="text-warning mt-3">Profile Page</span>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;
