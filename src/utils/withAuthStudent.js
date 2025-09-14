"use client";

import { Spin } from "antd";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const withAuthStudent = (Component) => {
  const Auth = (props) => {
    const [loading, setLoading] = useState(true);
    const [userData, setUserData] = useState(null);
    const [userAccessToken, setUserAccessToken] = useState(null);
    const [userRefreshToken, setUserRefreshToken] = useState(null);
    const router = useRouter();
    const { user, access_token, refresh_token } = useSelector((state) => state.auth);

    useEffect(() => {
        
      setUserData(user);
      setUserAccessToken(access_token);
      setUserRefreshToken(refresh_token);
      setLoading(false);
    }, [user, access_token, refresh_token]);
    if (loading) {
      return <Spin spinning={true} fullscreen />;
    }
    // If user is not logged in, return login component
    if (!userData || !userAccessToken || !userRefreshToken) {
      router.push("/auth/login");
      return null;
    }
    const userType = userData?.user_type === "student";
    if (!userType) {
      router.push("/not-found");
      return null;
    }
    // If user is logged in, return original component
    return <Component {...props} />;
  };
  // Copy getInitial props so it will run as well
  if (Component.getInitialProps) {
    Auth.getInitialProps = Component.getInitialProps;
  }
  return Auth;
};

export default withAuthStudent;