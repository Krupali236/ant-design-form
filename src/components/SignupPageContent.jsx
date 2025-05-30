import React, { useState } from "react";
import { Form, Input, Button, Typography, Row, Col, Card } from "antd";
import SignInBtn from "./SignInBtn";
import OutlinedButton from "./OutlinedButton";
import { useNavigate } from "react-router-dom";
const { Title, Text, Link } = Typography;

const SignupPageContent = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="welcome-content">
        <Title level={3}>Welcome Back!</Title>
        <Title level={4}>
          To stay connected with us
          <br />
          please login with your personal info
        </Title>

        <OutlinedButton onClick={() => navigate("/signin")}>
          Sign In
        </OutlinedButton>
        <div className="role-links">
          <Title level={4}>
            CREATOR <Text className="color-white">HERE</Text>
          </Title>
          <span className="divider">|</span>
          <Title level={4}>
            DERECTOR <Text className="color-white">HERE</Text>
          </Title>
        </div>
      </div>
    </div>
  );
};

export default SignupPageContent;
