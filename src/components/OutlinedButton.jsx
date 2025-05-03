import React from "react";
import { Button } from "antd";
const OutlinedButton = ({ children, onClick }) => {
  return (
    <div>
      <Button
        type="default"
        variant="outlined"
        //   color="white"
        onClick={onClick}
        style={{ backgroundColor: "transparent" }}
        // onClick={() => navigate("/login")}
        className="sign-in-btn"
      >
        {/* Sign In */}
        {children}
      </Button>
    </div>
  );
};

export default OutlinedButton;
