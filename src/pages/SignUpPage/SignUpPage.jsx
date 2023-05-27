import { useLocation, useNavigate } from "react-router-dom";
import { Navbar } from "../../component/Navbar/Navbar";

import "./SignUpPage.css";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";

export function SignUpPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { signUpHandler, currentUser, error, setError } =
    useContext(AuthContext);
  const [signUpFormData, setSignUpFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [signFormError, setSignUpFormError] = useState({
    firstName: null,
    lastName: null,
    password: null,
    email: null,
  });
  function redirectToSignUpOnHandler() {
    navigate("/user/login");
  }

  function submitSignUpRequest(e) {
    e.preventDefault();
    const { firstName, lastName, email, password, confirmPassword } =
      signUpFormData;
    if (firstName.length < 2) {
      setSignUpFormError(() => ({
        firstName: "name should not be longer",
        email: null,
        password: null,
      }));
    } else if (lastName.length < 2) {
      setSignUpFormError(() => ({
        lastName: "name should not be longer",
        email: null,
        password: null,
      }));
    } else if (!email.includes("@")) {
      setSignUpFormError(() => ({
        name: null,
        email: "email is not valid",
        password: null,
      }));
    } else if (password !== confirmPassword) {
      setSignUpFormError(() => ({
        name: null,
        email: null,
        password: "password and confirm password does not match",
      }));
    } else {
      signUpHandler(firstName, lastName, email, password);
    }
  }
  useEffect(() => {
    setError(() => null);
  }, []);
  useEffect(() => {
    if (currentUser.token) {
      navigate(location?.state?.from.pathname || "/", { replace: true });
    }
  }, [currentUser.token]);

  if (location.pathname === "/user/signup") {
    return (
      <>
        <Navbar />
        <div className="SignUpPageContainer">
          <div className="SignUpFormBorder">
            <form className="SignUpForm" onSubmit={submitSignUpRequest}>
              <div className="SignUpFormHeader">SignUp</div>
              <div className="SignUpFormNameContainer">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  required={true}
                  placeholder="John"
                  onChange={(e) =>
                    setSignUpFormData({
                      ...signUpFormData,
                      firstName: e.target.value,
                    })
                  }
                />
                {signFormError.name && (
                  <div
                    style={{
                      color: "red",
                      fontSize: "small",
                      height: "10px",
                      alignSelf: "flex-start",
                    }}
                  >
                    {signFormError.firstName}
                  </div>
                )}
              </div>
              <div className="SignUpFormNameContainer">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  required={true}
                  placeholder="Doe"
                  onChange={(e) =>
                    setSignUpFormData({
                      ...signUpFormData,
                      lastName: e.target.value,
                    })
                  }
                />
                {signFormError.name && (
                  <div
                    style={{
                      color: "red",
                      fontSize: "small",
                      height: "10px",
                      alignSelf: "flex-start",
                    }}
                  >
                    {signFormError.lastName}
                  </div>
                )}
              </div>

              <div className="SignUpFormEmailContainer">
                <label htmlFor="email">Enter Email</label>
                <input
                  type="text"
                  id="email"
                  required={true}
                  placeholder="abc@gmail.com"
                  onChange={(e) =>
                    setSignUpFormData({
                      ...signUpFormData,
                      email: e.target.value,
                    })
                  }
                />
                {signFormError.email && (
                  <div
                    style={{
                      color: "red",
                      fontSize: "small",
                      height: "10px",
                      alignSelf: "flex-start",
                    }}
                  >
                    {signFormError.email}
                  </div>
                )}
              </div>

              <div className="SignUpFormPasswordContainer">
                <label htmlFor="password">Enter Password</label>
                <input
                  type="text"
                  id="password"
                  required={true}
                  placeholder="abc@1234"
                  onChange={(e) =>
                    setSignUpFormData({
                      ...signUpFormData,
                      password: e.target.value,
                    })
                  }
                />
              </div>
              <div className="SignUpFormConfirmPasswordContainer">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="text"
                  id="confirmPassword"
                  required={true}
                  placeholder="abc@1234"
                  onChange={(e) => {
                    setSignUpFormData({
                      ...signUpFormData,
                      confirmPassword: e.target.value,
                    });
                  }}
                />
                {signFormError.password && (
                  <div
                    style={{
                      color: "red",
                      fontSize: "small",
                      height: "10px",
                      alignSelf: "flex-start",
                    }}
                  >
                    {signFormError.password}
                  </div>
                )}
              </div>
              {error && (
                <div
                  style={{
                    fontSize: "small",
                    color: "red",
                    height: "10px",
                  }}
                >
                  {error}
                </div>
              )}
              <button type="submit">SignUp</button>
              <div className="LoginLink">
                Already have an account ?
                <span onClick={redirectToSignUpOnHandler}>Login</span>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}