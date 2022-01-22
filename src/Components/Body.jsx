import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import Navbar from "./Navbar";
import axios from "axios";

export default function Body() {
  const [{ isAuth }, toggleAuth] = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    setIsLoading(true);

    return axios
      .post("https://reqres.in/api/login", {
        username: username,
        password: password
      })
      .then((res) => {
        setToken(res.data.token);

        if (res.data.token !== "") {
          toggleAuth();
        }
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  };

  const handleLogOut = () => {
    setToken("");
    toggleAuth();
  };

  return (
    <div>
      <Navbar />
      {isLoading && <p>Loading...</p>}
      {!isAuth ? (
        <div>
          <input
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            name="username"
            placeholder="Username"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            placeholder="Password"
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      ) : (
        <div>
          <h3>Welcome to your Dashboard!</h3>
          <button onClick={handleLogOut}>Log Out</button>
        </div>
      )}
    </div>
  );
}
