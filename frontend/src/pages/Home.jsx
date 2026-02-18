import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
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
          textAlign: "center",
          width: "400px",
        }}
      >
        <h1
          style={{
            marginBottom: "15px",
            color: "#333",
            fontSize: "28px",
          }}
        >
          Welcome to LMS
        </h1>

        <p
          style={{
            marginBottom: "35px",
            color: "#666",
            fontSize: "15px",
          }}
        >
          Manage your courses and track your learning journey
        </p>

        <button
          onClick={() => navigate("/login")}
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
          onMouseOver={(e) => (e.target.style.backgroundColor = "#2e59d9")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#4e73df")}
        >
          Student Login
        </button>
      </div>
    </div>
  );
}

export default Home;
