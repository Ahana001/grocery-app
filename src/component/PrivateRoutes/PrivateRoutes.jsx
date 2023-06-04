import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../context/AuthContext";

export function PrivateRoutes({ children }) {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);

  return currentUser.token ? children : navigate("/user/login");
}
