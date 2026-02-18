import { useNavigate } from "react-router-dom";

function Dashboard() {

  const navigate = useNavigate();

  return (
    <div>
      <h2>Dashboard</h2>

      <button onClick={() => navigate("/courses")}>
        View Courses
      </button>

      <br /><br />

      <button onClick={() => {
        localStorage.removeItem("token");
        navigate("/");
      }}>
        Logout
      </button>
    </div>
  );
}

export default Dashboard;
