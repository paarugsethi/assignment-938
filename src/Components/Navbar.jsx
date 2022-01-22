import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

export default function Navbar() {
  const [{ isAuth }, toggleAuth] = useContext(AuthContext);
  console.log(isAuth, "false");

  return <div>{!isAuth ? <h3>LOGGED OUT</h3> : <h3>LOGGED IN</h3>}</div>;
}
