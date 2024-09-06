import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import UserList from "./components/UserList";
import UserDetails from "./components/UserDetails"; 

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/userdetails/:userId" element={<UserDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
