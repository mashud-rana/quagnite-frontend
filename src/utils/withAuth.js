"use client";

import { Spin } from "antd";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const withAuth = (Component, allowedRoles) => {
  const Auth = (props) => {
    const [loading, setLoading] = useState(true);
  
    const router = useRouter();
    const { user} = useSelector((state) => state.auth);

    useEffect(() => {
      
      setLoading(false);
    }, [user]);
    if (loading) {
      return <Spin spinning={true} fullscreen />;
    }
    // If user is not logged in, return login component
    if (!user) {
      router.push("/auth/login");
      return ;
    }

    if (user && !allowedRoles.includes(user?.user_type)) {
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

export default withAuth;