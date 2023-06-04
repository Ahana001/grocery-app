import "./LoginPage.css";

import { debounce } from "lodash";
import { useContext, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { AuthContext } from "../../context/AuthContext";

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
    setLoginFormData({ email: guestUser.email, password: guestUser.password });
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
                  onChange={debounce((e) => {
                    setLoginFormData(() => ({
                      ...LoginformData,
                      email: e.target.value,
                    }));
                  }, 300)}
                />
              </div>
              <div className="LoginFormPasswordContainer">
                <label htmlFor="password">Enter Password</label>
                <input
                  type="text"
                  id="password"
                  required={true}
                  placeholder="abc@1234"
                  onChange={debounce(
                    (e) =>
                      setLoginFormData(() => ({
                        ...LoginformData,
                        password: e.target.value,
                      })),
                    300
                  )}
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
                <span onClick={redirectToSignUpOnHandler}>Sign Up</span>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}
