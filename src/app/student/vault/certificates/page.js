'use client';
import React, { useState, useEffect } from "react";
import SearchInput from "@/components/Student/Courses/Course/SearchInput";
import CertificateList from "@/components/Student/Vault/CertificateList/CertificateList";
import CertificationSearch from "@/components/Student/Vault/CertificationSearch/CertificationSearch";


const MycertificatesPage = () => {
  const [certifiableTypes, setCertifiableTypes] = useState([]);
  return (
    <>
      <CertificationSearch />
      <CertificateList certifiableTypes={certifiableTypes} />
    </>
  );
};

export default MycertificatesPage;
