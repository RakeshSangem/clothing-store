import Home from "./routes/home/home.component";
import { Routes, Route } from "react-router-dom";
import Navbar from "./routes/Navigation/Navbar.component";
import Authentication from "./routes/authentication/Authentication.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="authentication" element={<Authentication />} />
      </Route>
    </Routes>
  );
};
export default App;
