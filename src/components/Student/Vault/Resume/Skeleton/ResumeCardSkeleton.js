import React from 'react';
import { Skeleton, Card, Row, Col } from 'antd';

const ResumeCardSkeleton = () => {
  return (
    <div style={{ padding: '24px', background: '#f5f5f5' }}>
      <Row gutter={[16, 16]}>
        {[...Array(8)].map((_, index) => (
          <Col xs={24} sm={12} md={8} lg={6} key={index}>
            <Card
              style={{
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
              }}
            >
              {/* Header with title and share icon */}
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                marginBottom: '16px' 
              }}>
                <Skeleton.Input 
                  active 
                  size="small" 
                  style={{ width: '120px', height: '20px' }} 
                />
                <Skeleton.Avatar 
                  active 
                  size="small" 
                  shape="circle" 
                />
              </div>

              {/* Resume icon/image */}
              <div style={{ 
                display: 'flex', 
                justifyContent: 'center',
                margin: '20px 0'
              }}>
                <Skeleton.Node 
                  active 
                  style={{ 
                    width: '120px', 
                    height: '140px',
                    borderRadius: '4px'
                  }}
                >
                  <div style={{
                    width: '120px',
                    height: '140px',
                    background: '#f0f0f0',
                    borderRadius: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Skeleton.Avatar 
                      active 
                      shape="square" 
                      size={80} 
                    />
                  </div>
                </Skeleton.Node>
              </div>

              {/* Delete icon */}
              <div style={{ 
                display: 'flex', 
                justifyContent: 'flex-end',
                marginBottom: '16px' 
              }}>
                <Skeleton.Avatar 
                  active 
                  size="small" 
                  shape="circle" 
                />
              </div>

              {/* Action buttons */}
              <div style={{ 
                display: 'flex', 
                gap: '8px',
                justifyContent: 'space-between'
              }}>
                <Skeleton.Button 
                  active 
                  style={{ 
                    width: '48%', 
                    height: '36px',
                    borderRadius: '6px'
                  }} 
                />
                <Skeleton.Button 
                  active 
                  style={{ 
                    width: '48%', 
                    height: '36px',
                    borderRadius: '6px'
                  }} 
                />
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ResumeCardSkeleton;