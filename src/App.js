import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Admin from "./adminpages/Admin";
import AdminDashboard from "./adminpages/AdminDashboard";
import JobPosting from "./components/JobPosting";
import Signup from "./pages/Signup";
import Test1 from "./pages/Test1";
import "./css/app.css";
import Body_Jobpost from "./components/Body_Jobpost";
import PwdProfile from "./components/PwdProfile";
import AddJobPost from "./components/AddJobPost";
import AdminCompany from "./components/AdminCompany";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/posting" element={<JobPosting />} />
          <Route path="/adminpages" element={<Admin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="test1" element={<Test1 />} />
          <Route path="/body_jobpost" element={<Body_Jobpost />} />
          <Route path="/pwdprofile" element={<PwdProfile />} />
          <Route path="/addjobpost" element={<AddJobPost />} />
          <Route path="/adminpages" element={<AdminDashboard />} />
          <Route path="/admincompany" element={<AdminCompany />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
