import { Route, Routes } from "react-router-dom";
import Dashbaord from "./Pages/Dashbaord";
import UserPage from "./Pages/UserPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashbaord />} />
      <Route path="/user" element={<UserPage />} />
      <Route path="/messages" element={<div>Messages Page</div>} />
      <Route path="/customers" element={<div>Customers Page</div>} />
    </Routes>
  );
}

export default App;
