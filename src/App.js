import "./App.css";
import { useRoutes  } from "react-router";
import Home from "./pages/Home";
import AddUser from "./pages/AddUser"
import EditUser from "./pages/EditUser"
import BlogAll from "./pages/BlogAll"
const App = () => {
  const routes = useRoutes([
      { path: '/', element: <Home /> },
      { path: '/AddUser', element: <AddUser /> },
      { path: '/editUser/:id', element: <EditUser /> },
      { path: '/BlogAll', element: <BlogAll /> },
  ]);

  return routes;
};

export default App;