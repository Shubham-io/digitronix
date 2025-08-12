import React from "react";

const Stats = () => {
  const stats = [
    {
      value: "+150%",
      label: "Conversion Rate Increased",
    },
    {
      value: "+87K",
      label: "Happy Ewebot Customers",
    },
    {
      value: "+20M",
      label: "Amount of Investments in 2022",
    },
  ];

  return (
    <section className="py-12 md:py-12 bg-transparent">
      <h2 className="text-4xl  lg:text-5xl text-center font-bold text-gray-900 mb-8">
        Our KPI's
      </h2>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-2">
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
