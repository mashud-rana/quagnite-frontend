"use client";

import Announcement from "@/components/Student/Bootcamps/Announcement/Announcement";
import BootcampHeading from "@/components/Student/Bootcamps/BootcampHeading/BootcampHeading";
import CourseContent from "@/components/Student/Bootcamps/CourseContent/CourseContent";
import { CourseOverview } from "@/components/Student/Bootcamps/CourseOverview/CourseOverview";
import Discussions from "@/components/Student/Bootcamps/Discussions/Discussions";
import Notes from "@/components/Student/Bootcamps/Notes/Notes";
import Reviews from "@/components/Student/Bootcamps/Reviews/Reviews";
import { Tabs, Button } from "antd";
import TabPane from "antd/es/tabs/TabPane";
import React, { useState, useEffect } from "react";

const CourseDetailsPage = () => {
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
      <BootcampHeading />

      <div className="ic_layout_border ic_course">
        <Tabs
          activeKey={activeKey}
          onChange={(key) => setActiveKey(key)}
          type="line"
          tabBarGutter={tabGutter}
          animated
          tabBarExtraContent={
            <Button
              style={{
                backgroundColor: "var(--primary-color)",
                color: "white",
                borderRadius: "8px",
                padding: "6px 16px",
                textTransform: "uppercase",
                fontSize: "15px",
                marginLeft: "20px",
              }}
            >
              Playground
            </Button>
          }
        >
          <TabPane tab="Course Content" key="1">
            <CourseContent />
          </TabPane>

          <TabPane tab="Course Overview" key="2">
            <CourseOverview />
          </TabPane>

          <TabPane tab="Announcements" key="3">
            <Announcement />
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

export default CourseDetailsPage;
