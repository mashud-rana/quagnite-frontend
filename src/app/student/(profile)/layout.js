import ScrollableNavbar from "@/components/Share/ScrollableNavbar/ScrollableNavbar";
import ProfileBanner from "@/components/Student/Profile/ProfileBanner/ProfileBanner";
import ProfileHeader from "@/components/Student/Profile/ProfileHeader/ProfileHeader";
import React from "react";

const ProfileLayout = ({ children }) => {
  const profileTabs = [
    { href: "/student", label: "Profile", exact: true },
    { href: "/student/account", label: "Account settings" },
    { href: "/student/subscriptions", label: "Subscriptions" },
  ];

  return (
    <>
      {/* <ScrollableNavbar tabs={profileTabs} /> */}
      <ProfileHeader />
      <ProfileBanner />
      <div>{children}</div>
    </>
  );
};

export default ProfileLayout;
