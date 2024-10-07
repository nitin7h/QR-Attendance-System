"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

export default function Attendance() {
  const selector = useSelector((state) => state.student.studentData);
  console.log("selector : ", selector);
  const navigate = useRouter();
  const [progressData, setProgressData] = React.useState();
  const studentId = selector?.[0]?.studentId || null;
  console.log("studentId  : ", studentId);
  useEffect(() => {
    if (studentId) {
      const fetchApi = async () => {
        const response = await fetch("/api/student/progress", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({ studentId }),
        });

        const data = await response.json();

        console.log("data : ", data);

        setProgressData(data.timeData);
      };

      fetchApi();
    }
  }, [selector]);

  console.log("attendance : ", progressData);
  useEffect(() => {
    if (selector.length === 0) {
      return navigate.push("/student/login");
    }
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center ">
      {selector.length > 0 ? (
        <div className="overflow-x-auto ">
          <table className="min-w-full bg-white shadow-md rounded-xl ">
            <thead>
              <tr className="bg-blue-gray-100 text-gray-700">
                <th className="py-3 px-4 text-left   ">
                  Student ID :{" "}
                  <span className="text-green-600">
                    {studentId && studentId}
                  </span>
                </th>
              </tr>
              <tr className="bg-blue-gray-100 text-gray-700">
                <th className="py-3 px-4 text-left">Date</th>
                <th className="py-3 px-4 text-left">Time</th>
                <th className="py-3 px-4 text-left">Presents</th>
              </tr>
            </thead>
            <tbody className="text-blue-gray-900">
              {progressData &&
                progressData.dateArray.map((date, index) => {
                  return (
                    <tr key={index} className="border-b border-blue-gray-200">
                      <td className="py-3 px-4">{date}</td>
                      <td className="py-3 px-4 ">
                        {progressData.timeArray[index]}
                      </td>
                      <td className="py-3 px-4 font-medium text-blue-600">
                        Present
                      </td>
                    </tr>
                  );
                })}

              {/* <!-- Add more rows as needed --> */}
              <tr className="border-b border-blue-gray-200">
                <td className="py-3 px-4 font-medium">Total Present</td>
                <td className="py-3 px-4"></td>

                <td className="py-3 px-4 font-medium">
                  {progressData && progressData.dateArray.length}
                </td>
                <td className="py-3 px-4"></td>
              </tr>
            </tbody>
          </table>
          <div className="w-full pt-5 px-4 mb-8 mx-auto ">
            <div className="text-sm text-gray-700 py-1 text-center">
              If the date is not mentioned, it will be considered as absent.
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
