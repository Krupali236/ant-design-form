import React from 'react'
import { Form, Input, Button, Typography, Row, Col, Card } from "antd";
import { useNavigate } from "react-router-dom";

const SignUpBtn = () => {
  return (
    <div>
       <Button type="primary" htmlType="submit" className="signup-btn">
          Sign Up
        </Button>
    </div>
  )
}

export default SignUpBtn
