import React from "react";
import { Button, Typography } from "antd";
import OutlinedButton from "../components/OutlinedButton";
import SignInBtn from "../components/SignInBtn";
import { useNavigate } from "react-router-dom";

const { Title, Paragraph } = Typography;
const WelcomePage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div style={styles.container}>
        <div style={styles.content}>
          <Title level={2} style={{ color: "#fff", marginBottom: 16 }}>
            Welcome Back!
          </Title>
          <Paragraph style={styles.paragraph}>
            Sign up today to get exclusive updates, special offers, and insider
            content straight to your inbox.
          </Paragraph>
          <Paragraph style={styles.paragraph}>
            Be the first to know about new products, latest news, member-only
            deals!
          </Paragraph>
          {/* <OutlinedButton>Sign Up</OutlinedButton> */}
          <SignInBtn onClick={() => navigate("/signup")}>Sign Up</SignInBtn>
        </div>
      </div>
    </div>
  );
};
const styles = {
  container: {
    backgroundColor: "#00AF87",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "0 20px",
  },
  content: {
    maxWidth: "700px",
  },
  paragraph: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 8,
  },
  button: {
    borderColor: "#fff",
    color: "#fff",
    marginTop: 20,
    padding: "0 40px",
  },
};
export default WelcomePage;
