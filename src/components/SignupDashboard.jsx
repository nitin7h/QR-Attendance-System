import Link from "next/link";
import React from "react";

export default function SignupDashboard() {
  return (
    <div className="flex min-h-screen items-center justify-center ">
      <Link href="/admin/signup">
        <button
          type="button"
          className="text-white bg-purple-800 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900"
        >
          Signup as Admin
        </button>
      </Link>
      <Link href="/student/signup">
        <button
          type="button"
          className="text-white bg-purple-800 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900"
        >
          Signup as Student
        </button>
      </Link>
    </div>
  );
}
