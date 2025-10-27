import { Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";

export default function PublicCertificate() {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Certificate of Completion</h2>
      {/* <iframe
        src={pdfUrl}
        width="80%"
        height="600px"
        style={{ border: "1px solid #ddd", borderRadius: "8px" }}
        title="Public Certificate"
      ></iframe>
      <div style={{ marginTop: "20px" }}>
        <Button
          type="primary"
          icon={<DownloadOutlined />}
          onClick={() => window.open(pdfUrl, "_blank")}
        >
          Download PDF
        </Button>
      </div> */}
    </div>
  );
}
