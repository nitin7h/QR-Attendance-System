import React from "react";
import LoginPage from "../pages/LoginPage";
export default function StudentLogin() {
  const data = {
    apiUrl: "/api/student/login",
    linkUrl: "/student/signup",
    navigateTo: "/student/dashboard",
  };
  return <LoginPage data={data}></LoginPage>;
}
