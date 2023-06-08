import { createContext, useState, useEffect, useContext } from "react";

import { loginRequest, signUpRequest } from "../service/Service";
import { DisplayContext } from "./DisplayContext";

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [error, setError] = useState(null);
  const [currentUser, setCurrentUser] = useState({ token: null, user: null });
  const { showToast } = useContext(DisplayContext);
  useEffect(() => {
    const localStorageData = JSON.parse(localStorage.getItem("loginDetails"));
    if (localStorageData) {
      setCurrentUser(() => ({
        user: localStorageData?.user,
        token: localStorageData?.token,
      }));
    }
  }, []);

  async function loginHandler(email, password) {
    const { data, status } = await loginRequest(email, password);

    if (status === 200) {
      const { encodedToken, foundUser } = data;
      localStorage.setItem(
        "loginDetails",
        JSON.stringify({
          token: encodedToken,
          user: foundUser,
        })
      );
      setError(() => null);
      setCurrentUser(() => ({
        user: foundUser,
        token: encodedToken,
      }));
      showToast("success", "", "successfully logeed in");
    } else if (status === 404) {
      setError(() => data.statusText);
      showToast("warning", "", `${data.statusText}`);
    } else if (status === 401) {
      setError(() => data.statusText);
      showToast("warning", "", `${data.statusText}`);
    }
  }

  async function signUpHandler(firstName, lastName, email, password) {
    const { data, status } = await signUpRequest(
      firstName,
      lastName,
      email,
      password
    );

    if (status === 201) {
      const { encodedToken, createdUser } = data;
      localStorage.setItem(
        "loginDetails",
        JSON.stringify({
          token: encodedToken,
          user: createdUser,
        })
      );
      setError(() => null);
      setCurrentUser(() => ({
        user: createdUser,
        token: encodedToken,
      }));
      showToast("success", "", "successfully signed up");
    } else if (status === 422) {
      setError(() => data.statusText);
      showToast("warning", "", `${data.statusText}`);
    }
  }

  async function LogOutHandler() {
    localStorage.removeItem("loginDetails");
    setCurrentUser(() => ({ token: null, user: null }));
    showToast("success", "", "successfully logged out ");
  }
  return (
    <AuthContext.Provider
      value={{
        currentUser,
        error,
        setError,
        loginHandler,
        signUpHandler,
        LogOutHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
