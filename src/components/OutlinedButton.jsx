import React from "react";
import { Button } from "antd";
const OutlinedButton = ({ children, onClick }) => {
  return (
    <div>
      <Button
        type="default"
        // color="white"
        onClick={onClick}
        style={{
          backgroundColor: "transparent",
          color: "white !important",
          border: "2px  solid white !important",
          fontSize: "18px !important",         
        }}
        className="outline-btn"
      >
        {/* Sign In */}
        {children}
      </Button>
    </div>
  );
};

export default OutlinedButton;
