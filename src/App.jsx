import "./App.css";
import customTheme from "./assets/theme";
import { ConfigProvider } from "antd";
import "./assets/styles.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignupPageContent from "./components/SignupPageContent";
import Signup from "./components/Signup";
import React, { useState } from "react";
import { Form, Input, Button, Typography, Row, Col, Card } from "antd";
import {
  UserOutlined,
  MailOutlined,
  LockOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import SignIn from "./components/SignIn";
import SigninPageContent from "./components/SigninPageContent";
import WelcomePage from "./pages/WelcomePage";
const { Title, Text, Link } = Typography;
function App() {
  const router = createBrowserRouter([   
    {
      path: "/",
      element: (
        <>
            <Row className="signup-container" justify="center" align="middle">
            <Col xs={24} md={20} lg={16}>
              <Card className="signup-card">
                <Row gutter={0}>
                  <Col xs={24} md={12} className="left-pane">                   
                    <SignupPageContent />
                  </Col>
                  <Col xs={0} md={12} className="right-pane">                    
                    <Signup />
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>     
        </>
      ),
    },
    {
      path: "/signup",
      element: (
        <>
          <Row className="signup-container" justify="center" align="middle">
            <Col xs={24} md={20} lg={16}>
              <Card className="signup-card">
                <Row gutter={0}>
                  <Col xs={0} md={12} className="left-pane">                 
                    <SignupPageContent />
                  </Col>

                  <Col xs={24} md={12} className="right-pane">                    
                    <Signup />
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>         
        </>
      ),
    },
    {
      path: "/signin",
      element: (
        <>
           <Row className="signup-container" justify="center" align="middle">
            <Col xs={24} md={20} lg={16}>
              <Card className="signup-card">
                <Row gutter={0}>
                  <Col xs={0} md={12} className="left-pane">                  
                    <SigninPageContent />
                  </Col>
                  <Col xs={24} md={12} className="right-pane">                  
                    <SignIn />
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </>
      ),
    },
    {
      path:"/home",
      element:(<><WelcomePage /></>)
    },
  ]);
  return (
    <>
      <ConfigProvider theme={customTheme}>
        <RouterProvider router={router}></RouterProvider>
      </ConfigProvider>
    </>
  );
}

export default App;
