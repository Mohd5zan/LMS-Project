import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await api.post("/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      navigate("/dashboard");
    } catch {
      alert("Login Failed");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(to right, #4e73df, #1cc88a)",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "60px 50px",
          borderRadius: "12px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
          width: "400px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            marginBottom: "30px",
            color: "#333",
          }}
        >
          Student Login
        </h2>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "20px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            fontSize: "14px",
          }}
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "30px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            fontSize: "14px",
          }}
        />

        <button
          onClick={handleLogin}
          style={{
            width: "100%",
            padding: "12px",
            fontSize: "16px",
            backgroundColor: "#4e73df",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            transition: "0.3s",
          }}
          onMouseOver={(e) =>
            (e.target.style.backgroundColor = "#2e59d9")
          }
          onMouseOut={(e) =>
            (e.target.style.backgroundColor = "#4e73df")
          }
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
