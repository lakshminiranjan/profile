import React from "react";
import ProfilePic from "../assets/profile.jpeg";

const ProfileHeader = ({ name, title }) => {
  return (
    <header
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img src={ProfilePic} alt="" style={{ marginTop: "20px" }} />
      <h2 style={{ marginTop: "20px" }}>{name}</h2>
    </header>
  );
};

export default ProfileHeader;
