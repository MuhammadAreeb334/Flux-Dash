import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import UserPage from "./Pages/UserPage";
import Analytics from "./Components/Analytics";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}> 
      <Route index element={<Analytics />} />
      <Route path="user" element={<UserPage />} />
      <Route path="messages" element={<div>Messages Page</div>} />
      <Route path="customers" element={<div>Customer Page Page</div>} />
      </Route>
    </Routes>
  );
}

export default App;
