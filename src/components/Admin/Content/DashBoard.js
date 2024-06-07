import { useNavigate } from "react-router-dom";
import "./Dashboard.scss";

const DashBoard = (props) => {
  const navigate = useNavigate();
  return (
    <div className="dashboard-container">
      <div className="title">Welcome to Dashboard</div>
      <div className="text-center">
        {/* html Entity */}
        <span
          className="back-homepage"
          onClick={() => {
            navigate("/");
          }}
        >
          &#60;&#60; Go back
        </span>
      </div>
    </div>
  );
};

export default DashBoard;
