import { createContext } from "react";
import "./App.css";
import Button from "./components/Button";
import Display from "./components/Display";
import { AuthProvider } from "./contexts/auth.context";

export const AuthContext = createContext();

function App() {

  console.log("App")
  return (
    <AuthProvider>
      <main>
        <Display />
        <Button />
      </main>
    </AuthProvider>
  );
}

export default App;
