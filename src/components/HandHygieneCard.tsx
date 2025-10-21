import React from 'react';

const HandHygieneCard = () => {
  const handHygieneData = {
    compliance: 92,
    dispenserUsage: 1245,
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Hand Hygiene Compliance</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-gray-600">Compliance Rate</p>
          <p className="text-2xl font-bold text-green-500">{handHygieneData.compliance}%</p>
        </div>
        <div>
          <p className="text-gray-600">Dispenser Usage (24h)</p>
          <p className="text-2xl font-bold">{handHygieneData.dispenserUsage}</p>
        </div>
      </div>
    </div>
  );
};

export default HandHygieneCard;
