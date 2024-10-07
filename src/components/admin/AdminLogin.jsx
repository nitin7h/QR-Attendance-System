"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { storeAdminData } from "@/redux/slices/adminSlice";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function AdminLogin() {
  const router = useRouter();
  const dispatch = useDispatch();
  const submitHandle = async (e) => {
    let formData = {
      email: e.get("email"),
      password: e.get("password"),
    };

    // console.log("formData : ", formData);
    const { email, password } = formData;
    if (!email || !password) {
      return alert("Please fill all Fields");
    }

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.response) {
        const { fullName, adminId, email } = data.response;

        let storeData = {
          fullName,
          adminId,
          email,
        };
        dispatch(storeAdminData(storeData));
        router.push("/admin/dashboard");
      }
      if (data.response === false) {
        toast.error(data.message);
      }

      // console.log("Response POST:", data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="h-screen flex justify-center">
        <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
          <form action={submitHandle} className="bg-white">
            <h1 className="text-gray-800 font-bold text-2xl mb-1">
              Hello Again!
            </h1>
            <p className="text-sm font-normal text-gray-600 mb-7">
              Welcome Back
            </p>

            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
              <input
                className="pl-2 outline-none border-none"
                type="text"
                name="email"
                id=""
                placeholder="Email Address"
              />
            </div>
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                className="pl-2 outline-none border-none"
                type="text"
                name="password"
                id=""
                placeholder="Password"
              />
            </div>
            <button
              type="submit"
              className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
            >
              Login
            </button>
            <span className="text-sm ml-2 hover:text-blue-500 cursor-pointer">
              <Link href={"/admin/signup"}>want Register ?</Link>
            </span>
          </form>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}
