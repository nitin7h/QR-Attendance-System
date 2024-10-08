"use client";
import { Scanner } from "@yudiel/react-qr-scanner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function QrScanner() {
  const result = (e) => {
    // console.log("Scan result: ", e);
    try {
      const mainData = e[0].rawValue;
      console.log("mainData : ", mainData);
      const jsonData = JSON.parse(mainData);

      const sendData = async () => {
        if (jsonData) {
          const response = await fetch("api/student/attendance", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },

            body: JSON.stringify(jsonData),
          });

          const dataFromResponse = await response.json();
          // console.log("dataFromResponse : ", dataFromResponse);
          if (dataFromResponse.data === false) {
            toast.error(dataFromResponse.message);
            return setTimeout(() => {
              window.location.reload();
            }, 2000);
          }
          toast.success(
            `${dataFromResponse.message} with Student Id : ${jsonData.studentId}`
          );
          // alert(dataFromResponse.message);
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        }
      };

      sendData();
    } catch (error) {
      setTimeout(() => {
        window.location.reload();
      }, 2000);
      toast.error("Please Scan only Generated QR ");
    }
  };

  return (
    <>
      <section className=" grid  items-center justify-items-center min-h-screen  ">
        <main className=" flex  items-center ">
          <Scanner onScan={result} />
        </main>
      </section>
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
