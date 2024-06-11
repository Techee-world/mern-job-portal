import React from "react";
import Register from "./component/auth/register/Register";
import Login from "./component/auth/login/Login";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Banner from "./component/home/Banner";
import Navbar from "./component/nav/Navbar";
import JobPageIndex from "./component/jobSearchPage/JobPageIndex";
import Admin from "./adminComponent/adminPage/Admin";
import ApplicationForm from "./adminComponent/jobApplication/ApplicationForm";
import AdminNavbar from "./adminComponent/adminNav/AdminNavbar";
import ApplicationList from "./adminComponent/jobApplication/ApplicationList";

const App = () => {
  const { pathname } = useLocation();

  return (
    <div>
      {pathname !== "/admin" &&
       pathname !== "/application-form" &&
      pathname !== '/application-list' ? <Navbar /> : <AdminNavbar />}

      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/job-find" element={<JobPageIndex />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/application-form" element={<ApplicationForm />} />
        <Route path="/application-list" element={<ApplicationList />} />
      </Routes>
    </div>
  );
};

export default App;
