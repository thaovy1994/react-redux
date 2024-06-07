import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { postLogin } from "../../services/apiServices";
import "./Login.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    const validateEmail = (email) => {
      return String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };

    const isValidEmail = validateEmail(email);
    if (!isValidEmail) {
      toast.error("Invalid email");
      return;
    }
    if (!password) {
      toast.error("Invalid password");
      return;
    }

    let res = await postLogin(email, password);
    if (res.data && res.data.EC === 0) {
      toast.success(res.data.EM);
      navigate("/");
    }
    if (res.data && +res.data.EC !== 0) {
      toast.error(res.data.EM);
    }
  };
  return (
    <div className="login-container">
      <div className="login-header">
        <span>Don't have an account yet?</span>
        <button
          onClick={() => {
            navigate("/register");
          }}
        >
          Sign up
        </button>
        <span>Need help?</span>
      </div>
      <div className="login-title col-3 mx-auto">Login</div>
      <div className="login-welcome col-3 mx-auto">Hello, who's this ?</div>
      <div className="login-content-form col-3 mx-auto">
        <div className="form-group">
          <label>Email</label>
          <input
            type={"email"}
            className="form-control"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <span className="forgot-password">Forgot password?</span>
        <div>
          <button className="btn-submit" onClick={() => handleLogin()}>
            Login
          </button>
        </div>
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
    </div>
  );
};

export default Login;
