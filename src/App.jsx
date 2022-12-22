import Home from "./routes/home/home.component";
import { Routes, Route } from "react-router-dom";
import Navbar from "./routes/Navigation/Navbar.component";
import SignIn from "./routes/sign-in/signin.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="signIn" element={<SignIn />} />
      </Route>
    </Routes>
  );
};
export default App;
