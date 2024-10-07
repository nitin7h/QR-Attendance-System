"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

export default function AdminDashboard() {
  const selector = useSelector((state) => state.admin.adminData);
  const navigate = useRouter();

  console.log("selector : ", selector);
  useEffect(() => {
    if (selector.length === 0) {
      return navigate.push("/admin/login");
    }
  }, []);

  return (
    <>
      {selector.length > 0 ? (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
          <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
            <div className="flex justify-center flex-col gap-5">
              <div className="relative max-w-lg p-8 border bg-black border-gray-100 shadow-xl rounded-xl">
                <Link href="/studentData">
                  <span className="absolute right-4 top-4 rounded-full px-3 py-1.5 bg-green-100 text-green-600 font-medium text-xs">
                    Student Details
                  </span>
                </Link>

                <div className="mt-4 text-gray-200 sm:pr-8">
                  <svg
                    className="w-8 h-8 sm:w-10 sm:h-10"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    ></path>
                  </svg>

                  {selector.map((data, index) => {
                    return (
                      <div key={index}>
                        <h5 className="mt-4 text-xl font-bold text-gray-300">
                          Name : {data.fullName}
                        </h5>

                        <p className="mt-2 text-sm">
                          You are Admin, You can access student's data.
                        </p>
                        <h5 className="mt-4 text-xl font-bold text-gray-300">
                          Admin ID : {data.adminId}
                        </h5>

                        <p className="mt-2 text-sm">This is your Admin Id</p>
                        <h5 className="mt-4 text-xl font-bold text-gray-300">
                          E-Mail : {data.email}
                        </h5>

                        <p className="mt-2 text-sm">
                          This is your E-mail address
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* <QRCode value={data} size={256} level="H" includeMargin={true} /> */}
              {/* <button
            //   onClick={generateQRCode}
            type="button"
            className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Generate QR-Code
          </button> */}
            </div>
          </main>
        </div>
      ) : null}
    </>
  );
}
