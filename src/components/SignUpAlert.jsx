import React from "react";
import { Modal, Typography, Divider, Button, Flex } from "antd";
import { CheckCircleTwoTone } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import OutlinedButton from "./OutlinedButton";
import SolidButton from "./SolidButton";

const { Title, Paragraph } = Typography;

export default function SignupAlert({ open, handleClose }) {
  const navigate = useNavigate();

  return (
    <Modal
      open={open}
      onCancel={handleClose}
      footer={null}
      closable={false}
      centered
    >
      {/* Icon at the Top */}
      <div style={{ textAlign: "center", marginTop: "-40px" }}>
        <CheckCircleTwoTone
          twoToneColor="#0faf82"
          style={{ fontSize: "48px" }}
        />
      </div>

      {/* Title */}
      <Title level={4} style={{ textAlign: "center", marginTop: "10px" }}>
        Sign Up Successful!
      </Title>

      {/* Content */}
      <Paragraph style={{ textAlign: "center" }}>
        Welcome aboard! Your account has been created successfully. You can now
        log in and start exploring.
      </Paragraph>

      <Divider />

      {/* Footer Actions */}
      <Flex gap="middle" justify="center" align="center">
        <div style={{ textAlign: "center", marginTop: "16px" }}>
          <OutlinedButton onClick={handleClose}>OK</OutlinedButton>
          <SolidButton onClick={() => navigate("/signin")}>            
            Go to Login
          </SolidButton>
        </div>
      </Flex>
    </Modal>
  );
}
