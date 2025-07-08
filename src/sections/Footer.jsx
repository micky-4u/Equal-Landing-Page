import React from "react";

const Footer = () => (
  <footer className="bg-gray-100 text-gray-600 py-8 px-6 text-center text-sm">
    <p className="mb-2">&copy; {new Date().getFullYear()} e-qual Genie. All rights reserved.</p>
    <p className="mb-1">Built under license from CIRCA RL — Systems Intelligence for Problems That Endure.</p>
    <p className="text-gray-400 italic">Genie is a pre-spinout initiative operating across West Africa.</p>
  </footer>
);

export default Footer;
