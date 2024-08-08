import React from "react";
import { useState } from "react";

const Airtime = () => {
  const [displaySearch, setDisplaySearch] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [biller, setBiller] = useState(" ");
  const handleModalOpen = () => {
    setIsModalOpen(true);
  };
  const handleDisplaySearch = () => {
    setDisplaySearch(!displaySearch);
  };

  return (
    <div className="mx-6 mt-9">
      {/* <img src="./error.gif" alt="" className='mx-auto mt-6 mb-3' />
        <h3 className='text-[35px] leading-[40px] text-[#1A202C] font-extrabold'></h3> */}
      <div className="lg:flex lg:justify-between items-center mb-8 ">
        <div className="relative py-4 lg:w-[295px] w-full">
          <span className="absolute inset-y-0 left-0 flex items-center pl-4 pr-3 ">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="9.80541"
                cy="9.80547"
                r="7.49047"
                stroke="#1A202C"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15.0151 15.4042L17.9518 18.3333"
                stroke="#1A202C"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>

          <input
            type="text"
            className="w-full py-2 pl-10 pr-4 text-[#A0AEC0] leading-[21px] tracking-[0.2px] text-[14px] border border-[#E2E8F0] rounded-md  focus:border-gray-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
            placeholder="Search by biller name..."
            //value={biller} 
                // onChange={(e) => setBiller(e.target.value)}
              
          />
        </div>
        <div className="flex items-center">
          <button
            onClick={handleDisplaySearch}
            className="px-4 py-2 border border-[#E2E8F0]  text-[#1A202C] text-[14px] leading-[21px] tracking-[0.2px]  font-semibold rounded-md flex items-center mr-4 "
          >
            <svg
              className="mr-2"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.60851 13.8274H3.35791"
                stroke="#1A202C"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.9507 5.75029H16.2013"
                stroke="#1A202C"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.27207 5.70521C7.27207 4.6255 6.39027 3.75 5.30278 3.75C4.2153 3.75 3.3335 4.6255 3.3335 5.70521C3.3335 6.78492 4.2153 7.66042 5.30278 7.66042C6.39027 7.66042 7.27207 6.78492 7.27207 5.70521Z"
                stroke="#1A202C"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16.6666 13.7948C16.6666 12.7151 15.7855 11.8396 14.698 11.8396C13.6098 11.8396 12.728 12.7151 12.728 13.7948C12.728 14.8745 13.6098 15.75 14.698 15.75C15.7855 15.75 16.6666 14.8745 16.6666 13.7948Z"
                stroke="#1A202C"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Filters
          </button>
        </div>
      </div>
      <tr>
        <td className="text-center" colspan="7">
          <div className="grid lg:grid-cols-5 md:grid-cols-4 grid-cols-3 gap-4">
            <div className="relative py-4 w-full mx-6">
              <input
                type="text"
                className='"w-full py-2 pl-3 pr-4 text-[#A0AEC0] leading-[21px] tracking-[0.2px] text-[14px] border border-[#E2E8F0] rounded-md  focus:border-gray-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300'
                placeholder="Search for biller"
                // value={biller} 
                // onChange={(e) => setBiller(e.target.value)}
              />
            </div>
           <div className="relative py-4 w-full mx-6">
            <input type="text" className="w-full py-2 pl-3 pr-4 text-[#A0AEC0] leading-[21px] tracking-[0.2px] text-[14px] border border-[#E2E8F0] rounded-md focus:border-gray-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacite focus:ring-blue-300" />
            
           </div>
          </div>
        </td>
      </tr>
    </div>
  );
};

export default Airtime;
