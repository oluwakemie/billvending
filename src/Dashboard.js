import React from "react";

const Dashboard = () => {
  return (
    <>
      <div className=" mt-10 px-[40px] gap-[40px] lg:gap-[8%] flex flex-wrap justify-between">
        <div className="flex flex-col mt-10  w-full lg:w-[62%]">
          <div className="flex gap-6 drop-shadow-xl flex-wrap  ">
            <div className="px-5 bg-white border-gray-100  rounded-lg  min-w-[200px] ">
              <div className="flex items-center justify-between gap-7 mb-7">
                <p className="text-[13px]">Active Billers</p>
                <img src="icon.svg" alt="" />
              </div>
              <p className="font-bold text-[25px] px-1 ">2/14</p>
              <p className="text-gray-500 font-bold text-[12px] px-1">
                Billers
              </p>
            </div>
            <div className="bg-white px-7 border-none rounded-lg border-gray-100 min-w-[200px]">
              <p className="text-[13px] mb-9">Active Billers</p>
              <p className="font-bold text-[25px] px-1 ">350/500</p>
              <p className="text-gray-500 font-bold text-[12px] px-1">Active</p>
            </div>
            <div className=" bg-white border-none px-1 border-gray-100 rounded-lg min-w-[200px]">
              <div className="flex items-center justify-between pl-1">
                <p className="text-[13px]">Transactions</p>
                <img src="icon1.svg" alt="" />
              </div>
              <div className="flex gap-1 justify-between mr-1 ">
                <img src="Group254.png" alt="" className="w-[85px]" />
                <div>
                  <div className="flex items-center gap-1 ">
                    <img src="green.svg" alt="" />
                    <div className="leading-tight">
                      <p className="font-bold text-[10px]">2</p>
                      <p className="font-thin text-[8px] text-gray-400">
                        Successful
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <img src="red.svg" alt="" />
                    <div className="leading-tight">
                      <p className="font-bold text-[10px]">2</p>
                      <p className="font-thin text-[8px] text-gray-400">
                        Failed
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <img src="purple.svg" alt="" />
                    <div className="leading-tight">
                      <p className="font-bold text-[10px]">2</p>
                      <p className="font-thin text-[8px] text-gray-400">
                        Reversed
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <img src="yellow.svg" alt="" />
                    <div className="leading-tight">
                      <p className="font-bold text-[10px]">2</p>
                      <p className="font-thin text-[8px] text-gray-400">
                        Pending
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="min-w-[400px] bg-white border-none border-gray-200 drop-shadow-xl rounded-lg mt-5 p-2">
            <div className="flex justify-between items-center">
              <p className="font-bold text-[20px]">Total Sales</p>

              <div className="flex">
                <img src="Rectangle1.svg" alt="" />
                <p className="text-[12px]">Income</p>
              </div>
              <div className="flex">
                <img src="Rectangle2.svg" alt="" />
                <p className="text-[12px]">Usage</p>
              </div>
              <div className="flex">
                <p className="text-[12px]">9mobile</p>
                <img src="down.svg" alt="" />
              </div>
              <div className="flex ">
                <p className="text-[12px]">Jan 10 - Jan 16</p>
                {/* <img src="down.svg" alt="" /> */}
              </div>
            </div>
            <div className="flex items-center">
              <div className="text-[12px]  flex flex-col gap-4 mt-2 text-gray-400 ">
                <p>10k</p>
                <p>7k</p>
                <p>5k</p>
                <p>3k</p>
                <p>0k</p>
              </div>
              <div>
                <img src="chart-line.png" alt="" />
              </div>
            </div>
            <div className="flex justify-between text-[12px] px-10 text-gray-400">
              <p>jan 10</p>
              <p>jan 11</p>
              <p>jan 12</p>
              <p>jan 13</p>
              <p>jan 14</p>
              <p>jan 15</p>
              <p>jan 16</p>
            </div>
          </div>
          <div className="min-w-[380px]  bg-white border-none border-gray-200  drop-shadow-xl rounded-lg mt-5 p-2">
            <div className="flex justify-between items-center ">
              <p className="font-bold text-[12px]">Billers</p>
              <div className="flex gap-2 items-center">
                <p className="text-[12px]">View all</p>
                <img src="right.svg" alt="r" />
              </div>
            </div>
            
            <table class="table-fixed" className="min-w-full  divide-y divide-gray-200">
              <tbody>
                <tr className="">
                  <tr>
                    {" "}
                    <img src="Frame6.svg" alt="" />
                    <td className="text-[12px] font-bold"> 9mobile</td>
                  </tr>

                  <td className="text-[12px] text-gray-400">Airtime</td>
                  <td className="text-[12px] font-bold">95% / 5%</td>
                  <button className="text-[12px]  border-none bg-green-200 text-green-600 px-2 py-1  rounded-md">
                    Active
                  </button>
                </tr>
                <tr>
                  <tr>
                    <img src="Frame7.svg" alt="" />
                    <td className="text-[12px] font-bold">
                      Abuja Electricty Disco
                    </td>
                  </tr>

                  <td className="text-[12px] text-gray-400">Electricty</td>
                  <td className="text-[12px] font-bold">95% / 5%</td>
                  <button className="text-[11px] border-none bg-red-200 text-red-600 px-2 py-1 rounded-md">
                  Inactive</button>
                </tr>
                <tr>
                  <tr>
                  <img src="Frame7.svg" alt="" />
                  <td className="text-[12px] font-bold">
                  Eko Electricity Disco</td>
                  </tr>
                  <td className="text-[12px] text-gray-400">CableTv</td>
                  <td className="text-[12px] font-bold">95% / 1.5%</td>
                  <button className="text-[12px] border-none bg-green-200 text-green-600 px-2 py-1 rounded-md">
                  Active
                </button>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="lg:w-[30%] w-full  bg-white border-none rounded-lg px-5 py-5 drop-shadow-xl">
          <div className="text-[10px] flex justify-between items-center">
            <p>Transaction</p>
            <div className="flex space-x-2">
              <p>View all</p>
              <img src="right.svg" alt="" />
            </div>
          </div>
          <div className="mt-5 flex space-x-11 items-center">
            <img src="PL.svg" alt="" />
            <div>
              <p className="font-bold text-[10px]">Clients name</p>
              <p className="text-[7px] text-gray-400">Billing Category</p>
            </div>
            <div className="font-bold text-[10px]">
              <p>+₦523.10</p>
              <p className="text-[7px] text-gray-400">Today at 7.18 AM</p>
            </div>
          </div>
          <div className="mt-5 flex space-x-11 items-center">
            <img src="PL.svg" alt="" />
            <div>
              <p className="font-bold text-[10px]">Clients name</p>
              <p className="text-[7px] text-gray-400">Billing Category</p>
            </div>
            <div className="font-bold text-[10px]">
              <p>+₦523.10</p>
              <p className="text-[7px] text-gray-400">Today at 7.18 AM</p>
            </div>
          </div>
          <div className="mt-5 flex space-x-11 items-center">
            <img src="PL.svg" alt="" />
            <div>
              <p className="font-bold text-[10px]">Clients name</p>
              <p className="text-[7px] text-gray-400">Billing Category</p>
            </div>
            <div className="font-bold text-[10px]">
              <p>+₦523.10</p>
              <p className="text-[7px] text-gray-400">Today at 7.18 AM</p>
            </div>
          </div>
          <div className="mt-5 flex space-x-11 items-center">
            <img src="PL.svg" alt="" />
            <div>
              <p className="font-bold text-[10px]">Clients name</p>
              <p className="text-[7px] text-gray-400">Billing Category</p>
            </div>
            <div className="font-bold text-[10px]">
              <p>+₦523.10</p>
              <p className="text-[7px] text-gray-400">Today at 7.18 AM</p>
            </div>
          </div>
          <div className="mt-5 flex space-x-11 items-center">
            <img src="PL.svg" alt="" />
            <div>
              <p className="font-bold text-[10px]">Clients name</p>
              <p className="text-[7px] text-gray-400">Billing Category</p>
            </div>
            <div className="font-bold text-[10px]">
              <p>+₦523.10</p>
              <p className="text-[7px] text-gray-400">Today at 7.18 AM</p>
            </div>
          </div>
          <div className="mt-5 flex space-x-11 items-center">
            <img src="PL.svg" alt="" />
            <div>
              <p className="font-bold text-[10px]">Clients name</p>
              <p className="text-[7px] text-gray-400">Billing Category</p>
            </div>
            <div className="font-bold text-[10px]">
              <p>+₦523.10</p>
              <p className="text-[7px] text-gray-400">Today at 7.18 AM</p>
            </div>
          </div>
          <div className="mt-5 flex space-x-11 items-center">
            <img src="PL.svg" alt="" />
            <div>
              <p className="font-bold text-[10px]">Clients name</p>
              <p className="text-[7px] text-gray-400">Billing Category</p>
            </div>
            <div className="font-bold text-[10px]">
              <p>+₦523.10</p>
              <p className="text-[7px] text-gray-400">Today at 7.18 AM</p>
            </div>
          </div>
          <div className="mt-5 flex space-x-11 items-center">
            <img src="PL.svg" alt="" />
            <div>
              <p className="font-bold text-[10px]">Clients name</p>
              <p className="text-[7px] text-gray-400">Billing Category</p>
            </div>
            <div className="font-bold text-[10px]">
              <p>+₦523.10</p>
              <p className="text-[7px] text-gray-400">Today at 7.18 AM</p>
            </div>
          </div>
          <div className="mt-5 flex space-x-11 items-center">
            <img src="PL.svg" alt="" />
            <div>
              <p className="font-bold text-[10px]">Clients name</p>
              <p className="text-[7px] text-gray-400">Billing Category</p>
            </div>
            <div className="font-bold text-[10px]">
              <p>+₦523.10</p>
              <p className="text-[7px] text-gray-400">Today at 7.18 AM</p>
            </div>
          </div>
          <div className="mt-5 flex space-x-11 items-center">
            <img src="PL.svg" alt="" />
            <div>
              <p className="font-bold text-[10px]">Clients name</p>
              <p className="text-[7px] text-gray-400">Billing Category</p>
            </div>
            <div className="font-bold text-[10px]">
              <p>+₦523.10</p>
              <p className="text-[7px] text-gray-400">Today at 7.18 AM</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
