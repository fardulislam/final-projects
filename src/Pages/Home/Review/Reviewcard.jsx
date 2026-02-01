import React from 'react';

const Reviewcard = ({rev}) => {
   const {userName}=rev
    return (
        <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md p-6 relative">
      {/* Quote icon */}
      <div className="text-3xl text-teal-200 mb-4">“</div>

      {/* Testimonial text */}
      <p className="text-gray-700 mb-6">
        A posture corrector works by providing support and gentle alignment
        to your shoulders, back, and spine, encouraging you to maintain proper
        posture throughout the day.
      </p>

      {/* Divider */}
      <hr className="border-dashed border-gray-300 mb-4" />

      {/* Author info */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-teal-800"></div>
        <div>
          <h3 className="text-teal-900 font-semibold">{userName}</h3>
          <p className="text-gray-500 text-sm">Senior Product Designer</p>
        </div>
      </div>
    </div>
    );
};

export default Reviewcard;