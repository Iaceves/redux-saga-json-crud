import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import UserInfo from "./pages/UserInfo";
import AddEditUser from "./pages/AddEditUser";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer />
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/userInfo/:id" element={<UserInfo />} />
          <Route path="/addUser" element={<AddEditUser />} />
          <Route path="/editUser/:id" element={<AddEditUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
