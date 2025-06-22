import React from 'react'
import "remixicon/fonts/remixicon.css";
const VehiclePanel = ({setvehicalePanel,setconfirmRide}) => {
  return (
    <div>
        <h5 className="py-3 text-center  absolute top-1 w-[90%] rounded-md" onClick={()=>setvehicalePanel(false)}><i className="ri-arrow-down-wide-line bg-gray-200 text-3xl"></i></h5>
        <h3 className="text-2xl font-semibold mb-3">Choose a Vehicle</h3>
        {/* vehicale box */}
        <div className="flex items-center justify-between  w-full px-3 py-3 border-2 active:border-black  mb-2 rounded-lg" onClick={()=>{setconfirmRide(true)
            setvehicalePanel(false)
        }}>
          <img
            className="h-20"
            src="https://i.pinimg.com/474x/8d/21/7b/8d217b1000b642005fea7b6fd6c3d967.jpg"
            alt="car"
          />

          <div className="  w-1/2">
            <h4 className="font-medium text-base">
              UberGo 
              <span>
                <i className="ri-user-3-fill"></i>4
              </span>
            </h4>
            <h5 className="font-medium text-sm">2 mins away</h5>
            <p className="font-normal text-xs text-gray-600">
              Afforable, compact rides
            </p>
          </div>
          <h2 className="text-lg font-semibold">₹192.2</h2>
        </div>
         {/* vehicale box */}
        <div className="flex items-center justify-between  w-full  px-3 py-3 border-2 active:border-black mb-2 rounded-lg"  onClick={()=>{setconfirmRide(true)
            setvehicalePanel(false)
        }}>
          <img
            className="h-20"
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1698944322/assets/92/00189a-71c0-4f6d-a9de-1b6a85239079/original/UberMoto-India-Orange.png"
            alt="bike"
          />

          <div className="  w-1/2">
            <h4 className="font-medium text-base ">
               Moto
              <span>
                <i className="ri-user-3-fill"></i>2
              </span>
            </h4>
            <h5 className="font-medium text-sm">3 mins away</h5>
            <p className="font-normal text-xs text-gray-600">
              Afforable, Motercycle rides
            </p>
          </div>
          <h2 className="text-lg font-semibold">₹70</h2>
        </div>
         {/* vehicale box */}
        <div className="flex items-center justify-between  w-full px-3 py-3 border-2 active:border-black mb-2 rounded-lg"  onClick={()=>{setconfirmRide(true)
          setvehicalePanel(false)}
        }>
          <img
            className="h-20"
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
            alt="auto"
          />

          <div className="  w-1/2">
            <h4 className="font-medium text-base ">
               Auto
              <span>
                <i className="ri-user-3-fill"></i>4
              </span>
            </h4>
            <h5 className="font-medium text-sm">3 mins away</h5>
            <p className="font-normal text-xs text-gray-600">
              Afforable, Auto rides
            </p>
          </div>
          <h2 className="text-lg font-semibold">₹50</h2>
        </div>
    </div>
      
  )
}

export default VehiclePanel