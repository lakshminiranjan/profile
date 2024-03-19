// App.js
import React from "react";
import NavBar from "./components/NavBar";
import ProfileHeader from "./components/ProfileHeader";
import ProfileContent from "./components/ProfileContent";

const App = () => {
  const profileInfo = {
    name: "John Doe",
    age: 30,
    role: "Software Developer",
    address: "123 Main St, City, State, Country",
    education: "Bachelor's in Computer Science",
    bio: "Passionate developer with a love for creating intuitive user experiences.",
    socialLinks: [
      { platform: "LinkedIn", url: "https://www.linkedin.com/in/johndoe" },
      { platform: "GitHub", url: "https://github.com/johndoe" },
      // Add more social links as needed
    ],
  };

  return (
    <div style={{ maxWidth: "100%", overflowX: "hidden" }}>
      <NavBar />
      <div style={{ padding: "10px" }}>
        <ProfileHeader name={profileInfo.name} title={profileInfo.title} />
        <ProfileContent
          name={profileInfo.name}
          role={profileInfo.role}
          age={profileInfo.age}
          address={profileInfo.address}
          education={profileInfo.education}
          bio={profileInfo.bio}
        />
      </div>
    </div>
  );
};

export default App;
