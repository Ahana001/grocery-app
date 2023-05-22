import "./LoginPage.css";

import { useLocation, useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";

import { AuthContext } from "../../context/AuthContext";
import { Navbar } from "../../component/Navbar/Navbar";

export function LoginPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [LoginformData, setLoginFormData] = useState({
    email: "",
    password: "",
  });
  const { error, loginHandler, currentUser } = useContext(AuthContext);
  const guestUser = {
    email: "adarshbalika@gmail.com",
    password: "adarshbalika",
  };
  function redirectToSignUpOnHandler() {
    navigate("/user/signup");
  }

  function submitLoginRequest(e) {
    e.preventDefault();
    loginHandler(LoginformData.email, LoginformData.password);
  }

  function submitLoginRequestAsGuest(e) {
    e.preventDefault();
    loginHandler(guestUser.email, guestUser.password);
  }
  useEffect(() => {
    if (currentUser.token) {
      navigate(location?.state?.from.pathname || "/", { replace: true });
    }
  }, [currentUser.token]);
  if (location.pathname === "/user/login") {
    return (
      <>
        <Navbar />
        <div className="LoginPageContainer">
          <div className="LoginFormBorder">
            <form className="LoginForm" onSubmit={submitLoginRequest}>
              <div className="LoginFormHeader">Login</div>
              <div className="LoginFormEmailContainer">
                <label htmlFor="email">Enter Email</label>
                <input
                  type="text"
                  id="email"
                  required={true}
                  placeholder="abc@gmail.com"
                  onChange={(e) =>
                    setLoginFormData(() => ({
                      ...LoginformData,
                      email: e.target.value,
                    }))
                  }
                />
              </div>
              <div className="LoginFormPasswordContainer">
                <label htmlFor="password">Enter Password</label>
                <input
                  type="text"
                  id="password"
                  required={true}
                  placeholder="abc@1234"
                  onChange={(e) =>
                    setLoginFormData(() => ({
                      ...LoginformData,
                      password: e.target.value,
                    }))
                  }
                />
              </div>
              {error && (
                <div
                  style={{
                    fontSize: "small",
                    color: "red",
                    height: "10px",
                    alignSelf: "flex-start",
                  }}
                >
                  {error}
                </div>
              )}
              <div className="LoginButtonContainer">
                <button type="submit">Login</button>
                <button type="submit" onClick={submitLoginRequestAsGuest}>
                  Login As Guest
                </button>
              </div>

              <div className="SignUpLink">
                Don&apos;t have an account ?
                <span onClick={redirectToSignUpOnHandler}>Sing Up</span>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}
