"use client";

import React, { useState, useEffect } from "react";

import { GoEye } from "react-icons/go";
import { MdOutlineDownload } from "react-icons/md";
import IcTable from "@/components/Share/IcTable/IcTable";
import {useGetInvoicesQuery} from "@/redux/features/student/invoice/invoiceApi";
import { Space, Table } from "antd";

const InvoicesPage = () => {


  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: process.env.NEXT_PUBLIC_CURRENT_PAGE ? parseInt(process.env.NEXT_PUBLIC_CURRENT_PAGE) : 1,
      pageSize: process.env.NEXT_PUBLIC_PAGE_SIZE ? parseInt(process.env.NEXT_PUBLIC_PAGE_SIZE) : 10,
    },
  });

  // API hook
  const { data: invoiceData, isSuccess, isLoading, isFetching, refetch } = useGetInvoicesQuery({
    page: tableParams.pagination?.current,
    per_page: tableParams.pagination?.pageSize,
  });


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
            // onClick={() => {
            //   downloadEbook(record?.uuid);
            //   setSelectUuid(record?.uuid);
            // }}
          >
            {/* {selectUuid === record?.uuid && downloadIsLoading ? <Spin indicator={antIcon} /> : <MdOutlineDownload />} */}
            <MdOutlineDownload />
          </button>
          <button className="ic_action_btn" style={{
            cursor: 'pointer'
          }} onClick={()=> window.open(record?.ebook_file_url, '_blank')} >
            <GoEye />
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
