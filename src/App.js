import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import { useState } from "react";

function App() {
  const [user, setUser] = useState({
    password: "Oybek",
  });
  const [login, setLogin] = useState(false);

  const routes = createBrowserRouter([
    {
      index: true,
      path: "/login",
      element: <Login setLogin={setLogin} user={user} />,
    },
    {
      path: "/",
      element: <Home login={login} />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
