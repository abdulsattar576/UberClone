import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmRide from "../components/ConfirmRide";
import LookingForDriver from "../components/LookingForDriver";
import WaitingForDriver from "../components/WaitingForDriver";

const Home = () => {
  const [pickup, setpickup] = useState("");
  const [destination, setdestination] = useState("");
  const [panelOpen, setpanelOpen] = useState(false);
  const [vehicalePanel, setvehicalePanel] = useState(false);
  const [confirmRide, setconfirmRide] = useState(false);
  const [vehicleFound, setvehicleFound] = useState(false)
  const [waitForDriver, setwaitForDriver] = useState(false)
  const panelRef = useRef(null);
  const panelClose = useRef(null);
  const VehiclePanelRef = useRef(null);
  const confirmRideRef = useRef(null);
  const vehicleFoundRef=useRef(null);
  const waitForDriverRef=useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  useGSAP(() => {
    if (panelOpen) {
      gsap.to(panelRef.current, { height: "70%" });
      gsap.to(panelClose.current, {
        opacity: 1,
        padding: 20,
      });
    } else {
      gsap.to(panelRef.current, { height: "0%" });
      gsap.to(panelClose.current, {
        opacity: 0,
        padding: 20,
      });
    }
  }, [panelOpen]);
  //gsap for vechile panel ref
  useGSAP(() => {
    if (vehicalePanel) {
      gsap.to(VehiclePanelRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(VehiclePanelRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [vehicalePanel]);
  // gsap for cofirmRIde
  useGSAP(() => {
    if (confirmRide) {
      gsap.to(confirmRideRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(confirmRideRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [confirmRide]);
  // for looking for a driver
  useGSAP(() => {
    if (vehicleFound) {
      gsap.to(vehicleFoundRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(vehicleFoundRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [vehicleFound]);
  //waiting for driver
  useGSAP(() => {
    if (waitForDriver) {
      gsap.to(waitForDriverRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(waitForDriverRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [waitForDriver]);
  return (
    <div className="relative h-screen overflow-hidden">
      <img
        className="w-16 absolute left-5 top-5"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt="Uber Logo"
      />
      <div className="h-screen w-screen">
        <img
          className="w-full h-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>
      <div className=" absolute  h-screen w-full flex flex-col justify-end top-0 ">
        <div className="h-[30%] bg-white p-5 relative ">
          <h5 className="absolute top-6 right-6 text-2xl ">
            <i
              className="ri-arrow-down-s-line opacity-0"
              onClick={() => setpanelOpen(false)}
              ref={panelClose}
            ></i>
          </h5>
          <h4 className="font-semibold text-3xl">Find a trip</h4>
          <form onSubmit={handleSubmit}>
            <div className=" line absolute h-[50%] w-1 top[80%] bg-gray-900 left-10 rounded-full"></div>
            <input
              className="bg-[#eee] px-12 py-2 text-lg rounded-lg mb-3 w-full mt-2"
              type="text"
              placeholder="Add  a pickup location"
              name="pickup"
              value={pickup}
              onChange={(e) => setpickup(e.target.value)}
              onClick={() => setpanelOpen(true)}
            />
            <input
              className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full"
              placeholder="Enter your destination"
              name="destination"
              value={destination}
              onChange={(e) => setdestination(e.target.value)}
              onClick={() => setpanelOpen(true)}
            />
          </form>
        </div>
        <div className="bg-white" ref={panelRef}>
          <LocationSearchPanel
            setvehicalePanel={setvehicalePanel}
            setpanelOpen={setpanelOpen}
          />
        </div>
      </div>
      {/* choose vehicle type panel*/}
      <div
        className="fixed z-10 bottom-0  w-full px-3 bg-white translate-y-full py-10 pt-14"
        ref={VehiclePanelRef}
      >
        <VehiclePanel
          setvehicalePanel={setvehicalePanel}
          setconfirmRide={setconfirmRide}
        />
      </div>
      {/* confirm ride panel */}
      <div
        className="fixed z-10 bottom-0  w-full px-3 bg-white translate-y-full   py-6 pt-12"
        ref={confirmRideRef}
      >
        <ConfirmRide setconfirmRide={setconfirmRide} setvehicleFound={setvehicleFound}/>
      </div>
      {/* looking for a driver */}
      <div ref={vehicleFoundRef} className="fixed z-10 bottom-0  w-full px-3 bg-white translate-y-full   py-6 pt-12">
<LookingForDriver setvehicleFound={setvehicleFound}/>
      </div>
      {/* waiting for a driver */}
      <div ref={waitForDriverRef} className="fixed z-10 bottom-0  w-full px-3 bg-white py-6 pt-12 translate-y-full">
 <WaitingForDriver setwaitForDriver={setwaitForDriver}/>
      </div>
    </div>
  );
};

export default Home;
