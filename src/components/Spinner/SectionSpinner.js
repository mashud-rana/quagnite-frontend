import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

export default function SectionSpinner({ message = "Loading..." }) {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: 200,
            width: "100%"
        }}>
            <Spin
                indicator={<LoadingOutlined style={{ fontSize: 32, color: "#1890ff" }} spin />}
                size="large"
            />
            <div style={{ marginTop: 16, color: "#555", fontSize: 16 }}>{message}</div>
        </div>
    );
}