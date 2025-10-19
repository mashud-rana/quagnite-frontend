'use client';
import React, { useState, useEffect } from "react";
import SearchInput from "@/components/Student/Courses/Course/SearchInput";
import CertificateList from "@/components/Student/Vault/CertificateList/CertificateList";
import CertificationSearch from "@/components/Student/Vault/CertificationSearch/CertificationSearch";


const MycertificatesPage = () => {
  const [certifiableTypes, setCertifiableTypes] = useState([]);
  const [search, setSearch] = useState("");
  const searchChangeHandler = (search) => {
    setSearch(search);
  }
  const certifiableTypesChangeHandler = (selectedTypes) => {
    setCertifiableTypes(selectedTypes);
  }

  return (
    <>
      <CertificationSearch  onSearchChange={searchChangeHandler} onCertifiableTypesChange={certifiableTypesChangeHandler} />
      <CertificateList certifiableTypes={certifiableTypes} search={search} />
    </>
  );
};

export default MycertificatesPage;
