import IcCard from "@/components/Share/IcCard/IcCard";
import React from "react";

const BootcampsPage = () => {
  const smallCards = [
    {
      // img: img2,
      title: "Lorem Ipsum Dolar Sit Amet",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ",
      buttonText: "start bootcamp",
    },
    {
      // img: img2,
      title: "Lorem Ipsum Dolar Sit Amet",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ",
      buttonText: "start bootcamp",
    },

    {
      // img: img2,
      title: "Lorem Ipsum Dolar Sit Amet",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ",
      buttonText: "start bootcamp",
    },

    {
      // img: img2,
      title: "Lorem Ipsum Dolar Sit Amet",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ",
      buttonText: "start bootcamp",
    },

    {
      // img: img2,
      title: "Lorem Ipsum Dolar Sit Amet",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ",
      buttonText: "start bootcamp",
    },

    {
      // img: img2,
      title: "Lorem Ipsum Dolar Sit Amet",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ",
      buttonText: "start bootcamp",
    },
  ];
  return (
    <div className="ic_grid2">
      {smallCards.map((card, index) => (
        <IcCard card={card} key={index} />
      ))}
    </div>
  );
};

export default BootcampsPage;
