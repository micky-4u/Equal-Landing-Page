import React from "react";

const steps = [
  {
    step: "01",
    title: "Create a Branch",
    description:
      "Start with a phone number and photo. No forms, no delays. You’re live in minutes, not weeks."
  },
  {
    step: "02",
    title: "List Products or Services",
    description:
      "Add items, set prices in Q Points, and customize how you fulfill: delivery, in-person, or send-to-friend."
  },
  {
    step: "03",
    title: "Promote with Booster Points",
    description:
      "Earn visibility by using referral points. Customers see what’s relevant to them — no algorithms or cash ads."
  },
  {
    step: "04",
    title: "Deliver & Get Paid",
    description:
      "Use in-app couriers to fulfill orders instantly. Get paid through Q Points and mobile money — even offer Tabs for trusted clients."
  }
];

const HowItWorks = () => (
  <section className="bg-indigo-50 py-20 px-6" id="how-it-works">
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-3xl sm:text-4xl font-bold mb-12">
        From Sign-Up to Sale — in Four Simple Steps
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
        {steps.map(({ step, title, description }, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow transition"
          >
            <div className="text-indigo-600 text-sm font-bold mb-2">Step {step}</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
            <p className="text-gray-700">{description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
