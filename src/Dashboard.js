import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import api from "./api";
import Moment from "moment";
import { NumericFormat } from "react-number-format";
import { Doughnut, Line } from "react-chartjs-2";
import { Chart as ChartJs } from "chart.js/auto";

const Dashboard = () => {
  const navigate = useNavigate;
  const [currentPage, setCurrentPage] = useState(1);
  const [range, setRange] = useState("Daily");

    function formatDate(datetimeStr){
      const date = Moment(datetimeStr);
      const formattedDate = date.format("MMM DD, YYYY");
      return formattedDate
    } 
     
    function formatTime(date){
      const datetime = Moment(date);
      const formattedTime = datetime.format("hh.mm A");
      return formattedTime;
    }

  async function getWallets(currentPage) {
    const response = await api.getWallets({
      params: { PageIndex: currentPage },
    });
    console.log("wallets", response);
    return response;
  }
  async function getBillersCount(currentPage) {
    const response = await api.getBillersCount();
    console.log("billersCount=======>>>", response);
    return response;
  }
  async function getDashboardTransaction(range) {
    const response = await api.getDashboardTransaction({
      params: { Period: range },
    });
    let newArray = Object.entries(response.data.TransactionVolume).map(
      ({ label, value }) => {
        return { date: label, amount: value };
      }
    );
    let countArray = Object.entries(response.data.TransactionCount).map(
      ([label, value]) => {
        return { date: label, amount: value };
      }
    );
    let pieChartArray = Object.entries(response.data.TransactionStatus).map(
      ([label, value]) => {
        return { status: label + " " + "(" + value + ")", amount: value };
      }
    );

    const chartData = {
      labels: newArray.map((data) => data.date),
      datasets: [
        {
          label: "Transaction Volume",
          data: newArray.map((data) => data.amount),
          backgroundColor: "#124072",
          borderColor: "#124072",
          borderWidth: 2,
          pointBorderColor: "transparent",
          pointBorderWidth: 2,
          pointRadius: 0,
        },
        {
          label: "Transaction Count",
          data: countArray.map((data) => data.amount),
          backgroundColor: "#4ADE80",
          borderColor: "#4ADE80",
          borderWidth: 2,
          pointBorderColor: "transparent",
          pointBorderWidth: 2,
          pointRadius: 0,
        },
      ],
    };
    const pieChartData = {
      labels: pieChartArray.map((data) => data.status),
      datasets: [
        {
          label: "Transaction Status",
          data: pieChartArray.map((data) => data.amount),
          backgroundColor: ["#936DFF", "FDE047", "#4ADE80", "#FF7171"],
          hoverOffset: 4,
        },
      ],
    };
    let newChartArray = {
      chartData,
      pieChartData,
    };
    console.log("chart", newChartArray);
    return newChartArray;
  }

  const options = {
    plugins: {
      legend: false,
    },
    scales: {
      x: {
        border: {
          display: false,
        },
        grid: {
          color: "transparent",
        },
      },
      y: {
        border: {
          display: false,
        },
        grid: {
          color: "transparent",
        },
      },
    },
  };
  const TransactionQuery = useQuery(
    ["", currentPage],
    () => getTransactions(currentPage),
    {
      keepPreviousData: true,
      refetchOnWindowFocus: "always",
    }
  );

  const BillerQuery = useQuery(
    ["billers", currentPage],
    () => getBillers(currentPage),
    {
      keepPreviousData: true,
      refetchOnWindowFocus: "always",
    }
  );

  const ChartDataQuery = useQuery(
    ["chartData", range],
    () => getDashboardTransaction(range),
    {
      // keepPreviousData: true,
      refetchOnWindowFocus: "always",
    }
  );
  const BillerCountQuery = useQuery(["billersCount"], () => getBillersCount(), {
    keepPreviousData: true,
    refetchOnWindowFocus: "always",
  });
  async function getTransactions(currentPage) {
    const response = await api.getTransactions({
      // params: {
      //   PageIndex: currentPage,
      //   TrackingNumber: trackingNum,
      //   ReferenceNumber: transactionRef,
      //   MeterNumber: meterNum,
      //   Status: status,
      //   StartDate: startDate,
      //   EndDate: endDate,
      //   Keyword: keyword,
      // },
    });
    console.log("transactions", response);
    return response;
  }
  async function getBillers(currentPage) {
    const response = await api.getBillers({
      params: { PageIndex: currentPage },
    });
    console.log("billers", response);
    return response;
  }

  const WalletBalanceQuery = useQuery(["walletBalance"], () => getWallets(), {
    keepPreviousData: true,
    refetchOnWindowFocus: "always",
  });

  return (
    <div className="lg:flex mx-10 mt-6 ">
      <div className="lg:mr-[24px] lg:w-[65%]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[16px] mb-6 ">
          <div className="bg-white border border-[#EDF2F7] rounded-[16px] pt-[16px] px-[20px] pb-[20px] ">
            <div className="flex flex-row justify-between items-center">
              <p className="text-[14px] text-[#718096]">Wallet Balance</p>
              <img src="icon.svg" alt="" />
            </div>
            {WalletBalanceQuery.data ? (
              <div className="mt-[45px] py-[10px]">
                <h2 className="text-[20px] md:text-[40px] lg:text-[50px] text-[#263147] font-bold">
                  <NumericFormat
                    value={WalletBalanceQuery.data.data.balance}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"₦"}
                    decimalScale={0}
                    fixedDecimalScale={true}
                    renderText={(value) => (
                      <p className="text-[20px] md:text-[30px] lg:text-[32px] text-[#718096] font-bold">
                        {value}
                      </p>
                    )}
                    className="walletBalance"
                  />
                </h2>
                <p className="text-[16px] text-[#718096] font-bold"></p>
              </div>
            ) : (
              <div className="mx-auto text-center justify-center items-center mt-4">
                <h3>No Transaction Data</h3>
              </div>
            )}{" "}
          </div>

          <div className="bg-white border border-[#EDF2F7] rounded-[16px] pt-[16px] px-[20px] pb-[20px] ">
            <div className="flex flex-row justify-between items-center">
              <p className="text-[14px] text-[#718096]">Active Billers</p>
              <img src="icon.svg" alt="" />
            </div>
            {BillerCountQuery.data &&
            BillerCountQuery?.data?.data?.TotalBillers > 0 ? (
              <div className="mt-[45px] py-[10px]">
                <h2 className="text-[30px] lg:text-[30px] text-[#1a202c] font-bold">
                  {BillerCountQuery.data?.data?.ActiveBillersCount}/
                  {BillerCountQuery.data?.data?.TotalBillers}{" "}
                </h2>
                <p className="text-[16px] text-[#718096] font-bold">Billers</p>
              </div>
            ) : (
              <div className="mx-auto text-center justify-center items-center mt-4">
                <h3 className="text-[24px] leading-[35px] text-[#718096] font-semibold">
                  No Transaction Data
                </h3>
              </div>
            )}
          </div>

          <div className="bg-white border border-[#EDF2F7] rounded-[16px] pt-[16px] px-[20px] pb-[20px]">
            <div className="flex fex-row justify-between items-center">
              <p className="text-[14px] text-[#718096]">Transactionss</p>
              <img src="icon.svg" alt="" />
            </div>
            <div className="w-full relative inline-block items-center h-full m-0">
              {ChartDataQuery.data ? (
                <Doughnut
                  id="badCanvas1"
                  data={ChartDataQuery.data.pieChartData}
                  options={{
                    responsive: true,
                    layout: {
                      width: "190",
                    },
                    plugins: {
                      legend: {
                        position: "right",
                        height: "180",
                        labels: {
                          pointStyle: "circle",
                          usePointStyle: true,
                        },
                      },
                    },
                  }}
                ></Doughnut>
              ) : (
                <div className="mx-auto text-center justify-center items-center mt-4">
                  <h3>No Transaction Data</h3>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="bg-white border border-[#EDF2F7] rounded-[16px] pl-[24px] pt-[29px] pb-[24px]">
          <div className="flex flex-row items-center justify-between mb-[24px]">
            <h3 className="text-[18px] font-bold text-[#1a202c]">
              Transaction Chart
            </h3>
            <div className="flex lg:flex-row flex-col items-center gap-[25px]">
              <div className="flex flex-row items-center gap-[8px]">
                <div className="h-[4px] w-[12px] bg-[#4ade80] rounded-[50px] "></div>
                <p className="text-[12px]">Volume</p>
              </div>
              <div className="flex flex-row items-center gap-[8px]">
                <div className="h-[4px] w-[12px] bg-[#124072] rounded-[50px]"></div>
                <p className="text-[12px]">Count</p>
              </div>
              <select className="flex flex-row py-[8px] px-[9px] w-[110px] mr-3  bg-[#fafafa] rounded-[8px] gap-[4px] border border-[#1a202c] ">
                value={range} onChange={(e) => setRange(e.target.value)}
                <option value="Daily">Daily</option>
                <option value="Weekly">Weekly</option>
                <option value="Monthly">Monthly</option>
              </select>
            </div>
          </div>
          {/* ChartDataQuery */}
          <div className="mx-auto txt-center justify-center items-center mt-4">
            <img src="./nodata.gif" className="mx-auto mt-6 h-[80px]" alt="" />
            <h3 className="text-[24px] leading-[35px] text-[#718096] font-semibold">
              No Data
            </h3>
          </div>
        </div>

        <div className="border border-[#edf2f7] pt-[25px] pb-[20px] rounded-[16px] mt-[24px]">
          <div className="flex flex-row justify-between mx-4 mb-4">
            <h3 className="text-[18px] font-bold text-[#1a202c]">Billers</h3>
            <button className="flex flex-row items-center bg-[#fafafa] py-[8px] px-[12px] gap-[4px]">
              View all
              <img src="./forward.png" alt="" />
            </button>
          </div>
          {BillerQuery.data &&
          BillerQuery.data.data &&
          BillerQuery.data?.data?.results?.length > 0 ? (
            BillerQuery.data?.data?.results?.map((biller) => (
              <div
                key={biller.id}
                className="flex flex-row border-b-[#edf2f7] items-center border-b gap-[9px] justify-between py-[10px] mt-[5px] overflow-x-auto"
              >
                <svg
                  class=""
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.99984 18.8334C14.6022 18.8334 18.3332 15.1025 18.3332 10.5001C18.3332 5.89771 14.6022 2.16675 9.99984 2.16675C5.39746 2.16675 1.6665 5.89771 1.6665 10.5001C1.6665 15.1025 5.39746 18.8334 9.99984 18.8334Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6.66667 3H7.5C5.875 7.86667 5.875 13.1333 7.5 18H6.66667"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12.5 3C14.125 7.86667 14.125 13.1333 12.5 18"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2.5 13.8333V13C7.36667 14.625 12.6333 14.625 17.5 13V13.8333"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2.5 8C7.36667 6.375 12.6333 6.375 17.5 8"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <h3 className="max-w-[170px] w-[170px] text-[#1a202c] text-[14px] font-bold">
                  {biller.name}
                </h3>
                <p className="max-w-[80px] w-[80px] text-[#718096] text-[14px] ">
                  {biller.billerType}
                </p>
                {biller.isActive ? (
                  <button className="bg-[#F6FDF9] rounded-lg text-[#22C55E] px-5 py-[9.5px] text-14px leading-[21px] tracking-[0.2px] font-medium">
                    Active
                  </button>
                ) : (
                  <button className="bg-[#FFF7F5] rounded-lg text-[#FF784B] px-5 py-[9.5px] text-[14px] leading-[21px] tracking-[0.2px] font-medium">
                    Inactive
                  </button>
                )}
              </div>
            ))
          ) : (
            <div className="mx-auto text-center justify-center items-center mt-4">
              <img src="./nodata.gif" className="mx-auto mt-6" alt="" />
              <h3 className="text-[30px] leading-[35px] text-[#1A202C] font-extrabold">
                No Data
              </h3>
            </div>
          )}
        </div>
      </div>

      {/* Transaction */}
      <div class="bg-white border border-[#EDF2F7] rounded-[16px]  pl-[24px] pt-[32px] pb-[40px] pr-[24px] mb-10 lg:w-[35%] lg:mt-0 mt-10  ">
        <div class="flex justify-between items-center mb-6">
          <h4 class="text-[#1A202C] text-[18px] leading-[24px] tracking-[0.2px] font-extrabold ">
            Transactions
          </h4>
          <button
            onClick={() => navigate("/transaction")}
            className="flex flex-row items-center gap-4 bg-[#fafafa] py-[8px] px-[12px] rounded-[8px] "
          >
            <p className="text-[12px] text-[#1a202c] font-semibold">
              View all{" "}
            </p>
            <img src="./forward.png" alt="" />
          </button>
        </div>
        {TransactionQuery.data &&
        TransactionQuery.data.data &&
        TransactionQuery.data?.data?.results?.length > 0 ? (
          TransactionQuery.data?.data?.results?.map((transaction) => (
            <div
              key={transaction.id}
              className="flex flex-row items-center py-[8px] pr-[19px] border-b border-b-[#EDF2F7] "
            >
              <img
                src="./paylodeIcon.png"
                alt=""
                className="mr-[12px] h-[38px]"
              />

              <div className="mr-[44px]">
                <h3 className="text-[14px] text-[#1a202c] font-bold">
                  {transaction.vendorBiller &&
                    transaction.vendorBiller?.biller?.code}
                </h3>
                {/* <p className="text-[12px] text-[#718096]">
                {transaction.vendorBiller &&
                  transaction.vendorBiller?.vendor?.name}
              </p> */}
              </div>

              <div>
                <h3 className="text-[#1a202c] text-[14px] font-bold">
                  {/* {transaction.amount} */}
                  <NumericFormat
                    value={transaction.amount}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"₦"}
                    decimalScale={0}
                    fixedDecimalScale={true}
                    renderText={(value) => (
                      <p className="text-[#1a202c] text-[14px] font-bold">
                        {value}
                      </p>
                    )}
                  />
                </h3>
                <p className="text-[12px] text-[#718096]">
                  {formatDate(transaction.createdDate) +
                    " at " +
                    formatTime(transaction.createdDate)}
                </p>
              </div>
            </div>
          ))
        ) : (
          <div className="mx-auto text-center justify-center items-center mt-4">
            <img src="./nodata.gif" className="mx-auto mt-6 " alt="" />
            <h3 className="text-[30px] leading-[35px]  text-[#1A202C] font-extrabold">
              No Data
            </h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
