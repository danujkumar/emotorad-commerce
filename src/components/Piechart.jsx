import React, { useState, useEffect } from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { PieChart } from "@mui/x-charts/PieChart";
import { mobileAndDesktopOS, valueFormatter } from "./webUsageStats";

export default function Piechart() {
  const [itemData, setItemData] = useState();

  const [chartSize, setChartSize] = useState({
    width: window.innerWidth >= 768 ? 400 : 215,
    height: window.innerWidth >= 768 ? 300 : 180,
  });

  const [gola, setGola] = useState({
    innerRadius: window.innerWidth >= 768 ? 80 : 40,
    outerRadius: window.innerWidth >= 768 ? 100 : 60,
  });

  useEffect(() => {
    const handleResize = () => {
      setChartSize({
        width: window.innerWidth >= 768 ? 400 : 215,
        height: window.innerWidth >= 768 ? 300 : 180,
      });
      setGola({
        innerRadius: window.innerWidth >= 768 ? 80 : 40,
        outerRadius: window.innerWidth >= 768 ? 100 : 60,
      });
    };
    console.log(chartSize);

    window.addEventListener("resize", handleResize);
  }, []);

  const series = [
    {
      innerRadius: gola.innerRadius,
      outerRadius: gola.outerRadius,
      id: "OS-series",
      data: mobileAndDesktopOS,
      valueFormatter,
    },
  ];

  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      spacing={{ xs: 0, md: 4 }}
      sx={{ width: "60%" }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <PieChart
          series={series}
          width={chartSize.width}
          height={chartSize.height}
          slotProps={{
            legend: { hidden: true },
          }}
          onItemClick={(event, d) => setItemData(d)}
        />
      </Box>
    </Stack>
  );
}
