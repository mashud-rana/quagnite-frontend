import React from "react";
import icon1 from "@/assets/images/school/icon1.png";
import CardAnimation from "@/components/Share/ClientComponent/CardAnimation";
import BenefitCard from "./BenefitCard";

const schoolsData = [
  {
    id: 1,
    icon: icon1,
    title: "Robust employment network",
    description:
      "Quagnite partners are always growing, and seeking to build life-long connections and motivated teams.",
  },
  {
    id: 2,
    icon: icon1,
    title: "Leading edge research and development",
    description:
      "It’s not just about the product, it’s about finding new ways to apply technology to life.",
  },
  {
    id: 3,
    icon: icon1,
    title: "Market-movers with high-performance teams",
    description:
      "From media to financial technology, surround yourself with the best people and do the best work.",
  },
];

const Benefits = () => {
  return (
    <section className="ic_section_space_bottom">
      <div className="container ic_white">
        <CardAnimation index={0} direction="left">
          <h6 className="mb_16">BENEFITS</h6>
        </CardAnimation>

        <CardAnimation index={0} direction="up">
          <h4 className="ic_title">
            The <span>support</span> you need
          </h4>
        </CardAnimation>
        <CardAnimation index={0} direction="up">
          <div className="ic_grid">
            {schoolsData.map((school, index) => (
              <BenefitCard school={school} key={index} index={index} />
            ))}
          </div>
        </CardAnimation>
      </div>
    </section>
  );
};

export default Benefits;
