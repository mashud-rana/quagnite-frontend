import CommunityCard from "@/components/Coach/Community/CommunityCard/CommunityCard";
import React from "react";

const Community = () => {
  const allNews = [
    {
      id: "1",
      name: "Lorem Ipsum Dolar Sit Amet",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/professional-woman-business-attire.png",
    },
    {
      id: "2",
      name: "Lorem Ipsum Dolar Sit Amet",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/professional-woman-business-attire.png",
    },
    {
      id: "3",
      name: "Lorem Ipsum Dolar Sit Amet",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/professional-woman-business-attire.png",
    },
    {
      id: "4",
      name: "Lorem Ipsum Dolar Sit Amet",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/professional-woman-business-attire.png",
    },
    {
      id: "5",
      name: "Lorem Ipsum Dolar Sit Amet",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/professional-woman-business-attire.png",
    },
    {
      id: "6",
      name: "Lorem Ipsum Dolar Sit Amet",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/professional-woman-business-attire.png",
    },
  ];

  return (
    <div>
      <div className="ic_grid">
        {allNews.map((news) => (
          <CommunityCard key={news.id} news={news} />
        ))}
      </div>
    </div>
  );
};

export default Community;
