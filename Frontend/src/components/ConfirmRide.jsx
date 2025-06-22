import React from "react";

const ConfirmRide = ({ setconfirmRide,setvehicleFound }) => {
  return (
    <div>
      <h5
        className="py-3 text-center  absolute top-1 w-[90%] rounded-md"
        onClick={() => setconfirmRide(false)}
      >
        <i className="ri-arrow-down-wide-line bg-gray-200 text-3xl"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-3">Confirm your Ride</h3>
      <div className="flex items-center justify-between flex-col gap-2">
        <img
          className="h-20"
          src="https://i.pinimg.com/474x/8d/21/7b/8d217b1000b642005fea7b6fd6c3d967.jpg"
          alt="car"
        />
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
              <p className="text-sm text-gray-600 -mt-1">
              Cash Cash
              </p>
            </div>
          </div>
        </div>
        <button className="w-full text-white font-semibold bg-green-600 p-2 rounded-lg mt-5" onClick={()=>{setvehicleFound(true)
          setconfirmRide(false)
        }}>
          Confirm
        </button>
      </div>
    </div>
  );
};

export default ConfirmRide;
