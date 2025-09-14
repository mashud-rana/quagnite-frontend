import CertificationList from "@/components/Frontend/CertificationList/Certification/CertificationList";
import Filter from "@/components/Frontend/CertificationList/Filter/Filter";
import React from "react";

const CertificationListPage = () => {
  return (
    <>
      <Filter />
      <CertificationList />
    </>
  );
};

export default CertificationListPage;
