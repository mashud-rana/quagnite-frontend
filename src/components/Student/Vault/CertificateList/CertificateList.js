"use client";

import React, { useState, useEffect } from "react";
import { Table, Button, Space } from "antd";
import styles from "./certificatelist.module.css";
import { GoEye } from "react-icons/go";
import { MdOutlineDownload } from "react-icons/md";
import {useDownloadMyCertificateMutation, useGetMyCertificatesQuery, useViewMyCertificateQuery} from "@/redux/features/student/certificate/certificateApi";
import { antIcon, toastError, toastSuccess } from "@/utils/helper";
import { Spin } from "antd";

const CertificateList = ({certifiableTypes, search}) => {


  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: process.env.NEXT_PUBLIC_CURRENT_PAGE ? parseInt(process.env.NEXT_PUBLIC_CURRENT_PAGE) : 1,
      pageSize: process.env.NEXT_PUBLIC_PAGE_SIZE ? parseInt(process.env.NEXT_PUBLIC_PAGE_SIZE) : 10,
    },
  });
  const [selectUuid, setSelectUuid] = useState(null);
  const [viewUuid, setViewUuid] = useState(null);

  const [studentCertifiableTypes, setStudentCertifiableTypes] = useState([]);

  // Convert to string safely
  const certifiableTypesParam = Array.isArray(studentCertifiableTypes)
  ? studentCertifiableTypes.join(',')
  : studentCertifiableTypes;

  // API hook
  const { data: certificateData, isSuccess, isLoading, isFetching, refetch } = useGetMyCertificatesQuery({
    page: tableParams.pagination?.current,
    per_page: tableParams.pagination?.pageSize,
    certifiable_types: certifiableTypesParam,
    search: search || "",
  });

  //View invoice
  const { data: viewData, isSuccess: viewIsSuccess, isLoading: viewIsLoading, isFetching: viewIsFetching, refetch: viewRefetch }
    = useViewMyCertificateQuery({ uuid: viewUuid }, { skip: !viewUuid });

    //download my certificate
  const [downloadMyCertificate, 
    { isLoading: downloadIsLoading, 
      isSuccess: downloadIsSuccess,
      isError: downloadIsError,
      error: downloadError }] = useDownloadMyCertificateMutation();

   // Table columns
  const tableColumns = [
    {
      title: "SL No",
      dataIndex: "sl_no",
      key: "sl_no",
      render: (_, __, index) => (tableParams.pagination?.current - 1) * tableParams.pagination?.pageSize + index + 1,
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    
    },
    {
      title: "Course / Exam Name ",
      key: "name",
      dataIndex: "name",
      render: (_, record) => {
        if(record?.certifiable?.type === 'course'){
          return record?.certifiable?.data?.course?.title || "N/A";
        } else if(record?.certifiable?.type === 'exam'){
          return record?.certifiable?.data?.exam?.title || "N/A";
        }
      },
    },
    {
      title: "Certificate No",
      key: "certificate_number",
      dataIndex: "certificate_number",
      // render: (_, record) => record?.title || "N/A",
    },
    // {
    //   title: "Price",
    //   key: "total",
    //   dataIndex: "total",
    //   // render: (_, record) => record?.author_name || "N/A",
    // },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space>
          <button
            className="ic_action_btn"
            style={{ cursor: "pointer" }}
            onClick={() => {
              downloadMyCertificate(record?.uuid);
              setSelectUuid(record?.uuid);
            }}
          >
            {selectUuid === record?.uuid && downloadIsLoading ? <Spin indicator={antIcon} /> : <MdOutlineDownload />}
            {/* <MdOutlineDownload /> */}
            
          </button>
          <button className="ic_action_btn" style={{
            cursor: 'pointer'
          }} onClick={()=> {
            setViewUuid(record?.uuid);
            viewRefetch();
          }} >
            {viewUuid === record?.uuid && (viewIsLoading || viewIsFetching )? <Spin indicator={antIcon} /> : <GoEye />}
            {/* <GoEye /> */}
          </button>
        </Space>
      ),
    },
  ];


    // Table change (pagination, filters, sorter)
   const handleTableChange = (pagination) => {
  
    setTableParams({
      pagination,
    });

    if (pagination.pageSize !== tableParams.pagination?.pageSize) {
      setTableData([]);
    }
  };

  //Handel view success/error
  useEffect(()=>{
    if(viewIsSuccess){
      setViewUuid(null);
      // Handle successful view
      // The PDF is already opened in a new tab by the query's responseHandler
      toastSuccess("My Certificate opened in a new tab");
    }
  }, [viewIsSuccess]);

  // Handle download success/error
    useEffect(() => {
      if (downloadIsSuccess) {
        // Handle successful download
        setSelectUuid(null);
      }
    }, [downloadIsSuccess]);
   // Set table data when fetch success
  useEffect(() => {
    if (isSuccess && certificateData?.success) {
      const rows = Array.isArray(certificateData?.data?.data)
        ? certificateData.data.data
        : [];
      setTableData(rows);
      setLoading(false);
      setTableParams({
          ...tableParams,
          pagination: {
            ...tableParams.pagination,
            total: certificateData?.data?.meta?.total, // mock total, ideally from API
          },
        });
    }
  }, [isSuccess, certificateData]);

  //set studentCertifiableTypes
    useEffect(() => {
    if (Array.isArray(certifiableTypes)) {
      setStudentCertifiableTypes(certifiableTypes);
    }
  }, [certifiableTypes]);

  console.log('certificate tableData', tableData);

  const columns = [
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Title / Plan",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      render: (text) => `$${text}`,
    },
    {
      title: "Invoice No",
      dataIndex: "invoiceNo",
      key: "invoiceNo",
    },
    {
      title: "Action",
      key: "action",
      render: () => (
        <Space>
          <button className={styles.ic_action_btn}>
            <MdOutlineDownload />
          </button>
          <button className={styles.ic_action_btn}>
            <GoEye />
          </button>
        </Space>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      date: "2025-08-01",
      title: "Personal Membership",
      amount: 200,
      invoiceNo: "INV-1001",
    },
    {
      key: "2",
      date: "2025-08-05",
      title: "Premium Package",
      amount: 350,
      invoiceNo: "INV-1002",
    },
    {
      key: "3",
      date: "2025-08-10",
      title: "Basic Subscription",
      amount: 100,
      invoiceNo: "INV-1003",
    },
    {
      key: "4",
      date: "2025-08-12",
      title: "Gold Package",
      amount: 500,
      invoiceNo: "INV-1004",
    },
  ];

  return (
    <div className={styles.ic_wrapper}>
       <Table
          columns={tableColumns}
          rowKey={(record) => record.id}
          dataSource={tableData}
          pagination={tableParams.pagination}
          loading={loading || isLoading || isFetching}
          onChange={handleTableChange}
        />
      
      {/* <Table
        columns={columns}
        dataSource={data}
        bordered
        pagination={{
          current: currentPage,
          pageSize: 2,
          total: data.length,
          onChange: (page) => setCurrentPage(page),
        }}
       
      /> */}
    </div>
  );
};

export default CertificateList;
