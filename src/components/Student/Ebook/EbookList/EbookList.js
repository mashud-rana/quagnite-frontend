"use client";

import React, { useState, useEffect, useMemo } from "react";
import { Space, Table } from "antd";
import { GoEye } from "react-icons/go";
import { MdOutlineDownload } from "react-icons/md";
import IcTable from "@/components/Share/IcTable/IcTable";
import { useGetEbooksQuery, useDownloadEbookQuery, useDownloadEbookMutation } from "@/redux/features/student/ebook/ebookApi";
import { antIcon, toastError, toastSuccess } from "@/utils/helper";
import { Spin } from "antd";


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
 
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: process.env.CURRENT_PAGE ? parseInt(process.env.CURRENT_PAGE) : 1,
      pageSize: process.env.PAGE_SIZE ? parseInt(process.env.PAGE_SIZE) : 10,
    },
  });
  const [selectUuid, setSelectUuid] = useState(null);

  // Build params for API call
  const params = useMemo(() => {
    return toURLSearchParams(getRandomuserParams(tableParams)).toString();
  }, [tableParams]);

  //get ebooks
  const { data: ebookData, isSuccess, isLoading, isFetching, refetch } = useGetEbooksQuery(params);
  //download ebook
  const [downloadEbook, 
    { isLoading: downloadIsLoading, 
      isSuccess: downloadIsSuccess,
      isError: downloadIsError,
      error: downloadError }] = useDownloadEbookMutation();


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
          <button
            className="ic_action_btn"
            style={{ cursor: "pointer" }}
            onClick={() => {
              downloadEbook(record?.ebook?.uuid);
              setSelectUuid(record?.ebook?.uuid);
            }}
          >
            {selectUuid === record?.ebook?.uuid && downloadIsLoading ? <Spin indicator={antIcon} /> : <MdOutlineDownload />}
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

  const handleTableChange = (pagination, filters, sorter) => {
  
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

  useEffect(() => {
    if (downloadIsSuccess) {
      // Handle successful download
      setSelectUuid(null);
    }
  }, [downloadIsSuccess]);

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

export default EbookList;