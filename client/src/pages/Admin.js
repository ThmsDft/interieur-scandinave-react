import React, { useContext, useState } from "react";
import {useNavigate} from "react-router-dom"
import "../css/Admin.css";
import { AuthContext } from "../context/authContext";

function Admin() {
  const [inputs, setInputs] = useState({
    login: "",
    password: "",
  });

  const navigate = useNavigate();

  const { login } = useContext(AuthContext)


  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(inputs)
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="admin">
      <form>
        <h1>Admin</h1>
        <input
          type="text"
          name="login"
          placeholder="Login"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Connexion</button>
      </form>
    </div>
  );
}

export default Admin;
