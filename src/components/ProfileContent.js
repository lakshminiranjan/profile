import React from "react";

const ProfileContent = ({ name, age, role, address, education, bio }) => {
  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div style={{ marginBottom: "20px", width: "100%", maxWidth: "400px" }}>
        <label htmlFor="role" style={{ display: "block", marginBottom: "5px" }}>
          Role:
        </label>
        <input
          type="text"
          id="role"
          value={role}
          placeholder="Role"
          style={{ height: "30px", width: "100%", boxSizing: "border-box" }}
        />
      </div>
      <div style={{ marginBottom: "20px", width: "100%", maxWidth: "400px" }}>
        <label htmlFor="age" style={{ display: "block", marginBottom: "5px" }}>
          Age:
        </label>
        <input
          type="number"
          id="age"
          value={age}
          placeholder="Age"
          style={{ height: "30px", width: "100%", boxSizing: "border-box" }}
        />
      </div>
      <div style={{ marginBottom: "20px", width: "100%", maxWidth: "400px" }}>
        <label
          htmlFor="address"
          style={{ display: "block", marginBottom: "5px" }}
        >
          Address:
        </label>
        <input
          type="text"
          id="address"
          value={address}
          placeholder="Address"
          style={{ height: "30px", width: "100%", boxSizing: "border-box" }}
        />
      </div>
      <div style={{ marginBottom: "20px", width: "100%", maxWidth: "400px" }}>
        <label
          htmlFor="education"
          style={{ display: "block", marginBottom: "5px" }}
        >
          Education:
        </label>
        <input
          type="text"
          id="education"
          value={education}
          placeholder="Education"
          style={{ height: "30px", width: "100%", boxSizing: "border-box" }}
        />
      </div>
      <div style={{ marginBottom: "20px", width: "100%", maxWidth: "400px" }}>
        <label htmlFor="bio" style={{ display: "block", marginBottom: "5px" }}>
          Bio:
        </label>
        <textarea
          id="bio"
          value={bio}
          placeholder="Bio"
          style={{
            marginBottom: "5px",
            height: "60px",
            width: "100%",
            boxSizing: "border-box",
          }}
        />
      </div>
      <input
        type="submit"
        value="Submit"
        style={{ height: "30px", width: "100%", maxWidth: "400px" }}
      />
    </form>
  );
};

export default ProfileContent;
