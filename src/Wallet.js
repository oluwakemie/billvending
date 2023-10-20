import React from "react";
import { useState } from "react";
import WalletPopup from "./WalletPopup"
const Wallet = () => {

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
              Create Wallet
            </p>
          </div>
          <div className="flex items-center gap-1 border p-1 rounded-lg">
            <img src="Filter.svg" alt="" /*onClick={() => setCheck(!check)}*/ />
            <p
              className="text-[10px] min-w-[40px] cursor-pointer"
              // onClick={() => setCheck(false)}
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
                Balance
              </th>
              <th scope="col" class="px-6 py-4">
                Status
              </th>
              <th scope="col" class="px-6 py-4">
                <p>Last Credit Date</p>
              </th>{" "}
              <th scope="col" class="px-6 py-4">
                <p>Last Debit Date</p>
              </th>
              <th scope="col" class="px-6 py-4">
                Actions
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
                    Macrotel Group Limited
                  </p>{" "}
                  <p className="text-gray-600">
                    B5F69B50580B4B2C8C7DFFB84237DA4B
                  </p>{" "}
                </tr>
              </td>
              <td class="whitespace-nowrap px-6 py-4 text-[12px] font-bold">₦ 2,000.00</td>
              <td class="whitespace-nowrap px-6 py-4">
                <p className="text-green-500 font-semibold">Active</p>
                
              </td>
              <td class="whitespace-nowrap px-6 py-4">
                <tr>
                  Feb 23, 2023 <p>at 08.00 PM</p>
                </tr>
              </td>
              <td class="whitespace-nowrap px-6 py-4">
                <tr>
                  Feb 23, 2023 <p>at 08.00 PM</p>
                </tr>
              </td>
              
              <button class="whitespace-nowrap border-none bg-green-700 text-white font-bold px-2 py-1 my-5  rounded-md   ">
               Top-up Wallet
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
      <WalletPopup onClose={handleOnClose} visible={isOpen} />
    </div>
  );
};
export default Wallet;
