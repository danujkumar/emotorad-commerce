import React from "react";
import Navbar from "../components/Navbar";
import { BarChart } from "@mui/x-charts/BarChart";
import Card from "../components/Card";
import Piechart from "../components/Piechart";
import TopBar from "../components/TopBar";

function Dashboard() {
  return (
    <>
      <TopBar/>
      <Navbar />

      <Card />
      <Piechart />
      <BarChart
        xAxis={[{ scaleType: "band", data: ["group A", "group B", "group C"] }]}
        series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
        width={500}
        height={300}
      />
    </>
  );
}

export default Dashboard;