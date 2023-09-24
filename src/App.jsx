import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <Outlet></Outlet>
      Copyright (c) 2023 Design by{" "}
      <a href="http://www.srdreamlab.com">SR Dream Lab</a>
    </>
  );
}

export default App;
