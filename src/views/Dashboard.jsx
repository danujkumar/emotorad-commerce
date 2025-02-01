import React from 'react'
import Navbar from '../components/Navbar'
import { BarChart } from '@mui/x-charts/BarChart'
import Card from '../components/Card'
import Piechart from '../components/Piechart'
import TopBar from '../components/TopBar'

function Dashboard() {
  return (
    <>
      <div class="flex flex-row">
        <div class="w-1/5 bg-gray-800">
        <Navbar />
        </div>
        <div class="w-full bg-green-300 ">
          <TopBar />

          <div className="mx-12 my-4  grid grid-cols-1 xl:grid-cols-4 gap-4 px-0 py-0">
            <div className="bg-red-700">
              <Card />
            </div>
            <div className="bg-red-700">
              <Card />
            </div>
            <div className="bg-red-700">
              <Card />
            </div>
            <div className="bg-red-700">
              <Card />
            </div>
          </div>

          <div className="bg-amber-50  mx-12 my-4 shadow-2xl rounded-2xl">
            <BarChart
              margin={{ top: 20, right: 40, bottom: 30, left: 80 }}
              xAxis={[
                {
                  scaleType: 'band',
                  data: ['group A', 'group B', 'group C', 'group D'],
                },
              ]}
              series={[
                { data: [4, 3, 5, 5] },
                { data: [1, 6, 3, 10] },
                { data: [1, 6, 3, 10] },
              ]}
              height={400}
            />
          </div>

          <div className="mx-12 my-4  grid grid-cols-1 xl:grid-cols-2 gap-4 px-0 py-0">
            <div className="bg-red-700">
              <Card />
            </div>
            <div className="bg-red-700">
              <Card />
            </div>
          </div>
        </div>
      </div>

      {/* <Piechart /> */}
    </>
  )
}

export default Dashboard