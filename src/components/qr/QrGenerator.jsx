"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import QRCode from "react-qr-code";
import { useSelector } from "react-redux";

export default function QrGenerator() {
  const selector = useSelector((state) => state.student.studentData);
  const navigate = useRouter();
  let data = {
    fullName: " ",
    studentId: " ",
    email: " ",
  };
  if (selector.length > 0) {
    data = {
      fullName: selector[0].fullName,
      studentId: selector[0].studentId,
      email: selector[0].email,
    };
  }

  console.log("data1 : ", data);

  useEffect(() => {
    if (selector.length === 0) {
      return navigate.push("/student/login");
    }
  }, []);

  return (
    <>
      {selector.length > 0 ? (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
          <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
            {/* <QRCode value={data} size={256} level="H" includeMargin={true} /> */}
            <QRCode value={JSON.stringify(data)} size={256} level="H" />
          </main>
        </div>
      ) : null}
    </>
  );
}
