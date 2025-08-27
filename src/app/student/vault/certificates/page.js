import SearchInput from "@/components/Student/Courses/Course/SearchInput";
import CertificateList from "@/components/Student/Vault/CertificateList/CertificateList";
import CertificationSearch from "@/components/Student/Vault/CertificationSearch/CertificationSearch";
import React from "react";

const MycertificatesPage = () => {
  return (
    <>
      <CertificationSearch />
      <CertificateList />
    </>
  );
};

export default MycertificatesPage;
