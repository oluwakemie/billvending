import React, { useState } from "react";
import Popup from "./Popup";

const Clients = () => {
  const [check, setCheck] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
 
  const handleOnClose =()=> setIsOpen(false)
  return (
    <div className="">
      <div className="mt-5 relative flex justify-between px-4 mb-5 ">
        <input
          type="text"
          className="border border-gray-200 rounded-lg text-[10px] max-w-[350px] px-5 py-2"
          placeholder="Search for transactions..."
        />
        <div className="flex gap-3">
          <div
            className="flex items-center min-w-[30px] cursor-pointer text-white bg-[#124072]  rounded-lg px-1 "
            onClick={() => setIsOpen(true)}
          >
            <img src="/plus.svg" alt="" />
            <p className="text-[10px] px-2 py-3 font-semibold  ">
              Add New Clients
            </p>
          </div>
          <div className="flex items-center gap-1 border p-1 rounded-lg">
            <img src="Filter.svg" alt="" onClick={() => setCheck(!check)} />
            <p
              className="text-[10px] min-w-[40px] cursor-pointer"
              onClick={() => setCheck(false)}
            >
              Filters
            </p>
          </div>
        </div>
      </div>
      <div class="overflow-hidden">
        <table class="min-w-full text-left text-gray-400 text-sm font-light mt-10">
          <thead class="border-b font-medium dark:border-neutral-500">
            <tr>
              <tr>
                <th scope="col" class="px-6 py-4 ">
                  <tr className="flex gap-1">
                    <p>Name/Clients</p>
                    <img src="Group1.svg" alt="" />
                  </tr>
                </th>
                {/* <img src="Group1.svg"  alt="" /> */}
              </tr>
              <th scope="col" class="px-6 py-4">
                App ID
              </th>
              <th scope="col" class="px-6 py-4">
                API Key
              </th>
              <th scope="col" class="px-6 py-4">
                <tr className="flex gap-1">
                  <p>Date Created</p>
                  <img src="Group1.svg" alt="" />
                </tr>
              </th>{" "}
              <th scope="col" class="px-6 py-4">
                Status
              </th>
              <th scope="col" class="px-6 py-4">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b dark:border-neutral-500 text-[10px] text-black relative">
              <td class="whitespace-nowrap px-6 py-4 font-medium">
                <tr>
                  <p className="text-black font-bold">
                    {" "}
                    Cloud Interactive <br /> Platforms (Ucard)
                  </p>{" "}
                </tr>
              </td>
              <td class="whitespace-nowrap px-6 py-4">Billspay</td>
              <td class="whitespace-nowrap px-6 py-4">
                <p>9A3DA8889537-4C5A-BA94-11408032AEE3</p>
                <tr className="flex gap-1 cursor-pointer">
                  <img src="/content_copy.svg" alt="" />
                  <p className="text-[10px] text-gray-400 font-semibold">
                    Click to copy
                  </p>
                </tr>
              </td>
              <td class="whitespace-nowrap px-6 py-4">
                <tr>
                  Feb 23, 2023 <p>at 08.00 PM</p>
                </tr>
              </td>

              <button class="whitespace-nowrap border-none bg-green-200 text-green-600 px-2 py-1 my-5  rounded-md   ">
                Active
              </button>

              <td>
                <img
                  src="Frame27.svg"
                  alt=""
                  className="whitespace-nowrap px-6 py-4"
                />
              </td>
            </tr>
            <img
              src="sicon.svg"
              alt=""
              className="absolute  top-[260px] left-[180px]"
            />
            <tr class="border-b dark:border-neutral-500">
              <td class="whitespace-nowrap px-6 py-4 font-medium">2</td>
              <td class="whitespace-nowrap px-6 py-4">Jacob</td>
              <td class="whitespace-nowrap px-6 py-4">Thornton</td>
              <td class="whitespace-nowrap px-6 py-4">@fat</td>
            </tr>
            <tr class="border-b dark:border-neutral-500">
              <td class="whitespace-nowrap px-6 py-4 font-medium">3</td>
              <td class="whitespace-nowrap px-6 py-4">Larry</td>
              <td class="whitespace-nowrap px-6 py-4">Wild</td>
              <td class="whitespace-nowrap px-6 py-4">@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Popup onClose={handleOnClose} visible={isOpen} />
    </div>
  );
};

export default Clients;
