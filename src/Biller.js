import React from "react";

const Biller = () => {
  return (
    <div>
      <div className="mt-5 relative flex justify-between px-4 mb-5 ">
        <input
          type="text"
          className="border border-gray-200 rounded-lg text-[10px] max-w-[350px] px-5 py-2"
          placeholder="Search for transactions..."
        />
        <div className="flex gap-3">
          <div className="flex items-center min-w-[30px] cursor-pointer transition ease-in-out hover:scale-110 text-white bg-[#124072]  rounded-lg px-1 ">
            <img src="/plus.svg" alt="" />
            <p className="text-[10px] px-3 py-3 font-semibold ">
              Create Biller
            </p>{" "}
          </div>
          <div className="flex items-center gap-1 border p-1 rounded-lg">
            <img src="Filter.svg" alt="" />
            <p className="text-[10px] min-w-[40px] cursor-pointer">Filters</p>
          </div>
        </div>{" "}
      </div>{" "}
      <div class="overflow-hidden">
        <table class="min-w-full text-left text-gray-400 text-sm font-light mt-10">
          <thead class="border-b font-medium dark:border-neutral-500">
            <tr>
              <tr>
                <th scope="col" class="px-6 py-4 ">
                  <p>Category</p>

                  <div className="flex justify-between border mt-2 w-[200px] px-2 py-2 max-w-full rounded-lg">
                    <p className="text-[13px] font-thin">All Categories</p>
                    <img src="down.svg" alt="" />
                  </div>
                </th>
                {/* <img src="Group1.svg"  alt="" /> */}
              </tr>
              <th scope="col" class="px-6 py-4">
                Vendor
                <div className="flex justify-between border mt-2 w-[200px] px-2 py-2 max-w-full rounded-lg">
                    <p className="text-[13px] font-thin">All Vendors</p>
                    <img src="down.svg" alt="" />
                  </div>
              </th>
              <th scope="col" class="px-6 py-4">
                Status
                <div className="flex justify-between border mt-2 w-[200px] px-2 py-2 max-w-full rounded-lg">
                    <p className="text-[13px] font-thin">All </p>
                    <img src="down.svg" alt="" />
                  </div>
              </th>
              <th scope="col" class="px-6 py-4">
                Date
                <div className="flex justify-between border mt-2 w-[200px] px-2 py-2 max-w-full rounded-lg">
                    <p className="text-[13px] font-thin">Past 30 Days</p>
                    <img src="down.svg" alt="" />
                  </div>
              </th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
};

export default Biller;
