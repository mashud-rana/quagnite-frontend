"use client";

import BootcampContent from "@/components/Student/Bootcamps/BootcampContent/BootcampContent";
import { CourseOverview } from "@/components/Student/Bootcamps/CourseOverview/CourseOverview";
import Discussions from "@/components/Student/Bootcamps/Discussions/Discussions";
import Notes from "@/components/Student/Bootcamps/Notes/Notes";
import Reviews from "@/components/Student/Bootcamps/Reviews/Reviews";
import { Tabs } from "antd";
import TabPane from "antd/es/tabs/TabPane";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import img2 from "@/assets/images/all/img1.png";

const BootcampDetailsPage = () => {
  const [activeKey, setActiveKey] = useState("1");
  const [tabGutter, setTabGutter] = useState(16);

  // Responsive gutter
  useEffect(() => {
    const updateGutter = () => {
      if (window.innerWidth >= 1650) {
        setTabGutter(115);
      } else if (window.innerWidth >= 1399) {
        setTabGutter(60);
      } else if (window.innerWidth >= 1299) {
        setTabGutter(50);
      } else if (window.innerWidth >= 768) {
        setTabGutter(40);
      } else {
        setTabGutter(18);
      }
    };

    updateGutter();
    window.addEventListener("resize", updateGutter);
    return () => window.removeEventListener("resize", updateGutter);
  }, []);

  return (
    <div>
      <div className="mb-24">
        <div className="ic_title_section mb-24">
          <Link href="#" className="ic_back_button" aria-label="Go back">
            <FaArrowLeft />
          </Link>
          <h1 className="ic_text_36">
            Fullstack Academy Part-Time Software Engineering Bootcamp
          </h1>
        </div>

        <Image src={img2} className="ic_img" alt="" />
      </div>

      <div className="ic_layout_border ic_course">
        <Tabs
          activeKey={activeKey}
          onChange={(key) => setActiveKey(key)}
          type="line"
          tabBarGutter={tabGutter}
          animated
        >
          <TabPane tab="Course Content" key="1">
            <BootcampContent />
          </TabPane>

          <TabPane tab="Course Overview" key="2">
            <CourseOverview />
          </TabPane>

          <TabPane tab="Reviews" key="4">
            <Reviews />
          </TabPane>

          <TabPane tab="Discussions" key="5">
            <Discussions />
          </TabPane>

          <TabPane tab="Notes" key="6">
            <Notes />
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default BootcampDetailsPage;
