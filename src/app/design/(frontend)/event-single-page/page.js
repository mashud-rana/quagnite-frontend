import Event from "@/components/Frontend/Event/Event/Event";
import EventCarousel from "@/components/Frontend/Event/EventCarousel/EventCarousel";
import Intent from "@/components/Frontend/Event/Intent/Intent";
import NewEvent from "@/components/Frontend/Event/NewEvent/NewEvent";
import RequestEvent from "@/components/Frontend/Event/RequestEvent/RequestEvent";
import React from "react";

const EventSinglePage = () => {
  return (
    <>
      <Event />
      <Intent />
      <RequestEvent />
      <EventCarousel />
      <NewEvent />
    </>
  );
};

export default EventSinglePage;
