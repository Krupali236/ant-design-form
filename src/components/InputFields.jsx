import React, { useState } from "react";
import { Form, Input, Button, Typography, Row, Col, Card } from "antd";
import {
  UserOutlined,
  MailOutlined,
  LockOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
} from "@ant-design/icons";
const InputFields = ({
  inputValue,
  setInputValue,
  errors,
  fields = ["username", "email", "password"],
}) => { 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <Form      
      layout="vertical"      
      autoComplete="off"
      className="signup-form custom-addon-wrapper"
    >      
      {fields.includes("username") && (
        <>  
          <Input
            addonBefore={<UserOutlined className="color-white" />}
            type="text"
            name="username"
            value={inputValue?.username}
            onChange={handleChange}
            placeholder="Username"
            status={errors?.username ? "error" : ""}
            style={{margin:"10px 0px" , padding:"10px !important"}}
          />
          {errors?.username && <Typography color="error" style={{color:" #d32f2f"}}>{errors.username}</Typography>}
        </>
      )}
    
    {/* Email (Only for Signup) */}
    {fields.includes("email") && (
        <>
        <Input
          addonBefore={<MailOutlined className="color-white" />}
          type="email"
            name="email"
            value={inputValue?.email}
            onChange={handleChange}
            placeholder="Email"
            status={errors?.email ? "error" : ""}
          style={{margin:"10px 0px" , fontSize:"18px" }}
        />
       {errors?.email && (
            <Typography color="error" style={{color:" #d32f2f"}}>{errors.email}</Typography>
          )}
        </>
      )}


     {/* Password */}
     {fields.includes("password") && (
        <>
        <Input.Password       
          addonBefore={<LockOutlined className="color-white" />}
          name="password"
          value={inputValue?.password}
          onChange={handleChange}
          placeholder="Password"
          status={errors?.password ? "error" : ""}
          style={{margin:"10px 0px",}}          
          iconRender={(visible) =>
            visible ? (
              <EyeTwoTone className="password-icon" />
            ) : (
              <EyeInvisibleOutlined className="password-icon" />
            )
          }
        />
        {errors?.password && (
            <Typography color="error" style={{color:" #d32f2f"}}>{errors.password}</Typography>
          )}
        </>
      )}

      {/* <Form.Item>     
        <SignUpBtn />
      </Form.Item> */}
    </Form>
  );
};

export default InputFields;
