import React from "react";
import { Link } from "react-router-dom";

const InfoCard = ({ user }) => {
  return (
    <div>
      <h1>About You:</h1>
      {user.isVet ? (
        <>
          <h3>Name: {user.name}</h3>
          <h3>Email:{user.email}</h3>
          <h3>Phone Number:{user.phone}</h3>
          <h3>License Number: {user.licenseNo}</h3>
          <h3>State License Number:{user.licenseState}</h3>
        </>
      ) : (
        <>
          <h3>Name: {user.name}</h3>
          <h3>Email:{user.email}</h3>
          <h3>Phone Number:{user.phone ? user.phone : " No Phone Number"}</h3>
        </>
      )}

      <Link
        to={{
          pathname: "/edit-user",
          state: { user },
        }}
      >
        Edit Profile Info
      </Link>
    </div>
  );
};

export default InfoCard;
