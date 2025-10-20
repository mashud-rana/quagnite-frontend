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
import { useGetBootcampDetailsBySlugQuery } from "@/redux/features/student/bootcamp/bootcampApi";
import { useParams } from "next/navigation";
import SectionSpinner from "@/components/Spinner/SectionSpinner";
import NotDataFound from "@/components/Empty/NotDataFound";
import styles from "./details.module.css";
import BootcampOverview from "@/components/Student/Bootcamps/BootcampOverview/BootcampOverview";
import BootcampDetailSkeleton from "@/components/Student/Bootcamps/Skeleton/Details/BootcampDetailSkeleton";

const BootcampDetailsPage = () => {
  const [activeKey, setActiveKey] = useState("1");
  const [tabGutter, setTabGutter] = useState(16);
  const { slug } = useParams();
  const [bootcamp, setBootcamp] = useState({});

  //get bootcamp by slug
  const { data, isSuccess, isLoading, error, refetch, isFetching, isError } =
    useGetBootcampDetailsBySlugQuery(slug);

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

  //set bootcamp
  useEffect(() => {
    if (isSuccess && data.success) {
      setBootcamp({
        ...data.data,
      });
    }
  }, [data, isSuccess]);


  if (isLoading || isFetching) {
    // return <SectionSpinner message="Loading bootcamp details..." />;
    return <BootcampDetailSkeleton />;
  }
  if (isError) {
    return <NotDataFound message="Bootacamp details not found" />;
  }

  console.log("1 bootcamp", bootcamp);

  return (
    <div>
      <div className="mb-24">
        <div className="ic_title_section mb-24">
          <Link
            href="/student/bootcamps"
            className="ic_back_button"
            aria-label="Go back"
          >
            <FaArrowLeft />
          </Link>
          <h1 className="ic_text_36">{bootcamp?.title}</h1>
        </div>

        <Image
          src={bootcamp?.image_url}
          className={styles.ic_banner_img}
          alt={bootcamp?.title}
          width={600}
          height={100}
        />
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
            <BootcampContent bootcampData={bootcamp} />
          </TabPane>

          <TabPane tab="Course Overview" key="2">
            <BootcampOverview
              bootcampData={bootcamp}
            />
            {/* <CourseOverview  /> */}
          </TabPane>

          <TabPane tab="Reviews" key="4">
            <Reviews reviewData={bootcamp?.review_data} reviews={bootcamp?.reviews} data_id={bootcamp?.id} type="bootcamp"/>
          </TabPane>

          <TabPane tab="Discussions" key="5">
            <Discussions discussionsData={bootcamp?.discussions} data_id={bootcamp?.id} type="bootcamp" />
          </TabPane>

          <TabPane tab="Notes" key="6">
            <Notes noteData={bootcamp?.notes} data_id={bootcamp?.id} type="bootcamp" />
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default BootcampDetailsPage;
