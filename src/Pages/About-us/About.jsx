import React, { useState } from "react";

const About = () => {

    const [activeTab, setActiveTab] = useState("Story");
  const content = {
    Story: `We started with a simple promise — to make parcel delivery fast,
    reliable, and stress-free. Over the years, our commitment to real-time
    tracking, efficient logistics, and customer-first service has made us a
    trusted partner for thousands.`,
    Mission: `Our mission is to simplify transportation and delivery services
    through technology, transparency, and trust — ensuring every delivery
    reaches its destination on time.`,
    Success: `We have successfully completed thousands of deliveries with a
    high customer satisfaction rate, building long-term relationships with
    individuals and businesses alike.`,
    Team: `Our team consists of experienced professionals who are passionate
    about logistics, customer service, and innovation.`,
  };
  return (
    <div>
      <section className="py-10 ">
        <div className="max-w-6xl mx-auto bg-white rounded-2xl p-12 shadow-sm">
          {/* Header */}
          <h2 className="text-3xl font-bold text-gray-800">About Us</h2>
          <p className="text-gray-500 mt-2 max-w-2xl">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal packages to business shipments — we
            deliver on time, every time.
          </p>

          <hr className="my-6 text-gray-300" />

          {/* Tabs */}
          <div className="flex gap-6 text-sm font-medium text-gray-500">
            {["Story", "Mission", "Success", "Team & Others"].map((tab) => (
              <button
                key={tab}
                onClick={() =>
                  setActiveTab(tab === "Team & Others" ? "Team" : tab)
                }
                className={`pb-2 border-b-2 transition ${
                  activeTab === (tab === "Team & Others" ? "Team" : tab)
                    ? "text-green-600 border-green-600"
                    : "border-transparent hover:text-gray-700"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="mt-6 text-gray-600 leading-relaxed space-y-4">
            <p>{content[activeTab]}</p>
            <p>{content[activeTab]}</p>
            <p>{content[activeTab]}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
