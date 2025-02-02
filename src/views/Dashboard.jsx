import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { BarChart } from "@mui/x-charts/BarChart";
import Card from "../components/Card";
import Piechart from "../components/Piechart";
import TopBar from "../components/TopBar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Popup from "../components/Popup";
import User from "../assets/User";
import Transactions from "../assets/Transactions";
import Likes from "../assets/Likes";
import Revenue from "../assets/Revenue";

function Dashboard() {
  const [itemData, setItemData] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token == null || token == undefined) {
      navigate("/");
    }
  }, []);

  const handleClose = (state)=>{
    setItemData(state);
  }

  return (
    <>
      <div className="w-1/6 p-4 fixed top-0 left-0 h-screen bg-white hidden lg:block">
        <Navbar />
      </div>
      <div className="lg:w-5/6 fixed right-0 top-0 h-screen flex flex-col overflow-y-auto">
        <div className="w-full ">
          <TopBar />
          <div className="mx-12 my-4 grid grid-cols-1 gap-4 px-0 py-0 lg:grid-cols-2 md:grid-cols-2 xl:grid-cols-4">
            <div>
              <Card
                props={{
                  title: "Total Revenues",
                  amount: "$ 129,430",
                  increment: "2.5",
                  icon: User
                }}
              />
            </div>
            <div>
              <Card
                props={{
                  title: "Total Transactions",
                  amount: "1,520",
                  increment: "1.7",
                  icon: Likes
                }}
              />
            </div>
            <div>
              <Card
                props={{
                  title: "Total Likes",
                  amount: "9,721",
                  increment: "1.4",
                  icon: Transactions
                }}
              />
            </div>
            <div>
              <Card
                props={{
                  title: "Total Users",
                  amount: "6,794",
                  increment: "4.2",
                  icon: Revenue
                }}
              />
            </div>
          </div>

          <div className="bg-white mx-12 md:mx-12 my-4 shadow-2xl rounded-2xl">
            <div className="flex flex-col md:flex-row justify-between p-4 md:p-6 gap-4">
              <div className="flex flex-col">
                <span className="text-xl font-semibold">Activities</span>
                <span className="text-zinc-500">May - June 2021</span>
              </div>
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4 p-4">
                <div className="flex flex-row items-center mx-3">
                  <span
                    className="h-2 w-2 rounded-4xl"
                    style={{ backgroundColor: "#02B2AF" }}
                  ></span>
                  <span className="px-2">Guest</span>
                </div>

                <div className="flex flex-row items-center mx-3">
                  <span
                    className="h-2 w-2 rounded-4xl"
                    style={{ backgroundColor: "#2E96FF" }}
                  ></span>
                  <span className="px-2">User</span>
                </div>

                <div className="flex flex-row items-center mx-3">
                  <span
                    className="h-2 w-2 rounded-4xl"
                    style={{ backgroundColor: "#B800D8" }}
                  ></span>
                  <span className="px-2">Others</span>
                </div>
              </div>
            </div>
            <div>
              <BarChart
                margin={{ top: 20, right: 40, bottom: 30, left: 80 }}
                xAxis={[
                  {
                    scaleType: "band",
                    data: ["Week 1", "Week 2", "Week 3", "Week 4"],
                  },
                ]}
                series={[
                  { data: [400, 300, 500, 500] },
                  { data: [100, 600, 300, 1000] },
                  { data: [100, 600, 300, 1000] },
                ]}
                height={400}
              />
            </div>
          </div>

          <div className="mx-12 my-4 flex flex-col md:flex-row gap-4 px-0 py-0 mb-20">
          <div className="flex flex-col items-center md:flex-row bg-green-50 shadow-xl p-6 w-full md:w-auto rounded-3xl">
              <Piechart />

              <div className="flex flex-col justify-around">
                <div>
                  <div className="flex flex-row items-center mx-2">
                    <span
                      className="h-2 w-2 rounded-4xl"
                      style={{ backgroundColor: "#02B2AF" }}
                    ></span>
                    <span className="text-xl px-4 font-semibold">Basic Tees</span>
                  </div>
                  <div className="flex flex-row">
                    <div className="bg-red w-8 rounded-4xl"></div>
                    <h3 className="text-1xl text-zinc-500 font-semibold">55%</h3>
                  </div>
                </div>
                <div>
                  <div className="flex flex-row items-center mx-2">
                    <span
                      className="h-2 w-2 rounded-4xl"
                      style={{ backgroundColor: "#2E96FF" }}
                    ></span>
                    <span className="text-xl px-4 font-semibold">Custom Short Pants</span>
                  </div>
                  <div className="flex flex-row">
                    <div className="bg-red w-8 rounded-4xl"></div>
                    <h3 className="text-1xl text-zinc-500 font-semibold">31%</h3>
                  </div>
                </div>
                <div>
                  <div className="flex flex-row items-center mx-2">
                    <span
                      className="h-2 w-2 rounded-4xl"
                      style={{ backgroundColor: "#B800D8" }}
                    ></span>
                    <span className="text-xl px-4 font-semibold">Super Hoodies</span>
                  </div>
                  <div className="flex flex-row">
                    <div className="bg-red w-8 rounded-4xl"></div>
                    <h3 className="text-1xl text-zinc-500 font-semibold">14%</h3>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={() => setItemData(true)}
              className="flex-col bg-green-50 shadow-xl p-6 w-full rounded-3xl justify-center items-center flex"
            >
              <svg
                className="border-2 border-zinc-300 bg-zinc-200 rounded-full p-2"
                width="80"
                height="80"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 5V19M5 12H19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <h3 className="text-2xl text-zinc-500 p-5 font-semibold">Add Profile</h3>
            </button>

            {itemData && <Popup props={handleClose} />}
            {/* <Popup /> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
