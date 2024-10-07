import React from "react";
import SingupPage from "../pages/SingupPage";
export default function StudentSignup() {
  const data = {
    apiUrl: "/api/student/signup",
    linkUrl: "/student/login",
    navigateTo: "/student/dashboard",
  };
  return <SingupPage data={data} />;
}
