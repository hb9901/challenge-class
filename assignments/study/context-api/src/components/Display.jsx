import { useAuth } from "../contexts/auth.context";

function Display() {
  const { isLoggedIn } = useAuth();

  console.log("Display")
  return <div>{isLoggedIn.toString()}</div>;
}

export default Display;
