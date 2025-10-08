"use client";

import React, { useState, useEffect, useMemo } from "react";
import { Space, Table } from "antd";
import { GoEye } from "react-icons/go";
import { MdOutlineDownload } from "react-icons/md";
import IcTable from "@/components/Share/IcTable/IcTable";
import { useGetEbooksQuery } from "@/redux/features/student/ebook/ebookApi";


// convert object → query string
const toURLSearchParams = (record) => {
  const params = new URLSearchParams();
  for (const [key, value] of Object.entries(record)) {
    params.append(key, value);
  }
  return params;
};

// map AntD table params → API params
const getRandomuserParams = (params) => {
  const { pagination, filters, sortField, sortOrder, ...restParams } = params;
  const result = {};
  // result.limit = pagination?.pageSize;
  result.per_page = pagination?.pageSize;
  result.page = pagination?.current;

  if (filters) {
    Object.entries(filters).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        result[key] = value;
      }
    });
  }
  // if (sortField) {
  //   result.orderby = sortField;
  //   result.order = sortOrder === "ascend" ? "asc" : "desc";
  // }

  // Object.entries(restParams).forEach(([key, value]) => {
  //   if (value !== undefined && value !== null) {
  //     result[key] = value;
  //   }
  // });

  return result;
};

const EbookList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 2,
    },
  });

  // Build params for API call
  const params = useMemo(() => {
    return toURLSearchParams(getRandomuserParams(tableParams)).toString();
  }, [tableParams]);

  const { data: ebookData, isSuccess, isLoading, isFetching, refetch } = useGetEbooksQuery(params);

  // Table columns
  const tableColumns = [
    {
      title: "Date",
      dataIndex: "created_at_formatted",
      key: "date",
    },
    {
      title: "Title / Plan",
      key: "title",
      render: (_, record) => record?.ebook?.title || "N/A",
    },
    {
      title: "Amount",
      key: "amount",
      render: (_, record) => record?.ebook?.price ? `$${record.ebook.price}` : "-",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space>
          <button className="ic_action_btn" style={{
            cursor: 'pointer'
          }}>
            <MdOutlineDownload />
          </button>
          <button className="ic_action_btn" style={{
            cursor: 'pointer'
          }} onClick={()=> window.open(record?.ebook?.ebook_file_url, '_blank')} >
            <GoEye />
          </button>
        </Space>
      ),
    },
  ];

  // Set data when fetch success
  useEffect(() => {
    if (isSuccess && ebookData?.success) {
      const rows = Array.isArray(ebookData?.data?.data)
        ? ebookData.data.data
        : [];
      setTableData(rows);
      setLoading(false);
      setTableParams({
          ...tableParams,
          pagination: {
            ...tableParams.pagination,
            total: ebookData?.data?.meta?.total, // mock total, ideally from API
          },
        });
    }
  }, [isSuccess, ebookData]);

   const handleTableChange = (pagination, filters, sorter) => {
    console.log('3. handlerTableChange',"pagination:",pagination)
    setTableParams({
      pagination,
      // filters,
      // sortOrder: Array.isArray(sorter) ? undefined : sorter.order,
      // sortField: Array.isArray(sorter) ? undefined : sorter.field,
    });

    if (pagination.pageSize !== tableParams.pagination?.pageSize) {
      setTableData([]);
    }
  };

  console.log('tableParams:',tableParams)
  console.log('tableData:',tableData)

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

      {/* Example static table (you can remove if not needed) */}
      {/* <IcTable
        columns={[
          { title: "Date", dataIndex: "date", key: "date" },
          { title: "Title", dataIndex: "title", key: "title" },
          { title: "Amount", dataIndex: "amount", key: "amount" },
          { title: "Invoice No", dataIndex: "invoiceNo", key: "invoiceNo" },
        ]}
        data={[
          { key: "1", date: "2025-08-01", title: "Personal Membership", amount: 200, invoiceNo: "INV-1001" },
          { key: "2", date: "2025-08-05", title: "Premium Package", amount: 350, invoiceNo: "INV-1002" },
        ]}
        total={2}
        currentPage={currentPage}
        pageSize={2}
        handlePageChange={setCurrentPage}
      /> */}
    </>
  );
};

export default EbookList;