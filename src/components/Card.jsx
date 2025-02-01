import React from 'react'

function Card() {
  return (
    <div class="bg-green-50 shadow-sm p-6 w-full max-w-sm rounded-3xl font-[sans-serif] overflow-hidden mx-auto mt-4">
      <div class="flex items-center">
        <div class="bg-green-400 w-12 h-12 p-1 flex items-center justify-center rounded-full cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32px"
            viewBox="0 0 24 24"
          >
            <g class="fill-yellow-400">
              <circle cx="12" cy="12" r="5" />
              <path
                fill="#f2b108"
                d="M21 13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zM4 13H3a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm13.66-5.66a1 1 0 0 1-.66-.29 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71a1 1 0 0 1-.75.29zM5.64 19.36a1 1 0 0 1-.71-.29 1 1 0 0 1 0-1.41l.71-.66a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1-.7.24zM12 5a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v1a1 1 0 0 1-1 1zm0 17a1 1 0 0 1-1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1-1 1zM6.34 7.34a1 1 0 0 1-.7-.29l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1-.71.29zm12.02 12.02a1 1 0 0 1-.7-.29l-.66-.71A1 1 0 0 1 18.36 17l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1-.71.24z"
                data-original="#f2b108"
              />
            </g>
          </svg>
        </div>
      </div>

      <p class="text-sm text-gray-800 font-semibold my-8 leading-relaxed">
        Total Revenue
      </p>

      <div class="flex  items-center justify-between  ">
        <h3 class="text-3xl text-black">$2000000</h3>
        <h3 class="text-lg p-1 px-3 bg-green-200 rounded-3xl text-green-600">+2.5%</h3>
      </div>
    </div>
  )
}

export default Card