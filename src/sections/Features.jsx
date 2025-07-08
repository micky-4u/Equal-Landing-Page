import React from "react";

const features = [
  {
    title: "Instant Storefronts, No Internet Needed",
    description: "Activate a Branch with nothing but a phone number and photo. No website. No hosting. No delays.",
  },
  {
    title: "Trusted Transactions, Bank-Free",
    description: "Use Q Points to pay and get paid. Mobile money top-ups, Tab credit for loyal customers, and full transparency — no bank account required.",
  },
  {
    title: "Delivery Infrastructure, On-Demand",
    description: "Don’t own a vehicle? No problem. Genie connects you to a trained courier network with real-time tracking and routing.",
  },
  {
    title: "Visibility Without Algorithms",
    description: "Skip paid ads. Genie matches vendors to the right customers using behavior, location, and Boost Points — not invisible algorithms.",
  },
  {
    title: "One App. Everything You Need.",
    description: "Payments, logistics, storefronts, marketing, messaging — fully integrated. No switching between five different apps to run your business.",
  },
  {
    title: "Built for Africa’s Offline Majority",
    description: "Designed from the ground up for high-friction markets and cash-based economies. Genie isn’t adapted tech — it’s appropriate infrastructure.",
  },
];

const Features = () => (
  <section className="bg-gray-50 py-20 px-6" id="features">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
        What Makes Genie Different
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map(({ title, description }, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-lg shadow border hover:shadow-md transition duration-300"
          >
            <h3 className="text-xl font-semibold text-indigo-700 mb-2">{title}</h3>
            <p className="text-gray-700">{description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
