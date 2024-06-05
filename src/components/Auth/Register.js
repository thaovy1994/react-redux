import { useState } from "react";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { postRegister } from "../../services/apiServices";
import "./Register.scss";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [isShowPassword, setIsShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async () => {
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

    let res = await postRegister(email, password, username);
    if (res.data && res.data.EC === 0) {
      toast.success(res.data.EM);
      navigate("/");
    }
    if (res.data && +res.data.EC !== 0) {
      toast.error(res.data.EM);
    }
  };
  return (
    <div className="register-container">
      <div className="register-header">
        <span>Don't have an account yet?</span>
        <button
          onClick={() => {
            navigate("/login");
          }}
        >
          register
        </button>
        <span>Need help?</span>
      </div>
      <div className="register-title col-3 mx-auto">Sign up</div>
      <div className="register-welcome col-3 mx-auto">
        Hello, Start your journey!
      </div>
      <div className="register-content-form col-3 mx-auto">
        <div className="form-group">
          <label>Email</label>
          <input
            type={"email"}
            className="form-control"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="form-group pass-group">
          <label>Password (*)</label>
          <input
            type={isShowPassword ? "text" : "password"}
            className="form-control"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          {isShowPassword ? (
            <span className="eye-icon" onClick={() => setIsShowPassword(false)}>
              <VscEye />
            </span>
          ) : (
            <span className="eye-icon" onClick={() => setIsShowPassword(true)}>
              <VscEyeClosed />
            </span>
          )}
        </div>
        <div className="form-group">
          <label>Username</label>
          <input
            type="password"
            className="form-control"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div>
          <button className="btn-submit" onClick={() => handleRegister()}>
            Create free account
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

export default Register;
