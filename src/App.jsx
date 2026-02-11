import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import UserPage from "./Pages/UserPage";
import Analytics from "./Components/Analytics";
import CreateUser from "./Pages/CreateUser";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<Analytics />} />
        <Route path="user" element={<UserPage />} />
        <Route path="/user/create" element={<CreateUser />} />
        <Route path="messages" element={<div>Messages Page</div>} />
        <Route path="customers" element={<div>Customers Page</div>} />
      </Route>
    </Routes>
  );
}

export default App;
