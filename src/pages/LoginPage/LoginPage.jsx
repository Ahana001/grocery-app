import { useLocation, useNavigate } from "react-router-dom";
import "./LoginPage.css";
import GlobalStyles from "../../component/GlobalStyle/GlobalStyle";
import { Navbar } from "../../component/Navbar/Navbar";

export function LoginPage() {
  const location = useLocation();
  const navigate = useNavigate();
  function redirectToSignUpOnHandler() {
    navigate("/user/signup");
  }
  if (location.pathname === "/user/login") {
    return (
      <>
        <GlobalStyles />
        <Navbar />
        <div className="LoginPageContainer">
          <div className="LoginFormBorder">
            <div className="LoginForm">
              <div className="LoginFormHeader">Login</div>
              <div className="LoginFormEmailContainer">
                <label htmlFor="email">Enter Email</label>
                <input type="text" />
              </div>
              <div className="LoginFormPasswordContainer">
                <label htmlFor="password">Enter Password</label>
                <input type="text" />
              </div>
              <button>Login</button>
              <div className="SignUpLink">
                Don&apos;t have an account ?
                <span onClick={redirectToSignUpOnHandler}>Sing Up</span>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
