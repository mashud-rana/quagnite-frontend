import { Table } from "antd";
import React from "react";
import styles from "./icTable.module.css";

const IcTable = ({
  columns,
  data,
  currentPage,
  pageSize,
  total,
  handlePageChange,
}) => {
  console.log(data);
  return (
    <div className={styles.ic_wrapper}>
      <Table
        columns={columns}
        dataSource={data}
        bordered
        pagination={{
          current: currentPage,
          pageSize: pageSize,
          total: { total },
          onChange: (page) => handlePageChange(page),
        }}
      />
    </div>
  );
};

export default IcTable;
