import EventCard from "@/components/Coach/Community/CommunityCard/EventCard";
import React from "react";

const EventsPage = () => {
  const events = [
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
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default EventsPage;
