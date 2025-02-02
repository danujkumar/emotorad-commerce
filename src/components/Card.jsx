import React, {useEffect, useState} from 'react'
import User from '../assets/User';

function Card({props}) {

  const [metric, setMetric] = useState("");
  const [value, setValue] = useState("");
  const [increment, setIncrement] = useState("");
  const [ele, setEle] = useState(null)

  useEffect(() => {
    setMetric(props.title)
    setValue(props.amount)
    setIncrement(props.increment)
    setEle(props.icon)
  }, [])
  
  return (
    <div className="bg-green-50 shadow-sm py-3 px-4 w-full max-w-sm rounded-3xl font-[sans-serif] overflow-hidden mx-auto mt-4">
      <div className="flex items-center">
        <div className="bg-green-400 w-12 h-12 p-1 flex items-center justify-center rounded-full">
         {ele}
        </div>
      </div>

      <p className="text-sm text-gray-800 font-semibold my-1 py-2 leading-relaxed">
        {metric}
      </p>

      <div className="flex  items-center justify-between  ">
        <h3 className="text-2xl text-black">{value}</h3>
        <h3 className="text-xs p-1 px-3 bg-green-200 rounded-3xl text-green-600">+ {increment}%</h3>
      </div>
    </div>
  )
}

export default Card