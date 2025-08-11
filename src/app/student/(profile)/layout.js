import ProfileBanner from "@/components/Student/Profile/ProfileBanner/ProfileBanner";
import ProfileHeader from "@/components/Student/Profile/ProfileHeader/ProfileHeader";
import React from "react";

const ProfileLayout = ({ children }) => {
  return (
    <>
      <ProfileHeader />
      <ProfileBanner />
      <div>{children}</div>
    </>
  );
};

export default ProfileLayout;
