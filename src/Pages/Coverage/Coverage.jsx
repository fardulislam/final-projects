import React, { useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";
const Coverage = () => {
const position = [23.6850, 90.3563]

  const servicecenter = useLoaderData();
 const  mapref = useRef(null)


    const hendlesearch = (e)=>{
        e.preventDefault()
        const location = e.target.location.value;
        const district = servicecenter.find(c => c.district.toLowerCase().startsWith(location.toLowerCase()));
        if(district){
            const coord =[district.latitude,district.longitude]
            console.log(district,coord)
            mapref.current.flyTo(coord,14)
        }
       
    }
  return (
    <div>
      <h3 className="text-3xl font-bold">we are hering for 64 district</h3>
      <div className="py-10">
       <form onSubmit={hendlesearch} action="">
         <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" className="grow" name="location" placeholder="Search" />
         
        </label>
       </form>
      </div>
      <div className="border w-full h-[800px] ">
        <MapContainer
          className="h-[800px]"
          center={position}
          zoom={8}
          ref={mapref}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {servicecenter.map((center) => (
            <Marker position={[center.latitude, center.longitude]}>
              <Popup>
                <strong>{center.district}</strong> <br />
                service area : {center.covered_area.join(", ")}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Coverage;
