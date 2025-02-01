import * as React from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { PieChart } from '@mui/x-charts/PieChart';
import { mobileAndDesktopOS, platforms, valueFormatter } from './webUsageStats';

export default function Piechart() {
  const [itemData, setItemData] = React.useState();

  return (
    <Stack
      direction={{ xs: 'column', md: 'row' }}
      spacing={{ xs: 0, md: 4 }}
      sx={{ width: '100%' }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <PieChart
          series={series}
          width={400}
          height={300}
          slotProps={{
            legend: { hidden: true },
          }}
          onItemClick={(event, d) => setItemData(d)}
        />
      </Box>
    </Stack>
  );
}

const series = [
  {
    innerRadius: 0,
    outerRadius: 80,
    id: 'platform-series',
    data: platforms,
    valueFormatter,
  },
  {
    innerRadius: 100,
    outerRadius: 120,
    id: 'OS-series',
    data: mobileAndDesktopOS,
    valueFormatter,
  },
];