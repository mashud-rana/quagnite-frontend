import React from 'react';
import { Button, Empty, Typography } from 'antd';
const NotDataFound = ({message}) => (
  <div style={{ textAlign: 'center', padding: '2rem', color: '#888', width: '100%',margin:'0px auto' }}>
    <Empty
      description={
      
        <Typography.Text>
          {
              message || "No Data Found"
          }
        </Typography.Text>
      }
    >
    
    </Empty>
  </div>
);
export default NotDataFound;