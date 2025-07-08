import React from "react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-indigo-700 via-purple-700 to-indigo-900 text-white py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6">
          Digitize the Undigitized.
        </h1>
        <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto mb-10">
          Genie by e-qual is the AI-powered platform built for Africa’s offline economy — no bank account, website, or code required.
        </p>
        <a
          href="#get-started"
          className="inline-block bg-white text-indigo-700 hover:bg-indigo-50 font-semibold px-6 py-3 rounded-lg transition"
        >
          Launch Your Branch
        </a>
      </div>
    </section>
  );
};

export default Hero;
