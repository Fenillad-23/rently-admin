import "./login.css";
import React, { useState } from "react";
import VisibilityOff from "../assets/images/visibility_off.svg";
import VisibilityOn from "../assets/images/visibility_on.svg";
import Logo from "../assets/images/logo.png";
import CustomButton from "../components/CustomButton.js";
import CustomInputField from "../components/CustomInputField.js";
import { validateLogin } from "../helper/validation.js";
import ErrorMessage from "../components/ErrorMessage";
import StrConst from "../helper/StrConst.js";
import { useNavigate } from "react-router-dom";
function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [passwordIcon, setPasswordIcon] = useState(VisibilityOff);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setErrorMessage] = useState({});
  const changePassVisibility = () => {
    setShowPassword(!showPassword);
    showPassword
      ? setPasswordIcon(VisibilityOn)
      : setPasswordIcon(VisibilityOff);
  };
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // console.log(e.target.value);
  };

  const login = (e) => {
    e.preventDefault();
    const errors = validateLogin(formData);
    setErrorMessage(errors);
    if (Object.keys(errors).length > 0) {
      alert("Invalid credentials");
    } else {
      alert("Login successful");
      navigate("/Tenants");
    }
  };
  return (
    <div className="wrapper">
      <div className="login-container">
      <div className="login-card">
        <div className="logo-container">
          <img src={Logo} className="logo" />
        </div>
        <div className="form-container">
          <form onSubmit={login} method="post">
            <h3>{StrConst.LOGIN}</h3>
            <div>
              <CustomInputField
                type={StrConst.EMAIL}
                placeholder="User Name"
                name={StrConst.USERNAME}
                value={formData.username}
                onChange={handleInputChange}
              ></CustomInputField>
              {error.username && <ErrorMessage error={error.username} />}
            </div>
            <div className="password-toggle">
              <div class="input-grp">
                <CustomInputField
                  type={showPassword ? StrConst.TEXT : StrConst.PASSWORD}
                  placeholder="Password"
                  name={StrConst.PASSWORD}
                  value={formData.password}
                  onChange={handleInputChange}
                />

                <span className="password-icon" onClick={changePassVisibility}>
                  <img src={passwordIcon} />
                </span>
                {error.password && <ErrorMessage error={error.password} />}
              </div>
            </div>
            <div className="submit-container">
              <CustomButton
                type={StrConst.SUBMIT}
                className="btn-login"
                onClick={login}
              >
                {StrConst.LOGIN}
              </CustomButton>
            </div>
            <div className="forgot-password">{StrConst.FORGOTPASS}</div>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Login;
