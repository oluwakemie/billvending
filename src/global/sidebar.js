import React from "react";
import { useState } from "react";

import { Link } from "react-router-dom";

import { useLocation } from "react-router-dom";

const Sidebar = ({ isSidebarOpen, onClose }) => {
  const router = useLocation();

  const [openClient, setOpenClient] = useState(false);
  const [openWallet, setOpenWallet] = useState(false);
  const [openVendor, setOpenVendor] = useState(false);
  const [openBiller, setOpenBiller] = useState(false);
  console.log(router.pathname);
  return (
    <div
      className={` lg:block lg:relative ${
        isSidebarOpen ? "block z-20 fixed inset-0 transition-opacity" : "hidden"
      }`}
    >
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#29292980]  transition-opacity lg:relative"
      ></div>
      <div class="absolute top-0 right-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4">
        <button
          onClick={onClose}
          type="button"
          class="rounded-md text-gray-700 hover:text-[white] focus:outline-none focus:ring-2 focus:ring-[white]"
        >
          <span class="sr-only">Close panel</span>

          <svg
            class="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div class="max-w-[250px] min-h-screen bg-[#FAFAFA] pt-11 pb-7 sticky top-0  ">
        <img
          class="ml-[37px] mr-[81px] w-[150px] mb-[72px] pb-[18px] border-b border-[#E2E8F0] "
          src="./Logo.png"
          alt="logo"
        />

        <Link
          to="/dashboard"
          className={`mx-[24px] py-[13px] pl-[17px] pr-[77px] flex tracking-[0.2px] font-medium text-[14px] leading-[21px] items-end mb-[12px] ${
            window.location.pathname === "/dashboard"
              ? "bg-[#124072] text-[white] rounded-md"
              : "text-[#718096]"
          }`}
        >
          <svg
            class="mr-[12px]"
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.8248 19.4584H5.17484C2.8915 19.4584 1.0415 17.6001 1.0415 15.3167V9.14173C1.0415 8.00839 1.7415 6.58339 2.6415 5.88339L7.13317 2.38339C8.48317 1.33339 10.6415 1.28339 12.0415 2.26673L17.1915 5.87506C18.1832 6.56673 18.9582 8.05006 18.9582 9.25839V15.3251C18.9582 17.6001 17.1082 19.4584 14.8248 19.4584ZM7.89984 3.36673L3.40817 6.86673C2.8165 7.33339 2.2915 8.39173 2.2915 9.14173V15.3167C2.2915 16.9084 3.58317 18.2084 5.17484 18.2084H14.8248C16.4165 18.2084 17.7082 16.9167 17.7082 15.3251V9.25839C17.7082 8.45839 17.1332 7.35006 16.4748 6.90006L11.3248 3.29173C10.3748 2.62506 8.80817 2.65839 7.89984 3.36673Z"
              fill="currentColor"
            />
            <path
              d="M10 16.125C9.65833 16.125 9.375 15.8417 9.375 15.5V13C9.375 12.6583 9.65833 12.375 10 12.375C10.3417 12.375 10.625 12.6583 10.625 13V15.5C10.625 15.8417 10.3417 16.125 10 16.125Z"
              fill="currentColor"
            />
          </svg>
          Dashboard
        </Link>

        <Link
          to="/transaction"
          className={`mx-[24px] py-[13px] px-[16px]  flex tracking-[0.2px] font-medium text-[14px] leading-[21px] items-end mb-[12px] ${
            window.location.pathname === "/transaction"
              ? "bg-[#124072] text-[white] rounded-md"
              : "text-[#718096]"
          }`}
        >
          <svg
            // className="h-[22px] w-[22px]"
            className="mr-[12px]"
            width="22"
            height="23"
            viewBox="0 0 22 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.25 13.3333L13.75 7.83333L8.25 13.3333ZM8.70834 8.29167H8.7175H8.70834ZM13.2917 12.875H13.3008H13.2917ZM17.4167 19.75V5.08333C17.4167 4.5971 17.2235 4.13079 16.8797 3.78697C16.5359 3.44315 16.0696 3.25 15.5833 3.25H6.41667C5.93044 3.25 5.46412 3.44315 5.12031 3.78697C4.77649 4.13079 4.58334 4.5971 4.58334 5.08333V19.75L7.79167 17.9167L11 19.75L14.2083 17.9167L17.4167 19.75ZM9.16667 8.29167C9.16667 8.41322 9.11838 8.5298 9.03243 8.61576C8.94647 8.70171 8.82989 8.75 8.70834 8.75C8.58678 8.75 8.4702 8.70171 8.38425 8.61576C8.29829 8.5298 8.25 8.41322 8.25 8.29167C8.25 8.17011 8.29829 8.05353 8.38425 7.96758C8.4702 7.88162 8.58678 7.83333 8.70834 7.83333C8.82989 7.83333 8.94647 7.88162 9.03243 7.96758C9.11838 8.05353 9.16667 8.17011 9.16667 8.29167ZM13.75 12.875C13.75 12.9966 13.7017 13.1131 13.6158 13.1991C13.5298 13.285 13.4132 13.3333 13.2917 13.3333C13.1701 13.3333 13.0535 13.285 12.9676 13.1991C12.8816 13.1131 12.8333 12.9966 12.8333 12.875C12.8333 12.7534 12.8816 12.6369 12.9676 12.5509C13.0535 12.465 13.1701 12.4167 13.2917 12.4167C13.4132 12.4167 13.5298 12.465 13.6158 12.5509C13.7017 12.6369 13.75 12.7534 13.75 12.875Z"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Transaction
        </Link>
        <Link
          to="/airtime"
          className={`mx-[24px] py-[13px] px-[16px]  flex tracking-[0.2px] font-medium text-[14px] leading-[21px] items-end mb-[12px] ${
            window.location.pathname === "/airtime"
              ? "bg-[#124072] text-[white] rounded-md"
              : "text-[#718096]"
          }`}
        >
        <img src="/filter.png" alt=""  className="mr-[12px]" />
          Airtime
        </Link>
        {/* client menu */}
        {/* <button
          onClick={() => setOpenClient(!openClient)}
          // to="/dashboard"
          className={`mx-[24px] py-[13px] px-[16px]  flex tracking-[0.2px] font-medium text-[14px] leading-[21px] items-end mb-[12px] ${
            window.location.pathname === "/client" ||
            // openClient ||
            window.location.pathname === "/clientBiller"
              ? "bg-[#124072] text-[white] rounded-xl"
              : "text-[#718096]"
          }`}
        >
          <svg
            class="mr-[12px]"
            width="22"
            height="23"
            viewBox="0 0 22 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.25004 10.5833C10.2751 10.5833 11.9167 8.94171 11.9167 6.91667C11.9167 4.89162 10.2751 3.25 8.25004 3.25C6.225 3.25 4.58337 4.89162 4.58337 6.91667C4.58337 8.94171 6.225 10.5833 8.25004 10.5833Z"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M2.75 19.75V17.9167C2.75 16.9442 3.13631 16.0116 3.82394 15.3239C4.51158 14.6363 5.44421 14.25 6.41667 14.25H10.0833C11.0558 14.25 11.9884 14.6363 12.6761 15.3239C13.3637 16.0116 13.75 16.9442 13.75 17.9167V19.75"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M14.6666 3.36917C15.4553 3.57111 16.1544 4.02981 16.6536 4.67296C17.1528 5.3161 17.4238 6.1071 17.4238 6.92125C17.4238 7.73541 17.1528 8.52641 16.6536 9.16955C16.1544 9.81269 15.4553 10.2714 14.6666 10.4733"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M19.25 19.75V17.9167C19.2453 17.1074 18.9731 16.3224 18.4757 15.684C17.9782 15.0457 17.2836 14.5898 16.5 14.3875"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Client Management
        </button>
        {openClient && (
          <div className={`ml-[50px] mb-3`}>
            <div className="border-l border-[#E2E8F0]">
              <Link
                to="/clientBiller"
                className={` px-[16px]  flex tracking-[0.2px] text-[14px] leading-[21px]  mb-[12px] ${
                  window.location.pathname === "/clientBiller"
                    ? " text-[#124072] font-extrabold"
                    : "text-[#718096] font-medium"
                }`}
              >
                Client Biller
              </Link>
            </div>
          </div>
        )} */}
        {/* end client menu */}

        {/* My Biller */}
        {/* <Link
          to="/clientBiller"
          className={`mx-[24px] py-[13px] px-[16px]  flex tracking-[0.2px] font-medium text-[14px] leading-[21px] items-end mb-[12px] ${
            window.location.pathname === "/clientBiller"
              ? "bg-[#124072] text-[white] rounded-xl"
              : "text-[#718096]"
          }`}
        >
          <svg
            class="mr-[12px]"
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
         Client Biller
        </Link> */}
        {/* My Biller */}

        {/* Biller */}
        {/* <Link
          to="/billerManagement"
          className={`mx-[24px] py-[13px] px-[16px]  flex tracking-[0.2px] font-medium text-[14px] leading-[21px] items-end mb-[12px] ${
            window.location.pathname === "/billerManagement"
              ? "bg-[#124072] text-[white] rounded-xl"
              : "text-[#718096]"
          }`}
        >
          <svg
            class="mr-[12px]"
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
          Billers
        </Link> */}
        {/* end biller */}
        {/* electricity */}
        {/* <Link
          to="/electricity"
          className={`mx-[24px] py-[13px] px-[16px]  flex tracking-[0.2px] font-medium text-[14px] leading-[21px] items-end mb-[12px] ${
            window.location.pathname === "/electricity"
              ? "bg-[#124072] text-[white] rounded-xl"
              : "text-[#718096]"
          }`}
        >
          <svg
            className="mr-[12px] h-5"
            width="19"
            height="25"
            viewBox="0 0 19 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.9993 2.78833C13.7787 1.69787 12.2839 0.960913 10.6756 0.656761C9.06739 0.352609 7.40666 0.49278 5.87216 1.06219C4.33765 1.6316 2.98748 2.60869 1.96693 3.8883C0.946383 5.16792 0.294108 6.70161 0.0802996 8.32433C-0.111721 9.74718 0.0418512 11.1953 0.528018 12.5463C1.01419 13.8972 1.81864 15.1111 2.8733 16.0853C3.5255 16.6573 4.05178 17.3584 4.41878 18.1444C4.78579 18.9304 4.98551 19.7841 5.0053 20.6513V20.8123C5.00636 21.7907 5.39546 22.7286 6.08724 23.4204C6.77903 24.1122 7.71698 24.5013 8.6953 24.5023H9.3153C10.2936 24.5013 11.2316 24.1122 11.9234 23.4204C12.6151 22.7286 13.0042 21.7907 13.0053 20.8123V20.2633C13.0203 19.4968 13.2007 18.7425 13.5341 18.0522C13.8676 17.3618 14.3462 16.7516 14.9373 16.2633C15.8959 15.4238 16.6651 14.3901 17.1941 13.2308C17.723 12.0715 17.9996 10.8131 18.0054 9.5388C18.0113 8.26455 17.7463 7.0036 17.2281 5.83949C16.7098 4.67537 15.9501 3.63467 14.9993 2.78633V2.78833ZM9.3153 22.5023H8.6953C8.24725 22.5018 7.8177 22.3236 7.50087 22.0068C7.18405 21.6899 7.00583 21.2604 7.0053 20.8123C7.0053 20.8123 6.9983 20.5523 6.9973 20.5023H11.0053V20.8123C11.0048 21.2604 10.8265 21.6899 10.5097 22.0068C10.1929 22.3236 9.76335 22.5018 9.3153 22.5023ZM13.6153 14.7613C12.4767 15.7489 11.6545 17.0501 11.2513 18.5023H10.0053V11.3183C10.5882 11.1122 11.0932 10.7311 11.4512 10.227C11.8092 9.72296 12.0027 9.12059 12.0053 8.50233C12.0053 8.23711 11.8999 7.98276 11.7124 7.79522C11.5249 7.60769 11.2705 7.50233 11.0053 7.50233C10.7401 7.50233 10.4857 7.60769 10.2982 7.79522C10.1107 7.98276 10.0053 8.23711 10.0053 8.50233C10.0053 8.76755 9.89994 9.0219 9.71241 9.20944C9.52487 9.39697 9.27052 9.50233 9.0053 9.50233C8.74008 9.50233 8.48573 9.39697 8.29819 9.20944C8.11066 9.0219 8.0053 8.76755 8.0053 8.50233C8.0053 8.23711 7.89994 7.98276 7.71241 7.79522C7.52487 7.60769 7.27052 7.50233 7.0053 7.50233C6.74008 7.50233 6.48573 7.60769 6.29819 7.79522C6.11066 7.98276 6.0053 8.23711 6.0053 8.50233C6.00786 9.12059 6.20138 9.72296 6.55939 10.227C6.91739 10.7311 7.42239 11.1122 8.0053 11.3183V18.5023H6.6833C6.23229 17.0115 5.38642 15.6705 4.2353 14.6213C3.25825 13.7109 2.56202 12.54 2.22877 11.2468C1.89551 9.9536 1.93914 8.59205 2.35451 7.32282C2.76987 6.0536 3.53964 4.92968 4.57297 4.08369C5.60629 3.23771 6.86006 2.70496 8.1863 2.54833C8.46123 2.51764 8.73766 2.50228 9.0143 2.50233C10.7319 2.49722 12.39 3.13095 13.6663 4.28033C14.406 4.93993 14.997 5.74922 15.4002 6.65455C15.8035 7.55989 16.0096 8.54059 16.0051 9.53165C16.0005 10.5227 15.7854 11.5015 15.3739 12.4031C14.9624 13.3047 14.364 14.1085 13.6183 14.7613H13.6153Z"
              fill="currentColor"
            />
          </svg>
          Electricity
        </Link> */}

        {/* end electricity */}

        {/* wallet management */}
        <button
          onClick={() => setOpenWallet(!openWallet)}
          className={`mx-[24px] py-[13px] px-[16px]  flex tracking-[0.2px] font-medium text-[14px] leading-[21px] items-end  mb-[12px] ${
            window.location.pathname === "/wallet" ||
            window.location.pathname === "/walletHistory" ||
            window.location.pathname === "/walletTopup"
              ? "bg-[#124072] text-[white] rounded-md"
              : "text-[#718096]"
          }`}
        >
          <svg
            class="mr-[12px]"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.55 2.09853L10.525 2.15686L8.1083 7.76519H5.7333C5.16663 7.76519 4.62497 7.88186 4.1333 8.09019L5.59163 4.60686L5.62497 4.52353L5.6833 4.39019C5.69997 4.34019 5.71663 4.29019 5.74163 4.24853C6.8333 1.72353 8.06663 1.14853 10.55 2.09853Z"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15.0417 7.93172C14.6667 7.81506 14.2667 7.76506 13.8667 7.76506H8.1084L10.5251 2.15672L10.5501 2.09839C10.6751 2.14006 10.7917 2.19839 10.9167 2.24839L12.7584 3.02339C13.7834 3.44839 14.5001 3.89006 14.9334 4.42339C15.0167 4.52339 15.0834 4.61506 15.1417 4.72339C15.2167 4.84006 15.2751 4.95672 15.3084 5.08172C15.3417 5.15672 15.3667 5.23172 15.3834 5.29839C15.6084 5.99839 15.4751 6.85672 15.0417 7.93172Z"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M17.9346 11.832V13.457C17.9346 13.6237 17.9263 13.7904 17.9179 13.957C17.7596 16.8654 16.1346 18.332 13.0513 18.332H6.55127C6.35127 18.332 6.15127 18.3154 5.9596 18.2904C3.3096 18.1154 1.89294 16.6987 1.71794 14.0487C1.69294 13.857 1.67627 13.657 1.67627 13.457V11.832C1.67627 10.157 2.69294 8.71538 4.14294 8.09038C4.64294 7.88205 5.17627 7.76538 5.74294 7.76538H13.8763C14.2846 7.76538 14.6846 7.82371 15.0513 7.93205C16.7096 8.44038 17.9346 9.99038 17.9346 11.832Z"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M5.5915 4.60669L4.13317 8.09002C2.68317 8.71502 1.6665 10.1567 1.6665 11.8317V9.39002C1.6665 7.02336 3.34984 5.04836 5.5915 4.60669Z"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M17.9322 9.38963V11.8313C17.9322 9.99797 16.7155 8.43963 15.0488 7.93963C15.4822 6.8563 15.6072 6.0063 15.3988 5.29797C15.3822 5.22297 15.3572 5.14797 15.3238 5.0813C16.8738 5.8813 17.9322 7.52297 17.9322 9.38963Z"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Wallet Management
        </button>
        {openWallet && (
          <div className={`ml-[50px] mb-3 `}>
            <div className="border-l border-[#E2E8F0]">
              <Link
                to="/wallet"
                className={` px-[16px]  flex tracking-[0.2px] text-[14px] leading-[21px]  mb-[12px] ${
                  window.location.pathname === "/wallet"
                    ? " text-[#124072] font-extrabold  "
                    : "text-[#718096] font-medium "
                }`}
              >
                Wallet
              </Link>

              <Link
                to="/walletHistory"
                className={` px-[16px]  flex tracking-[0.2px] text-[14px] leading-[21px]  mb-[12px] ${
                  window.location.pathname === "/walletHistory"
                    ? " text-[#124072] font-extrabold"
                    : "text-[#718096] font-medium"
                }`}
              >
                Wallet History
              </Link>
            </div>
          </div>
        )}
        {/* end wallet management */}


        {/* user Management */}
        <Link
          to="/userManagement"
          className={`mx-[24px] py-[13px] px-[16px]  flex tracking-[0.2px] font-medium text-[14px] leading-[21px] items-end mb-[12px] ${
            window.location.pathname === "/userManagement"
              ? "bg-[#124072] text-[white] rounded-md"
              : "text-[#718096]"
          }`}
        >
          <svg
            className="mr-[12px]"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 9.16667C11.841 9.16667 13.3334 7.67428 13.3334 5.83333C13.3334 3.99238 11.841 2.5 10 2.5C8.15907 2.5 6.66669 3.99238 6.66669 5.83333C6.66669 7.67428 8.15907 9.16667 10 9.16667Z"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M5 17.5V15.8333C5 14.9493 5.35119 14.1014 5.97631 13.4763C6.60143 12.8512 7.44928 12.5 8.33333 12.5H11.6667C12.5507 12.5 13.3986 12.8512 14.0237 13.4763C14.6488 14.1014 15 14.9493 15 15.8333V17.5"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          User Management
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;