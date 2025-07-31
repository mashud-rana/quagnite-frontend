import Blog from "@/components/Frontend/Resource/Blog/Blog";
import ResourceBanner from "@/components/Frontend/Resource/ResourceBanner/ResourceBanner";
import VideoCarousel from "@/components/Frontend/Resource/VideoCarousel/VideoCarousel";
import React from "react";

const ResourcePage = () => {
  return (
    <>
      <ResourceBanner />
      <VideoCarousel />
      <Blog />
    </>
  );
};

export default ResourcePage;
