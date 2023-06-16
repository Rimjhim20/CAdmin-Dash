import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const GeneralSettings = () => {
  const [appointmentSlots, setAppointmentSlots] = useState(15);
  const [billingRules, setBillingRules] = useState('');
  const [notificationPreferences, setNotificationPreferences] = useState('');

  const handleAppointmentSlotsChange = (event) => {
    setAppointmentSlots(event.target.value);
  };

  const handleBillingRulesChange = (event) => {
    setBillingRules(event.target.value);
  };
  const [notificationStartRange, setNotificationStartRange] = useState(0);
  const [notificationEndRange, setNotificationEndRange] = useState(100);
  
  const handleNotificationStartChange = (event) => {
    setNotificationStartRange(event.target.value);
  };
  
  const handleNotificationEndChange = (event) => {
    setNotificationEndRange(event.target.value);
  };
  const handleNotificationPreferencesChange = (event) => {
    setNotificationPreferences(event.target.value);
  };

  const handleSaveSettings = () => {
    toast.success('Setting Saved Successfully', {
      position: toast.POSITION.TOP_RIGHT
    });
    // Save the settings to the central state management system or send to an API
    // You can dispatch an action or make an API request here to update the settings
  };

  return (
    <div className="container mx-auto px-4 sm:px-6">
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
  <ReactQuill
    className="mt-2"
    value={billingRules}
    onChange={handleBillingRulesChange}
    modules={{
      toolbar: [
        [{ header: [1, 2, false] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        ['link', 'image'],
        ['clean'],
      ],
    }}
    formats={[
      'header',
      'bold',
      'italic',
      'underline',
      'strike',
      'blockquote',
      'list',
      'bullet',
      'link',
      'image',
    ]}
    placeholder="Enter your billing rules here..."
  />
</div>

        <div className="bg-white rounded-lg shadow-md p-4">
  <h3 className="text-xl font-bold mt-4 mb-2">Notification Preferences</h3>
  <p className="text-gray-600">Set the notification preferences within a number range.</p>
  <div className="flex items-center">
    <label htmlFor="notificationStart" className="mr-2">
      Start Range:
    </label>
    <input
      id="notificationStart"
      type="number"
      min={0}
      max={100}
      className="w-16 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      value={notificationStartRange}
      onChange={handleNotificationStartChange}
    />
    <span className="mx-2">to</span>
    <label htmlFor="notificationEnd" className="mr-2">
      End Range:
    </label>
    <input
      id="notificationEnd"
      type="number"
      min={0}
      max={100}
      className="w-16 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      value={notificationEndRange}
      onChange={handleNotificationEndChange}
    />
  </div>
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

const EnvironmentSettings = () => {
  // Add your environment-related settings and functionality here

  const [encryptionEnabled, setEncryptionEnabled] = useState(false);
  const [userAuthentication, setUserAuthentication] = useState(false);
  const [dataBackupEnabled, setDataBackupEnabled] = useState(false);
  const [supportTickets, setSupportTickets] = useState(0);
  const [systemHealth, setSystemHealth] = useState('Good');
  const handleSaveSettings = () => {
    // Save the settings to the central state management system or send to an API
    // You can dispatch an action or make an API request here to update the settings
  };
  const toggleEncryption = () => {
    setEncryptionEnabled(!encryptionEnabled);
  };

  const toggleUserAuthentication = () => {
    setUserAuthentication(!userAuthentication);
  };

  const toggleDataBackup = () => {
    setDataBackupEnabled(!dataBackupEnabled);
  };

  const incrementSupportTickets = () => {
    setSupportTickets(supportTickets + 1);
  };

  const decrementSupportTickets = () => {
    if (supportTickets > 0) {
      setSupportTickets(supportTickets - 1);
    }
  };

  const handleSystemHealthChange = (event) => {
    setSystemHealth(event.target.value);
  };

  return (
    <div className="container mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-lg shadow-md p-4 mb-4">
        <h3 className="text-xl font-bold mb-2">Security and Privacy</h3>
        <div className="flex items-center mb-2">
          <input
            type="checkbox"
            checked={encryptionEnabled}
            onChange={toggleEncryption}
            className="form-checkbox mr-2"
          />
          <span>Encryption Enabled</span>
        </div>
        <div className="flex items-center mb-2">
          <input
            type="checkbox"
            checked={userAuthentication}
            onChange={toggleUserAuthentication}
            className="form-checkbox mr-2"
          />
          <span>User Authentication</span>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={dataBackupEnabled}
            onChange={toggleDataBackup}
            className="form-checkbox mr-2"
          />
          <span>Data Backup Enabled</span>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-4 mb-4">
        <h3 className="text-xl font-bold mb-2">Support and Troubleshooting</h3>
        <div className="flex items-center mb-2">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={incrementSupportTickets}
          >
            Add Support Ticket
          </button>
          <button
            className="px-4 py-2 ml-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
            onClick={decrementSupportTickets}
          >
            Remove Support Ticket
          </button>
        </div>
        <p className="text-gray-600 mb-2">Number of Support Tickets: {supportTickets}</p>
        <div className="mb-2">
          <label className="block text-gray-600 mb-1" htmlFor="systemHealth">System Health:</label>
          <select
            id="systemHealth"
            value={systemHealth}
            onChange={handleSystemHealthChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Good">Good</option>
            <option value="Fair">Fair</option>
            <option value="Poor">Poor</option>
          </select>
        </div>
        <p className="text-gray-600">System Health: {systemHealth}</p>
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

const DataSettings = () => {
  // Add your environment-related settings and functionality here

  const [backupStatus, setBackupStatus] = useState(false);
  const [archivingStatus, setArchivingStatus] = useState(false);
  const [retentionPeriod, setRetentionPeriod] = useState('');
  const handleBackup = () => {
    // Perform backup logic here
    setBackupStatus(true);
  };

  const handleRestore = () => {
    // Perform restore logic here
    setBackupStatus(false);
  };

  const handleArchiving = () => {
    // Perform archiving logic here
    setArchivingStatus(true);
  };

  const handleRetentionPeriodChange = (event) => {
    setRetentionPeriod(event.target.value);
  };

  const handleSaveRetentionPeriod = () => {
    // Save retention period logic here
    console.log('Retention Period:', retentionPeriod);
  };

  return (
    <div className="container mx-auto px-4 sm:px-6">
      <div className="bg-white rounded-lg shadow-md p-4 mb-4">
        <h3 className="text-xl font-bold mb-2">Backup and Restore Data</h3>
        {backupStatus ? (
          <button
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
            onClick={handleRestore}
          >
            Restore Data
          </button>
        ) : (
          <button
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
            onClick={handleBackup}
          >
            Perform Backup
          </button>
        )}
      </div>

      <div className="bg-white rounded-lg shadow-md p-4 mb-4">
        <h3 className="text-xl font-bold mb-2">Data Archiving</h3>
        {archivingStatus ? (
          <p className="text-green-500">Data Archiving in Progress</p>
        ) : (
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={handleArchiving}
          >
            Start Archiving
          </button>
        )}
      </div>

      <div className="bg-white rounded-lg shadow-md p-4 mb-4">
        <h3 className="text-xl font-bold mb-2">Retention Policies</h3>
        <p className="text-gray-600 mb-2">
          Define policies to determine how long data should be retained, considering legal, compliance, and business requirements.
        </p>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Retention Period"
          value={retentionPeriod}
          onChange={handleRetentionPeriodChange}
        />
        <button
          className="mt-2 px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={handleSaveRetentionPeriod}
        >
          Save Retention Period
        </button>
      </div>
    </div>
  );
};
const SystemSettings = () => {
  const [activeTab, setActiveTab] = useState('general');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="container mx-auto px-4 sm:px-6">
      <div className="flex justify-center mt-4 mb-8">
        <button
          className={`mr-4 px-4 py-2 text-white rounded-md focus:outline-none ${
            activeTab === 'general' ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'
          }`}
          onClick={() => handleTabChange('general')}
        >
          General Settings
        </button>
        <button
          className={`mr-4 px-4 py-2 text-white rounded-md focus:outline-none ${
            activeTab === 'environment' ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'
          }`}
          onClick={() => handleTabChange('environment')}
        >
          Security Settings
        </button>
        <button
          className={`px-4 py-2 text-white rounded-md focus:outline-none ${
            activeTab === 'data' ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'
          }`}
          onClick={() => handleTabChange('data')}
        >
          Data Settings
        </button>
      </div>

      {activeTab === 'general' && <GeneralSettings />}
      {activeTab === 'environment' && <EnvironmentSettings />}
      {activeTab === 'data' && <DataSettings />}
    </div>
  );
};

export default SystemSettings;
