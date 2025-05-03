import React, { useState } from "react";
import { Form, Input, Button, Typography, Row, Col, Card } from "antd";
import SignInBtn from "./SignInBtn";
import OutlinedButton from "./OutlinedButton";
import { useNavigate } from "react-router-dom";
const { Title, Text, Link } = Typography;

const SigninPageContent = () => {
  const navigate = useNavigate();
  return (
    <div>
       <div className="welcome-content">
        <Title level={3}>Join Us Today!</Title>
        <Title level={4}>
          Create your account and unlock a world of possibilities.
          <br />
          Sign up now and get started!
        </Title>       
        <OutlinedButton onClick={()=>navigate("/signup")}>Sign Up</OutlinedButton>
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
  )
}

export default SigninPageContent
