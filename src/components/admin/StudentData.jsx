"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function StudentData() {
  const [studentData, setStudentData] = useState([]);
  const navigate = useRouter();
  const selector = useSelector((state) => state.admin.adminData);

  useEffect(() => {
    const data = async () => {
      try {
        const response = await fetch("/api/admin/studentDetails", {
          method: "GET",
        });
        const data = await response.json();
        console.log("data : ", data);
        setStudentData(data);
      } catch (error) {
        console.log(error);
      }
    };
    data();
  }, []);

  // console.log("studentData : ", studentData);
  // console.log("studentData.mergeData : ", studentData.mergeData?.attendance);

  useEffect(() => {
    if (selector.length === 0) {
      return navigate.push("/admin/login");
    }
  }, []);

  return (
    <>
      {selector.length > 0 ? (
        <div className="flex min-h-screen items-center justify-center ">
          <div className="overflow-x-auto ">
            <table className="min-w-full bg-white shadow-md rounded-xl ">
              <thead>
                <tr className="bg-blue-gray-100 text-gray-700">
                  <th className="py-3 px-4 text-left   ">Student Details</th>
                </tr>
                <tr className="bg-blue-gray-100 text-gray-700">
                  <th className="py-3 px-4 text-left">Student Id</th>
                  <th className="py-3 px-4 text-left">Name</th>
                  <th className="py-3 px-4 text-left">E-Mail</th>
                  <th className="py-3 px-4 text-left">Total Presents</th>
                </tr>
              </thead>
              <tbody className="text-blue-gray-900">
                {/* <tr className="border-b border-blue-gray-200">
              <td className="py-3 px-4 text-red-800 font-bold">
                Student Id 25
              </td>
              <td className="py-3 px-4 ">Nitin</td>
              <td className="py-3 px-4 ">nitin@gmail.com</td>
              <td className="py-3 px-4 font-medium text-blue-600">Present 8</td>
            </tr> */}
                {studentData &&
                  studentData.mergeData?.studentData.map((data, index) => {
                    return (
                      <tr key={index} className="border-b border-blue-gray-200">
                        <td className="py-3 px-4 text-blue-800 font-bold">
                          <Link href={`/admin/student/${data.studentId}`}>
                            {data.studentId}
                          </Link>
                        </td>
                        <td className="py-3 px-4 ">{data.fullName}</td>
                        <td className="py-3 px-4 ">{data.email}</td>
                        <td className="py-3 px-4 font-medium ">
                          {
                            studentData.mergeData?.attendance.filter(
                              (attendance) =>
                                attendance.studentId === data.studentId
                            ).length
                          }
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      ) : null}
    </>
  );
}
