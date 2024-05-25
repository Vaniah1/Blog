import { Outlet } from "react-router-dom";
import "../src/style.css";

function App() {
  return (
    <>
      <div>
        <Outlet />
      </div>
    </>
  );
}
export default App;
