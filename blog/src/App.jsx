import { Outlet } from "react-router-dom";
import "./style.css";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <>
      {/* <SignIn /> */}
      <div>
        <Outlet />
      </div>
    </>
  );
}
export default App;
