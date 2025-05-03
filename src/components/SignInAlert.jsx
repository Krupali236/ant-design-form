import React from "react";
import { Modal, Result, Button } from "antd";
import { CheckCircleTwoTone } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import OutlinedButton from "./OutlinedButton";
import SolidButton from "./SolidButton";
import SignInBtn from "./SignInBtn";

const SigninAlertAntd = ({ open, handleClose }) => {
  const navigate = useNavigate();

  return (
    <Modal
      open={open}
      footer={null}
      closable={false}
      centered
      onCancel={handleClose}
      bodyStyle={{ paddingTop: 50, paddingBottom: 20 }}
    >
      {/* Floating Check Icon */}
      {/* <div
        style={{
          position: "absolute",
          top: "-30px",
          left: "50%",
          transform: "translateX(-50%)",
          backgroundColor: "#0faf82",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
          zIndex: 10,
        }}
      >
        <CheckCircleTwoTone twoToneColor="#ffffff" style={{ fontSize: 40 }} />
      </div> */}

      <Result
        status="success"
        title={<span style={{ fontWeight: "bold" }}>Sign In Successful!</span>}
        subTitle="Your account has been login successfully. You can now start exploring."
        extra={[       
        // <OutlinedButton onClick={handleClose} >OK</OutlinedButton>,
        <SignInBtn onClick={handleClose}>OK</SignInBtn>,
        <SolidButton onClick={() => navigate("/")} borderColor="#0faf82" backgroundColor="#0faf82" style={{ backgroundColor: "#0faf82 !important", borderColor: "#0faf82 !important" }}>Go to Home Page</SolidButton>
        
        //   <Button key="home" type="primary" onClick={() => navigate("/")} style={{ backgroundColor: "#0faf82", borderColor: "#0faf82" }}>
        //     Go to Home Page
        //   </Button>,
        ]}
      />
    </Modal>
  );
};

export default SigninAlertAntd;
