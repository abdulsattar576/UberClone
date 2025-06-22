import React from 'react'
import 'remixicon/fonts/remixicon.css'
const LocationSearchPanel = ({  setpanelOpen,setvehicalePanel}) => {
    const sampleLocation=[
        {
            location: "101 Pine Rd, Ogdenville",
            icons: "ri-hotel-fill",
        },
        {
           location: "789 Oak Ave, Capital City",
         icons: "  ri-building-4-fill"
        },

       
    ]
return (
    <div className="space-y-4">
        {/* Sample locations with icons */}
        
      {sampleLocation.map((item,index)=>{
        return(
<div className="flex items-center gap-3 border-2 p-3 rounded-xl py-2 mx-2  border-white active:border-black " key={index} onClick={()=>{setvehicalePanel(true)
setpanelOpen(false)

}}>
            <span className="bg-[#eee] h-10 w-10 flex items-center justify-center rounded-full text-xl">
                <i className={`${item.icons}`} ></i>
            </span>
            <span className="text-base font-medium"  > {item.location}</span>
        </div>
        )
      })}
        
    </div>
)
}

export default LocationSearchPanel