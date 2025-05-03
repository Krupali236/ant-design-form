import React, { useState } from "react";
import { Form, Input, Button, Typography, Row, Col, Card, Flex } from "antd";

import { useNavigate } from "react-router-dom";
import InputFields from "./InputFields";
import SolidButton from "./SolidButton";
import SignupAlert from "./SignUpAlert";

const { Title, Text, Link } = Typography;

const Signup = () => {
  const [inputValue, setInputValue] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [dialogOpen, setDialogOpen] = useState(false);
  const navigate = useNavigate();

  const isValid = (value) => {
    const handleError = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const alphabetRegex = /^[a-zA-Z]+$/;
    const passwordRegex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
    if (!value?.username) {
      handleError.username = "Please enter username";
    } else if (!alphabetRegex.test(value?.username)) {
      handleError.username = "please enter valid username";
    }
    if (!value?.email) {
      handleError.email = "Please enter email";
    } else if (!emailRegex.test(value?.email)) {
      handleError.email = "please enter valid email";
    }

    if (!value?.password) {
      handleError.password = "Please enter password";
    } else if (!passwordRegex.test(value?.password)) {
      handleError.password = "please enter valid password";
    }
    setErrors(handleError);
    console.log(Object.keys(handleError), "errors OBject");
    return Object.keys(handleError).length === 0;
  };

  const handleSubmit = (e) => {
    const validation = isValid(inputValue);
    if (validation) {
      const userData = JSON.parse(localStorage.getItem("signup-user")) || [];
      const userExist = userData.some(
        (users) =>
          users.username === inputValue.username ||
          users.email === inputValue.email
      );
      if (userExist) {
        setErrors((prev) => ({
          ...prev,
          user: "User already exists!",
        }));
      } else {
        userData.push(inputValue);
        localStorage.setItem("signup-user", JSON.stringify(userData));
        setInputValue({ username: "", email: "", password: "" });
        setDialogOpen(true);
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
        <Title
          level={2}
          style={{ color: "#00B894", textAlign: "left", margin: "0px 20px" }}
        >
          Sign Up
        </Title>
        <Title level={5} style={{ textAlign: "left", marginLeft: "20px" }}>
          Hey enter your details to sign in to your account
        </Title>

        <InputFields
          inputValue={inputValue}
          setInputValue={setInputValue}
          errors={errors}
          fields={["username", "email", "password"]}
        />
        {errors?.user && (
          <Typography color="error" style={{ color: "red" }}>
            {errors.user}
          </Typography>
        )}
        <Flex align="start" vertical style={{ margin: "0px 20px" }}>
          <SolidButton onClick={handleSubmit}>Signup</SolidButton>
          <Title level={5} style={{ margin: 0 }}>
            Already have an account?
            <Link
              className="navigation-link"
              onClick={() => navigate("/signin")}
            >
              Sign In
            </Link>
          </Title>
        </Flex>
      </Flex>

      <SignupAlert open={dialogOpen} handleClose={() => setDialogOpen(false)} />
    </div>
  );
};

export default Signup;
