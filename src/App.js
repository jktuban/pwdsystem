import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./css/app.css";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Test1 from "./pages/Test1";

import Admin from "./adminpages/Admin";
import AdminPwd from "./adminpages/AdminPwd";
import AdminCompany from "./adminpages/AdminCompany";
import AdminDashboard from "./adminpages/AdminDashboard";
import AdminSettings from "./adminpages/AdminSettings";
import AdminReports from "./adminpages/AdminReports";

import JobPosting from "./components/JobPosting";
import Body_Jobpost from "./components/Body_Jobpost";
import PwdProfile from "./components/PwdProfile";
import AddJobPost from "./components/AddJobPost";
import AdminPwdComponents from "./components/AdminPwdComponents";
import CompanyProfile from "./components/CompanyProfile";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="test1" element={<Test1 />} />

          <Route path="/posting" element={<JobPosting />} />
          <Route path="/body_jobpost" element={<Body_Jobpost />} />
          <Route path="/pwdprofile" element={<PwdProfile />} />
          <Route path="/companyprofile" element={<CompanyProfile />} />
          <Route path="/addjobpost" element={<AddJobPost />} />
          <Route path="/adminpwdcomponets" element={<AdminPwdComponents />} />

          <Route path="/admin" element={<Admin />} />
          <Route path="/admincompany" element={<AdminCompany />} />
          <Route path="/admindashboard" element={<AdminDashboard />} />
          <Route path="/adminpwd" element={<AdminPwd />} />
          <Route path="/adminsettings" element={<AdminSettings />} />
          <Route path="/adminReports" element={<AdminReports />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
