import React from "react";
import { useState } from "react";
const Transaction = () => {
  const [open, setOpen] = useState(false);
  const [check, setCheck] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="mt-5 relative flex justify-between px-6 mb-5 ">
        <input
          type="text"
          className="border border-gray-200 rounded-lg text-[10px] max-w-[350px] px-5 py-2"
          placeholder="Search for transactions..."
        />
        <img src="Search.svg" alt="" className="absolute top-1.5 px-1" />
        <div className="flex gap-3">
          <div className="flex items-center gap-1 border p-1 rounded-lg">
            <img src="Filter.svg" alt="" onClick={() => setCheck(!check)} />
            <p
              className="text-[10px] cursor-pointer"
              onClick={() => setCheck(false)}
            >
              Filters
            </p>
          </div>
          <div className="flex items-center gap-1  border p-1 rounded-lg">
            <img src="share.svg" alt="" onClick={() => setOpen(!open)} />
            <p className="text-[10px]">Export</p>
          </div>{" "}
          <div className="flex items-center gap-2 border p-1  bg-green-500 rounded-lg text-white">
            <img src="download.svg" alt="" />
            <p className="text-[10px] font-bold">Download</p>
            <img src="down.svg" alt="" />
          </div>
        </div>
      </div>
      <div class="flex flex-col">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div class="overflow-hidden">
              <table class="min-w-full text-left text-gray-400 text-sm font-light mt-10">
                <thead class="border-b font-medium dark:border-neutral-500">
                  <tr>
                    <tr>
                      <th scope="col" class="px-6 py-4">
                        Name/Clients
                      </th>
                      {/* <img src="Group1.svg"  alt="" /> */}
                    </tr>
                    <th scope="col" class="px-6 py-4">
                      A/C / MSIDN
                    </th>
                    <th scope="col" class="px-6 py-4">
                      Category
                    </th>
                    <th scope="col" class="px-6 py-4">
                      <tr className="flex gap-1">
                        <p>Date</p>
                        <img src="Group1.svg" alt="" />
                      </tr>
                    </th>{" "}
                    <th scope="col" class="px-6 py-4">
                      Amount
                    </th>
                    <th scope="col" class="px-6 py-4">
                      Status
                    </th>
                    <th scope="col" class="px-6 py-4">
                      Commission
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
                          Eko Electricity Disco
                        </p>{" "}
                      </tr>
                    </td>
                    <td class="whitespace-nowrap px-6 py-4">0101170471045</td>
                    <td class="whitespace-nowrap px-6 py-4">Airtime</td>
                    <td class="whitespace-nowrap px-6 py-4">
                      <tr>
                        Feb 23, 2023 <p>at 08.00 PM</p>
                      </tr>
                    </td>
                    <td class="whitespace-nowrap px-6 py-4 font-bold">
                      N2,000
                    </td>
                    <button class="whitespace-nowrap border-none bg-green-200 text-green-600 px-2 py-1 my-5  rounded-md   ">
                      Successful
                    </button>
                    <td class="whitespace-nowrap px-6 py-4 font-bold ">
                      ₦ 30.00 (1.5%)
                    </td>
                    <td>
                      <img
                        src="Frame27.svg"
                        alt=""
                        className="whitespace-nowrap px-6 py-4"
                      />
                    </td>
                  </tr>
                  <img
                    src="PL.svg"
                    alt=""
                    className="absolute  top-[280px] left-[180px]"
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
          </div>
        </div>
      </div>
      {open && (
        <div className="bg-white max-w-[500px] absolute top-1 right-0 ">
          <div className="flex  gap-[80px]">
            <div className=" flex gap-3 items-center relative">
              <img src="right.svg" alt="" />
              <p className="text-[12px] font-bold">Transaction Details</p>
            </div>
            <img src="Frame28.svg" alt="" onClick={() => setOpen(false)} />
          </div>
          <div className="max-w-[120px]  bg-white  p-3 border-none rounded-lg absolute right-0 top-[26px] drop-shadow-md ">
            <p className="font-bold text-[10px] ">Customer Invoice</p>
            <div className="text-[10px] flex gap-2 pt-2">
              <img src="printer.svg" alt="" />
              <p>Print Invoice</p>
            </div>
            <div className="text-[10px] flex gap-2 pt-2">
              <img src="download.svg" alt="" />
              <p>Download PDF</p>
            </div>
          </div>
          <div className="mt-[100px] text-center">
            <p className="font-bold text-[13px]">N 2, 000.00</p>
            <p className="text-[10px]">Billing Category</p>
          </div>

          <div className="mt-10 px-2">
            <div className="flex items-center justify-around mt-5 ">
              <div className="flex items-center gap-2">
                <img src="briefcase.svg" alt="" />
                <p className="text-[10px] text-gray-400">Clients</p>
              </div>
              <p className="text-[10px] font-bold "> Macrotel Group Limited</p>
            </div>
            <div className="flex items-center justify-around gap-3 mt-3 ">
              <div className="flex items-center gap-2">
                <img src="global.svg" alt="" />
                <p className="text-[10px] text-gray-400">Billing</p>
              </div>
              <p className="text-[10px] font-bold "> Eko Electricity Disco</p>
            </div>
            <div className="flex items-center justify-around mt-3 ">
              <div className="flex items-center gap-2">
                <img src="element.svg" alt="" />
                <p className="text-[10px] text-gray-400">Token</p>
              </div>
              <p className="text-[10px] font-bold text-red-500 ">
                {" "}
                22568979192945687103
              </p>
            </div>
            <div className="flex items-center justify-around mt-3 ">
              <div className="flex items-center gap-2">
                <img src="receipt.svg" alt="" />
                <p className="text-[10px] text-gray-400">A/C / MSIDN</p>
              </div>
              <p className="text-[10px] font-bold "> 0101170471045</p>
            </div>
            <div className="flex items-center justify-around mt-3 ">
              <div className="flex items-center gap-2">
                <img src="calendar.svg" alt="" />
                <p className="text-[10px] text-gray-400">Date</p>
              </div>
              <p className="text-[10px] font-bold "> 23 Feb 2023, 09.00 AM</p>
            </div>
            <div className="flex items-center justify-around gap-9 mt-3 ">
              <div className="flex items-center gap-2">
                <img src="flash.svg" alt="" />
                <p className="text-[10px] text-gray-400">Rate</p>
              </div>
              <p className="text-[10px] font-bold "> 98.5% / 1.5%</p>
            </div>
            <div className="flex items-center justify-around mt-3 ">
              <div className="flex items-center gap-2">
                <img src="dollar.svg" alt="" />
                <p className="text-[10px] text-gray-400">Commission</p>
              </div>
              <p className="text-[10px] font-bold ">₦ 30.00 (1.5%)</p>
            </div>
            <div className="flex items-center justify-around mt-3 ">
              <div className="flex items-center gap-2">
                <img src="users.svg" alt="" />
                <p className="text-[10px] text-gray-400">Client Profit</p>
              </div>
              <p className="text-[10px] font-bold "> ₦ 30.00 (1.5%)</p>
            </div>
            <div className="flex items-center justify-around mt-3 ">
              <div className="flex items-center gap-2">
                <img src="down.svg" alt="" />
                <p className="text-[10px] text-gray-400">DML Profit</p>
              </div>
              <p className="text-[10px] font-bold "> ₦ 30.00 (1.5%)</p>
            </div>
          </div>
        </div>
      )}
      {check && (
        <div className=" absolute top-[150px]">
          <div className=" flex gap-[60px] text-[10px] font-bold">
            <div>
              <p className="text-center mb-2">Client</p>
              <div className=" flex p-2 gap-[60px] border border-gray-500 rounded-lg">
                <button className="text-[10px] text-gray-500">
                  All Clients
                </button>
                <img src="down.svg" alt="" />
              </div>
            </div>
            <div className=" relative">
              <p className="text-center mb-2">Biller</p>
              <div className=" flex p-2 gap-[60px] border border-gray-500 rounded-lg relative">
                <button
                  className="text-[10px] text-gray-500 flex gap-2 items-center"
                  onClick={() => setIsOpen((prev) => !prev)}
                >
                  9Mobile Network
                  {!isOpen ? (
                    <img src="down.svg" alt="" />
                  ) : (
                    <img src="up.svg" alt="" />
                  )}
                </button>

                {isOpen && (
                  <div className="  max-w-[180px] bg-gray-200   drop-shadow-md absolute top-9">
                    <div className=" w-full flex flex-col gap-2 ">
                      <button className=" border  border-gray-600 gap-5 px-3 py-1 max-w-10 rounded-lg flex justify-between">
                        <p className="text-[11px] font-medium">All billers</p>
                        <img src="check.svg" alt="" />
                      </button>
                      <button className=" border border-gray-600 max-w-10 px-3 py-1 active:border-white duration-300 rounded-lg   ">
                        <p className="text-[11px] text-left font-medium">
                          9Mobile Network
                        </p>
                      </button>
                      <button className=" border border-gray-600  rounded-lg   ">
                        <p className="text-[11px] text-left font-medium ">
                          Abuja Electricity Disco
                        </p>
                      </button>
                      <button className=" border border-gray-600 rounded-lg   ">
                        <p className="text-[11px] text-left font-medium">
                          Airtel Network
                        </p>
                      </button>
                    <p></p>
                      <button className=" border border-gray-600 rounded-lg   ">
                        <p className="text-[11px] text-left font-medium">
                          DSTV
                        </p>
                      </button>
                      <button className=" border border-gray-600 rounded-lg   ">
                        <p className="text-[11px]  text-left font-medium">
                          Eko Electricity Disco
                        </p>
                      </button>
                      <div className=" border active border-gray-600 rounded-lg   ">
                        <p className="text-[11px] text-left font-medium">
                          Glo Network
                        </p>
                      </div>
                      <button className="text-center text-[13px] font-bold text-white bg-blue-800 p-2 rounded-full  ">
                        Apply
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div>
              <p className="text-center mb-2">Vendor</p>
              <div className=" flex p-2 gap-[60px] border border-gray-500 rounded-lg">
                <button className="text-[10px] text-gray-500">
                  All Vendors
                </button>
                <img src="down.svg" alt="" />
              </div>
            </div>
            <div>
              <p className="text-center mb-2">Vendor</p>
              <div className=" flex p-2 gap-[90px] border border-gray-500 rounded-lg">
                <button className="text-[10px] text-gray-500">All</button>
                <img src="down.svg" alt="" />
              </div>
            </div>
            <div>
              <p className="text-center mb-2">Date</p>
              <div className=" flex p-2 gap-[60px] border border-gray-500 rounded-lg">
                <button className="text-[10px] text-gray-500">
                  Past 30 Days
                </button>
                <img src="down.svg" alt="" />
              </div>
            </div>
          </div>
          <div></div>
        </div>
      )}
    </div>
  );
};

export default Transaction;
