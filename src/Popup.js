import React from 'react'

const Popup = ({visible , onClose }) => {

    const handleOnClose =() =>{

    }

    if (!visible) return null
  return (
    <div  className='fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm flex justify-center items-center'>
                  <div className="bg-white max-w-[284px] rounded-lg px-3 py-3 shadow-lg absolute top-[350px] left-[50%] transform -translate-x-1/2 -translate-y-1/2  ">
        <div className="flex items-center justify-between mb-2 hover:scale-95 transition">
          <p className="text-[14px] font-semibold">Add New Client</p>
          <img src="/close.svg" alt="" onClick={onClose} />
        </div>
        <img src="Frame88.svg" alt="" />
        <label className="text-[10px] font-bold">Client Name</label> <br />
        <input
          type="text"
          placeholder="Name client"
          className=" text-[10px] px-2 w-full py-2 rounded-md border-gray-400 border "
        />
        <label className="text-[10px] font-bold">App ID</label> <br />
        <input
          type="text"
          placeholder="Assign App ID"
          className=" text-[10px] px-2 w-full py-2 rounded-md border-gray-400 border "
        />
        <label className="text-[10px] font-bold">API Key</label> <br />
        <div className=" relative ">
          <input
            type="password"
            placeholder="Generate Api Key"
            className=" text-[10px] px-2 w-full py-2 rounded-md border-gray-400 border"
          />
          <button className=" bg-[#124072] rounded-md right-3 bottom-1 text-white text-[10px] min-w-[90px] p-1 py-[5px] font-bold absolute ">
            Generate key
          </button>
        </div>
        <div className=" flex justify-between mt-3">
          <div>
            <p className="text-[10px] font-semibold text-gray-500">Purchase Rate</p>
            <input
              type="text"
              placeholder="0"
              className="px-1 py-2 w-[100px] text-[10px] rounded-md"
            />
          </div>
          <div>
            <p className="text-[10px] font-semibold text-gray-500">Profit Rate</p>
            <input
              type="text"
              placeholder="0"
              className="px-1 py-2  w-[100px]  text-[10px]  rounded-md"
            />
          </div>
        </div>
        <div className="flex gap-1 items-center mt-3">
          <img src="check1.svg" alt="" />
          <p className="text-[8px]">Select  checkbox to use wallet balance for each transaction</p>
        </div>
        <button className="bg-[#124072] w-full rounded-lg text-[10px] py-1 text-white font-bold mb-5 mt-2">Next</button>
      </div>
    </div>
  )
}

export default Popup