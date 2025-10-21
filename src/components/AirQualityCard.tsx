import React from 'react';

const AirQualityCard = () => {
  const airQualityData = {
    temperature: 22,
    humidity: 45,
    pm25: 12,
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Air Quality</h2>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <p className="text-gray-600">Temperature</p>
          <p className="text-2xl font-bold">{airQualityData.temperature}°C</p>
        </div>
        <div>
          <p className="text-gray-600">Humidity</p>
          <p className="text-2xl font-bold">{airQualityData.humidity}%</p>
        </div>
        <div>
          <p className="text-gray-600">PM2.5</p>
          <p className="text-2xl font-bold">{airQualityData.pm25} µg/m³</p>
        </div>
      </div>
    </div>
  );
};

export default AirQualityCard;
