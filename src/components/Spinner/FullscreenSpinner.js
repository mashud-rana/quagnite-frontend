import { Spin } from "antd";  // ✅ Import Spin from AntD
import { useSelector } from "react-redux";
export default function FullscreenSpinner() { 
    const { isSpinning } = useSelector((state) => state.spinner);
    return (
        <>
            {
                <Spin spinning={isSpinning} fullscreen></Spin>
            }
        </>
    );
}