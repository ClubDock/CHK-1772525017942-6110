import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/dashboard");
  };

  return (
    <div
      style={{
        height: "100vh",
        background: "#060b1a",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        color: "white",
        fontFamily: "sans-serif"
      }}
    >
      <h1 style={{ fontSize: "36px", marginBottom: "10px" }}>
        🚀 ClubOS
      </h1>

      <p style={{ marginBottom: "40px", opacity: 0.7 }}>
        Manage your club members, tasks and events
      </p>

      <button
        onClick={handleLogin}
        style={{
          padding: "14px 30px",
          fontSize: "16px",
          borderRadius: "10px",
          border: "none",
          background: "#4f7cff",
          color: "white",
          cursor: "pointer",
          boxShadow: "0px 6px 20px rgba(79,124,255,0.5)"
        }}
      >
        🚀 Enter Dashboard
      </button>
    </div>
  );
}

export default Login;