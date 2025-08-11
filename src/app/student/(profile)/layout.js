import ProfileHeader from "@/components/Student/Profile/ProfileHeader/ProfileHeader";
import React from "react";

const ProfileLayout = ({ children }) => {
  return (
    <>
      <ProfileHeader />
      <div>{children}</div>
    </>
  );
};

export default ProfileLayout;
