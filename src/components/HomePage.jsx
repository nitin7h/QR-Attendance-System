import Link from "next/link";
import React from "react";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-8 min-h-screen items-center justify-center ">
      <div className="flex gap-4">
        <Link href="/loginDashboard">
          <button
            type="button"
            className="text-white bg-purple-800 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900"
          >
            Login
          </button>
        </Link>
        <Link href="/signupDashboard">
          <button
            type="button"
            className="text-white bg-purple-800 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900"
          >
            Signup
          </button>
        </Link>
      </div>
      <Link href="/qrscanner">
        <button
          type="button"
          className="text-white bg-green-700 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900"
        >
          Scanner
        </button>
      </Link>
    </div>
  );
}
