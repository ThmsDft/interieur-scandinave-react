import { Navigate } from "react-router-dom";

export const AuthorizedUser = ({ children }) => {
  const admin = JSON.parse(localStorage.getItem("user"));
  

  if (admin.login !== "admin") {
    return <Navigate to={"/"} replace={true}></Navigate>;
  }

  return children;
};
