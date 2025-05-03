import React, { useState } from "react";
import { Form, Input, Button, Typography, Row, Col, Card, Flex } from "antd";

import { useNavigate } from "react-router-dom";
import InputFields from "./InputFields";
import SolidButton from "./SolidButton";
import SigninAlertAntd from "./SignInAlert";

const { Title, Text, Link } = Typography;
const SignIn = () => {
  const [inputValue, setInputValue] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [dialogOpen, setDialogOpen] = useState(false);
  const navigate = useNavigate();

  const isValid = (value) => {
    const handleError = {};
    if (!value?.username) handleError.username = "Please enter username";
    if (!value?.password) handleError.password = "Please enter password";
    setErrors(handleError);
    return Object.keys(handleError).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid(inputValue)) {
      const userData = JSON.parse(localStorage.getItem("signup-user")) || [];
      const user = userData.find(
        (u) =>
          u.username === inputValue.username &&
          u.password === inputValue.password
      );
      if (user) {
        setDialogOpen(true);
      } else {
        setErrors((prev) => ({
          ...prev,
          user: "Invalid username or password",
        }));
      }
    }
  };
  return (    
    <div className="form-content">
      <Flex
        justify="center"
        align={{ lg: "start", md: "start", xs: "center" }}
        vertical
      >
        <Title level={2} style={{ color: "#00B894", textAlign: "left" }}>
          Sign In
        </Title>
        <Title level={5} style={{ textAlign: "left" }}>
          Enter your username and password to sign in
        </Title>
        <InputFields
          inputValue={inputValue}
          setInputValue={setInputValue}
          errors={errors}
          fields={["username", "password"]}
        />
        {errors?.user && (
          <Typography color="error" style={{ color: "red" }}>
            {errors.user}
          </Typography>
        )}

        <Flex align="start" vertical style={{ margin: "0px 20px" }}>
          <SolidButton onClick={handleSubmit}>Sign In</SolidButton>
          <Title
            level={5}
            style={{ cursor: "pointer", fontWeight: 600, margin: 0 }}
          >
            Forgot your Password?
          </Title>
          <Title level={5} style={{ margin: 3 }}>
            Don't have an account?
            <Link
              className="navigation-link"
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </Link>
          </Title>
        </Flex>
      </Flex>
      <SigninAlertAntd
        open={dialogOpen}
        handleClose={() => setDialogOpen(false)}
      />
    </div>
  );
};

export default SignIn;
