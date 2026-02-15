import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import UserPage from "./Pages/UserPage";
import Analytics from "./Components/Analytics";
import CreateUser from "./Pages/CreateUser";
import ViewUser from "./Pages/ViewUser";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Ameer from "./Pages/Ameer";
import CreateAmeer from "./Pages/CreateAmeer";
import ViewAmeer from "./Pages/ViewAmeer";
import Settings from "./Pages/Settings";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route path="/" element={<Home />}>
        <Route index element={<Analytics />} />
        <Route path="user" element={<UserPage />} />
        <Route path="/user/create" element={<CreateUser />} />
        <Route path="/user/view/:id" element={<ViewUser />} />
        <Route path="/ameer" element={<Ameer />} />
        <Route path="/ameer/create" element={<CreateAmeer />} />
        <Route path="/ameer/view/:id" element={<ViewAmeer />} />
        <Route path="settings" element={<Settings />} />
        {/* <Route path="customers" element={<div>Customers Page</div>} /> */}
        
      </Route>
    </Routes>
  );
}

export default App;
