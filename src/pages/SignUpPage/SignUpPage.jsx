import { useLocation, useNavigate } from "react-router-dom";
import GlobalStyles from "../../component/GlobalStyle/GlobalStyle";
import { Navbar } from "../../component/Navbar/Navbar";

import "./SignUpPage.css";

export function SignUpPage() {
  const location = useLocation();
  const navigate = useNavigate();
  function redirectToSignUpOnHandler() {
    navigate("/user/login");
  }
  if (location.pathname === "/user/signup") {
    return (
      <>
        <GlobalStyles />
        <Navbar />
        <div className="SignUpPageContainer">
          <div className="SignUpFormBorder">
            <div className="SignUpForm">
              <div className="SignUpFormHeader">SignUp</div>
              <div className="SignUpFormEmailContainer">
                <label htmlFor="email">Enter Email</label>
                <input type="text" />
              </div>
              <div className="SignUpFormPasswordContainer">
                <label htmlFor="password">Enter Password</label>
                <input type="text" />
              </div>
              <button>SignUp</button>
              <div className="LoginLink">
                Already have an account ?
                <span onClick={redirectToSignUpOnHandler}>Login</span>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
