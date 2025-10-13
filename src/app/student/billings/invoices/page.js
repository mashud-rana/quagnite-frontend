"use client";

import React, { useState, useEffect } from "react";

import { GoEye } from "react-icons/go";
import { MdOutlineDownload } from "react-icons/md";
import IcTable from "@/components/Share/IcTable/IcTable";
import {useGetInvoicesQuery, useDownloadInvoiceMutation, useViewInvoiceQuery} from "@/redux/features/student/invoice/invoiceApi";
import { Space, Table } from "antd";
import { antIcon, toastError, toastSuccess } from "@/utils/helper";
import { Spin } from "antd";

const InvoicesPage = () => {


  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: process.env.NEXT_PUBLIC_CURRENT_PAGE ? parseInt(process.env.NEXT_PUBLIC_CURRENT_PAGE) : 1,
      pageSize: process.env.NEXT_PUBLIC_PAGE_SIZE ? parseInt(process.env.NEXT_PUBLIC_PAGE_SIZE) : 10,
    },
  });
  const [selectId, setSelectId] = useState(null);
  const [viewId, setViewId] = useState(null);

  // API hook
  const { data: invoiceData, isSuccess, isLoading, isFetching, refetch } = useGetInvoicesQuery({
    page: tableParams.pagination?.current,
    per_page: tableParams.pagination?.pageSize,
  });

   //download invoice
  const [downloadInvoice, 
    { isLoading: downloadIsLoading, 
      isSuccess: downloadIsSuccess,
      isError: downloadIsError,
      error: downloadError }] = useDownloadInvoiceMutation();
  //View invoice
  const { data: viewData, isSuccess: viewIsSuccess, isLoading: viewIsLoading, isFetching: viewIsFetching, refetch: viewRefetch }
   = useViewInvoiceQuery({ id: viewId }, { skip: !viewId });

  // Table columns
  const tableColumns = [
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    
    },
    {
      title: "Invoice No",
      key: "invoice_id",
      dataIndex: "invoice_id",
      // render: (_, record) => record?.title || "N/A",
    },
    {
      title: "Price",
      key: "total",
      dataIndex: "total",
      // render: (_, record) => record?.author_name || "N/A",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space>
          <button
            className="ic_action_btn"
            style={{ cursor: "pointer" }}
            onClick={() => {
              downloadInvoice(record?.id);
              setSelectId(record?.id);
            }}
          >
            {selectId === record?.id && downloadIsLoading ? <Spin indicator={antIcon} /> : <MdOutlineDownload />}
            {/* <MdOutlineDownload /> */}
          </button>
          <button className="ic_action_btn" style={{
            cursor: 'pointer'
          }} onClick={()=> {
            setViewId(record?.id);
          }} >
            {viewId === record?.id && viewIsLoading ? <Spin indicator={antIcon} /> : <GoEye />}
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
      setViewId(null);
      // setSelectId(null);
      // Handle successful view
      // The PDF is already opened in a new tab by the query's responseHandler
      toastSuccess("Invoice opened in a new tab");
    }
  }, [viewIsSuccess]);
  // Handle download success/error
   useEffect(() => {
      if (downloadIsSuccess) {
        // Handle successful download
        setSelectId(null);
      }
    }, [downloadIsSuccess]);
  // Set data when fetch success
  useEffect(() => {
    if (isSuccess && invoiceData?.success) {
      const rows = Array.isArray(invoiceData?.data?.data)
        ? invoiceData.data.data
        : [];
      setTableData(rows);
      setLoading(false);
      setTableParams({
          ...tableParams,
          pagination: {
            ...tableParams.pagination,
            total: invoiceData?.data?.meta?.total, // mock total, ideally from API
          },
        });
    }
  }, [isSuccess, invoiceData]);


  // console.log("Table Data:", tableData);

  return (
     <>
    <Table
        columns={tableColumns}
        rowKey={(record) => record.id}
        dataSource={tableData}
        pagination={tableParams.pagination}
        loading={loading || isLoading || isFetching}
        onChange={handleTableChange}
      />
   
    </>
  );
};

export default InvoicesPage;
