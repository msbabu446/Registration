import { RouterProvider } from "react-router-dom";
import "./App.css";
import routes from "./routes";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="container">
      <Header />
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
