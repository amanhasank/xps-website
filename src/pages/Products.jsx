import React from "react";

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800 px-6 py-12 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-blue-900 mb-6">Our Products</h1>

      <p className="mb-4">
        XPS India manufactures a wide range of high-strength fasteners as per various standards:
      </p>
      <ul className="list-disc list-inside mb-6">
        <li>DIN Standards</li>
        <li>ISO Standards</li>
        <li>ANSI Standards</li>
        <li>BS Standards</li>
      </ul>

      <p className="mb-4">
        Our product range includes:
      </p>
      <ul className="list-disc list-inside mb-6">
        <li>High tensile bolts and nuts</li>
        <li>Socket head cap screws</li>
        <li>Hex bolts</li>
        <li>Threaded rods</li>
        <li>Special fasteners as per customer requirements</li>
      </ul>

      <p className="mb-4">
        We ensure quality through rigorous testing and are ISO 9001 certified.
      </p>

      <p className="mb-4">
        For detailed specifications and the complete product catalog, please visit the official website or contact our sales team.
      </p>

      <a href="/" className="text-blue-600 hover:underline">Back to Home</a>
    </main>
  );
}