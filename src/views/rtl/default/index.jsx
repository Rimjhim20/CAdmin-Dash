import React, { useState } from 'react';

const SystemSettings = () => {
  const [appointmentSlots, setAppointmentSlots] = useState(15);
  const [billingRules, setBillingRules] = useState('');
  const [notificationPreferences, setNotificationPreferences] = useState('');

  const handleAppointmentSlotsChange = (event) => {
    setAppointmentSlots(event.target.value);
  };

  const handleBillingRulesChange = (event) => {
    setBillingRules(event.target.value);
  };

  const handleNotificationPreferencesChange = (event) => {
    setNotificationPreferences(event.target.value);
  };

  const handleSaveSettings = () => {
    // Save the settings to the central state management system or send to an API
    // You can dispatch an action or make an API request here to update the settings

    // For demonstration purposes, let's log the settings to the console
    console.log('Appointment Slots:', appointmentSlots);
    console.log('Billing Rules:', billingRules);
    console.log('Notification Preferences:', notificationPreferences);
  };

  return (
    <div className="container mx-auto px-4 sm:px-6">
      <h2 className="text-2xl font-bold mb-4">System Settings</h2>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="bg-white rounded-lg shadow-md p-4">
          <h3 className="text-xl font-bold mb-2">Appointment Slots</h3>
          <p className="text-gray-600">Configure the number of available appointment slots per day.</p>
          <input
            type="number"
            className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={appointmentSlots}
            onChange={handleAppointmentSlotsChange}
          />
        </div>

        <div className="bg-white rounded-lg shadow-md p-4">
          <h3 className="text-xl font-bold mb-2">Billing Rules</h3>
          <p className="text-gray-600">Define the billing rules and policies for your diagnostic center.</p>
          <textarea
            className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={billingRules}
            onChange={handleBillingRulesChange}
          ></textarea>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4">
          <h3 className="text-xl font-bold mb-2">Notification Preferences</h3>
          <p className="text-gray-600">Set the notification preferences for different events and actions.</p>
          <textarea
            className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={notificationPreferences}
            onChange={handleNotificationPreferencesChange}
          ></textarea>
        </div>
      </div>

      <button
        className="mt-4 px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onClick={handleSaveSettings}
      >
        Save Settings
      </button>
    </div>
  );
};

export default SystemSettings;
