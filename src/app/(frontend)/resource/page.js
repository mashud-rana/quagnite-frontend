import Blog from "@/components/Frontend/Resource/Blog/Blog";
import Community from "@/components/Frontend/Resource/Community/Community";
import ResourceBanner from "@/components/Frontend/Resource/ResourceBanner/ResourceBanner";
import VideoCarousel from "@/components/Frontend/Resource/VideoCarousel/VideoCarousel";
import Webinar from "@/components/Frontend/Resource/Webinar/Webinar";
import Wiki from "@/components/Frontend/Resource/Wiki/Wiki";
import React from "react";

const ResourcePage = () => {
  return (
    <>
      <ResourceBanner />
      <Webinar />
      <VideoCarousel />
      <Blog />
      <Wiki />
      <Community />
    </>
  );
};

export default ResourcePage;
