import React from 'react';

const Alerts = () => {
  const alerts = [
    { id: 1, message: 'High PM2.5 detected in Ward A.', level: 'critical' },
    { id: 2, message: 'Low hand hygiene compliance on Floor 3.', level: 'warning' },
    { id: 3, message: 'Dispenser #12 needs a refill.', level: 'info' },
    { id: 4, message: 'Unusual temperature drop in the ICU.', level: 'warning' },
  ];

  const getAlertColor = (level: string) => {
    switch (level) {
      case 'critical':
        return 'bg-red-100 border-red-500 text-red-700';
      case 'warning':
        return 'bg-yellow-100 border-yellow-500 text-yellow-700';
      case 'info':
        return 'bg-blue-100 border-blue-500 text-blue-700';
      default:
        return 'bg-gray-100 border-gray-500 text-gray-700';
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Alerts & Notifications</h2>
      <div className="space-y-4">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className={`border-l-4 p-4 ${getAlertColor(alert.level)}`}
            role="alert"
          >
            <p className="font-bold">{alert.level.charAt(0).toUpperCase() + alert.level.slice(1)}</p>
            <p>{alert.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Alerts;
