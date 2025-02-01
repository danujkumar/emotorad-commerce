import React, {useState, useEffect} from 'react'
import Navbar from '../components/Navbar'
import { BarChart } from '@mui/x-charts/BarChart'
import Card from '../components/Card'
import Piechart from '../components/Piechart'
import TopBar from '../components/TopBar'
import axios from 'axios'
import Popup from '../components/Popup'

function Dashboard() {
  const [data, setData] = useState({ name: "Total Revenues", value: "$2,129,430" });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [insta, setInsta] = useState(""); 
  const [youtube, setYou] = useState("");
  const [itemData, setItemData] = React.useState(false);



  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if(token == null || token == undefined) {
      window.location.href = "/";
    }
  }, [])

  const newProfile = async () => {

    axios.post("http://localhost:3000/profile", {
      name: name,
      email: email,
      phone: phone,
      insta: insta,
      youtube: youtube
    }).then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err);
    }).finally(() => {

      console.log("Profile added");
    })

  };
  
  return (
    <>
      <div class="w-1/6 p-4 fixed top-0 left-0 h-screen bg-white hidden lg:block">
        <Navbar />
      </div>
      <div class="lg:w-5/6 fixed right-0 top-0 h-screen flex flex-col overflow-y-auto">
        <div class="w-full ">
          <TopBar />
          <div className="mx-12 my-4 grid grid-cols-1 gap-4 px-0 py-0 lg:grid-cols-2 md:grid-cols-2 xl:grid-cols-4">
            <div>
              <Card />
            </div>
            <div>
              <Card />
            </div>
            <div>
              <Card />
            </div>
            <div>
              <Card />
            </div>
          </div>

          <div className="bg-white mx-12 my-4 shadow-2xl rounded-2xl">
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

          <div className="mx-12 my-4 grid grid-cols-1 xl:grid-cols-2 gap-4 px-0 py-0 mb-20">
            <div className="flex-row bg-green-50 shadow-xl p-6 w-full rounded-3xl">
              <Piechart />

              <div className="flex-col  justify-between items-center mt-4">
                <div>
                  <h3 className="text-2xl font-semibold">Total Revenue</h3>
                  <p className="text-xl">$2000000</p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold">+2.5%</h3>
                </div>
              </div>
            </div>
            <button onClick={() => setItemData(true)} className="flex-col bg-green-50 shadow-xl p-6 w-full rounded-3xl justify-center items-center flex">
              <svg
                className="border-2 border-green-400 rounded-full p-2"
                width="80"
                height="80"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 5V19M5 12H19"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <h3 className="text-2xl font-semibold">Add Profile</h3>
            </button>

            {itemData && <Popup />}
            {/* <Popup /> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard