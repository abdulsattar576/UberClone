import React from "react";

const WaitingForDriver = () => {
  return (
    <div>
      <h5 className="py-3 text-center  absolute top-1 w-[90%] rounded-md">
        <i className="ri-arrow-down-wide-line bg-gray-200 text-3xl"></i>
      </h5>
<div className="flex items-center justify-between">
  <img className="h-16" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTid6cxRLwHhMnbwjuP00XRkqoXGmXQFqCVZw&s" alt="Driver" />
  <div className="text-right">
    <h2 className="text-lg font-medium"> Abdul Sattar</h2>
    <h4 className="text-xl font-semibold -mt-1 -mb-1">MP04 AB 1234</h4>
    <p className="text-gray-600 text-sm">Maruti Suzuki Alto</p>
  </div>
</div>
      <div className="flex items-center justify-between flex-col gap-2">
        {/*  */}
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="text-lg ri-map-pin-line"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm text-gray-600 -mt-1">
                Kankariya,Talab,Bhopal
              </p>
            </div>
          </div>
          {/*  */}
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className=" text-lg ri-map-pin-user-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm text-gray-600 -mt-1">
                Kankariya,Talab,Bhopal
              </p>
            </div>
          </div>
          {/*  */}
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="ri-money-rupee-circle-line text-lg"></i>
            <div>
              <h3 className="text-lg font-medium">₹192.78</h3>
              <p className="text-sm text-gray-600 -mt-1">Cash Cash</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaitingForDriver;
