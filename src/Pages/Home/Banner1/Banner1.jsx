import React from 'react';
import iconimg from '../../../assets/bookingIcon.png';
const Banner1 = () => {
    const service = [
        {
            icon:iconimg,
           header:'Booking pick & data',
           title:'From personal packages to business shipments — we deliver on time, every time.'
        },
        {
           icon:iconimg,
           header:'Booking pick & data',
           title:'From personal packages to business shipments — we deliver on time, every time.'   
        },
         {
           icon:iconimg,
           header:'Booking pick & data',
           title:'From personal packages to business shipments — we deliver on time, every time.'   
        },
        {
           icon:iconimg,
           header:'Booking pick & data',
           title:'From personal packages to business shipments — we deliver on time, every time.'   
        },
        
    ]
    return (
        <div className='grid grid-cols-1 md:grid-cols-4 gap-4 py-10 '>
           {
            service.map(({header,title,icon})=>(
                <div className="bg-primary p-4 text-center rounded-2xl px-10">
                    <img className='max-w-3xl mx-auto' src={icon} alt="" />
                    <h1>{header}</h1>
                    <h2>{title}</h2>
                </div>
            ))
           } 
        </div>
    );
};

export default Banner1;