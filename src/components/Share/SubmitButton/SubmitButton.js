"use client";

import {Spin} from "antd";
import {LoadingOutlined} from "@ant-design/icons";

const SubmitButton = ({
    isLoading = false,
    buttonText = "SAVE AND CONTINUE"
                      }) => {

    return (
        <button type="submit" className="ic_btn" disabled={isLoading}>
            {buttonText} {isLoading?? <span></span>}
            {isLoading ? <Spin style={{color: "white"}} indicator={<LoadingOutlined spin/>} size="medium"/> : ''}
        </button>
    );
};

export default SubmitButton;
