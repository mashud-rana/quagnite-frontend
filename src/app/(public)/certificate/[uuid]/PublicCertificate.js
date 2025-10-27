"use client";
import React, { useState, useEffect } from "react";
import { Button, Card, Spin, Result, Space, Tooltip, Typography } from "antd";
import { 
  DownloadOutlined, 
  FileProtectOutlined, 
  ShareAltOutlined,
  EyeOutlined,
  ZoomInOutlined,
  ZoomOutOutlined,
  CheckCircleOutlined
} from "@ant-design/icons";
import { useDownloadMyCertificateMutation, useGetMyCertificateUrlQuery } from "@/redux/features/student/certificate/certificateApi";

const { Title, Text, Paragraph } = Typography;

export default function PublicCertificate({ uuid, resData }) {
  const [fileUrl, setFileUrl] = useState(null);
  const [zoom, setZoom] = useState(100);

  let student = resData?.data?.certifiable?.data?.student;
  const certificateTitle = student?.full_name || "User";
  const courseName = resData?.data?.certifiable?.data?.course_name || "Course";

  const { 
    data: viewData,
    isSuccess: viewIsSuccess, 
    isLoading: viewIsLoading, 
    isError: viewIsError,
  } = useGetMyCertificateUrlQuery({ uuid: uuid }, { skip: !uuid });

  const [downloadMyCertificate, { isLoading: downloadIsLoading }] = useDownloadMyCertificateMutation();

  useEffect(() => {
    if (viewIsSuccess && viewData) {
      setFileUrl(viewData?.url);
    }
  }, [viewIsSuccess, viewData]);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `Certificate - ${certificateTitle}`,
        text: `Check out my certificate for ${courseName}`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  if (viewIsLoading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
      }}>
        <Card 
          style={{ 
            textAlign: 'center', 
            minWidth: '300px',
            borderRadius: '16px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
          }}
        >
          <Spin size="large" />
          <Title level={4} style={{ marginTop: 24, color: '#666' }}>
            Loading your certificate...
          </Title>
          <Text type="secondary">Please wait while we fetch your achievement</Text>
        </Card>
      </div>
    );
  }

  if (viewIsError) {
    return (
      <div style={{ 
        padding: '40px 20px', 
        maxWidth: '800px', 
        margin: '0 auto',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center'
      }}>
        <Result
          status="error"
          title="Certificate Not Found"
          subTitle="The certificate you're looking for doesn't exist or has been removed."
          extra={[
            <Button type="primary" key="home" href="/">
              Go Home
            </Button>
          ]}
        />
      </div>
    );
  }

  return (
    <div style={{ 
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      minHeight: '100vh',
      padding: '40px 20px'
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Header Section */}
        <div style={{ 
          textAlign: 'center', 
          marginBottom: '40px',
          animation: 'fadeInDown 0.6s ease-out'
        }}>
          <div style={{ 
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.2)',
            backdropFilter: 'blur(10px)',
            marginBottom: '24px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
          }}>
            <CheckCircleOutlined style={{ fontSize: '40px', color: '#fff' }} />
          </div>
          
          <Title level={1} style={{ 
            color: '#fff', 
            fontSize: '42px',
            fontWeight: 700,
            margin: '0 0 12px 0',
            textShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            Certificate of Achievement
          </Title>
          
          <Text style={{ 
            color: 'rgba(255,255,255,0.9)', 
            fontSize: '18px',
            display: 'block',
            marginBottom: '8px'
          }}>
            Awarded to <strong>{certificateTitle}</strong>
          </Text>
          
          <Text style={{ 
            color: 'rgba(255,255,255,0.8)', 
            fontSize: '16px' 
          }}>
            For successfully completing {courseName}
          </Text>
        </div>

        {/* Certificate Card */}
        <Card 
          bordered={false}
          style={{ 
            borderRadius: '24px',
            boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
            overflow: 'hidden',
            animation: 'fadeInUp 0.8s ease-out'
          }}
          bodyStyle={{ padding: 0 }}
        >
          {/* Action Bar */}
          <div style={{ 
            background: 'linear-gradient(to right, #f8f9fa, #fff)',
            padding: '20px 32px',
            borderBottom: '1px solid #e8e8e8',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px'
          }}>
            <Space size="middle">
              <EyeOutlined style={{ fontSize: '20px', color: '#1890ff' }} />
              <Text strong style={{ fontSize: '16px' }}>Preview Certificate</Text>
            </Space>
            
            <Space size="small">
              <Tooltip title="Zoom In">
                <Button 
                  icon={<ZoomInOutlined />}
                  onClick={() => setZoom(Math.min(zoom + 10, 150))}
                  disabled={zoom >= 150}
                />
              </Tooltip>
              <Tooltip title="Zoom Out">
                <Button 
                  icon={<ZoomOutOutlined />}
                  onClick={() => setZoom(Math.max(zoom - 10, 50))}
                  disabled={zoom <= 50}
                />
              </Tooltip>
              <Text type="secondary">{zoom}%</Text>
            </Space>
          </div>

          {/* Certificate Viewer */}
          {fileUrl && (
            <div style={{ 
              background: '#f5f5f5',
              padding: '32px',
              display: 'flex',
              justifyContent: 'center',
              minHeight: '700px'
            }}>
              <div style={{ 
                width: '100%',
                maxWidth: `${zoom}%`,
                transition: 'all 0.3s ease',
                boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                borderRadius: '8px',
                overflow: 'hidden',
                background: '#fff'
              }}>
                <iframe
                  src={fileUrl}
                  width="100%"
                  height="800px"
                  style={{ 
                    border: 'none',
                    display: 'block'
                  }}
                  title="Certificate"
                />
              </div>
            </div>
          )}

          {/* Download Section */}
          <div style={{ 
            background: 'linear-gradient(to right, #fff, #f8f9fa)',
            padding: '40px 32px',
            textAlign: 'center',
            borderTop: '1px solid #e8e8e8'
          }}>
            <Paragraph style={{ 
              fontSize: '16px', 
              color: '#666',
              marginBottom: '24px',
              maxWidth: '600px',
              margin: '0 auto 24px'
            }}>
              Download your certificate and share your achievement with the world!
            </Paragraph>
            
            <Space size="large" wrap>
              <Button
                type="primary"
                size="large"
                icon={<DownloadOutlined />}
                onClick={() => downloadMyCertificate(uuid)}
                loading={downloadIsLoading}
                style={{ 
                  height: '56px',
                  fontSize: '16px',
                  minWidth: '220px',
                  borderRadius: '12px',
                  fontWeight: 600,
                  boxShadow: '0 4px 16px rgba(24, 144, 255, 0.3)'
                }}
              >
                Download Certificate
              </Button>
              
              <Button
                size="large"
                icon={<ShareAltOutlined />}
                onClick={handleShare}
                style={{ 
                  height: '56px',
                  fontSize: '16px',
                  minWidth: '180px',
                  borderRadius: '12px',
                  fontWeight: 600
                }}
              >
                Share
              </Button>
            </Space>
            
            <div style={{ marginTop: '24px' }}>
              <Text type="secondary" style={{ fontSize: '13px' }}>
                💾 Downloads as PDF • 🔗 Share via link • ✅ Verified credential
              </Text>
            </div>
          </div>
        </Card>

        {/* Footer Note */}
        <div style={{ 
          textAlign: 'center', 
          marginTop: '32px',
          color: 'rgba(255,255,255,0.8)'
        }}>
          <Text style={{ color: 'inherit', fontSize: '14px' }}>
            🎓 This certificate is a testament to your dedication and hard work
          </Text>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}