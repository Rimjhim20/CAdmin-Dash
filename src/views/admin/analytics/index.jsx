import React, { useState } from 'react';
import Chart from 'chart.js/auto';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Bar, Doughnut, Line } from 'react-chartjs-2';
import { CategoryScale } from 'chart.js';
Chart.register(CategoryScale);

const AnalyticsAndInsights = () => {
  const [patientVisits, setPatientVisits] = useState(500);
  const [waitTimes, setWaitTimes] = useState(20);
  const [revenue, setRevenue] = useState(100000);
  const [expense, setExpense] = useState(80000);
  const [patientSatisfaction, setPatientSatisfaction] = useState(4.5);

  const handlePatientVisitsChange = (event) => {
    setPatientVisits(event.target.value);
  };

  const handleWaitTimesChange = (event) => {
    setWaitTimes(event.target.value);
  };

  const handleRevenueChange = (event) => {
    setRevenue(event.target.value);
  };
  const handleExpenseChange = (event) => {
    setExpense(event.target.value);
  };

  const handlePatientSatisfactionChange = (event) => {
    setPatientSatisfaction(event.target.value);
  };

  // Dummy data for cost analysis
  const costAnalysisData = {
    labels: ['Discounts', 'Coupons', 'Cashbacks'],
    datasets: [
      {
        label: 'Cost Analysis',
        data: [5000, 3000, 2000],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(75, 192, 192, 0.6)',
        ],
      },
    ],
  };

  // Dummy data for financials
  const financialsData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Revenue',
        data: [120000, 150000, 90000, 110000, 135000, 140000],
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
      },
    ],
  };

  const financialsData1 = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
    
      {
        label: 'Expenses',
        data: [100000, 110000, 95000, 105000, 120000, 125000],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
      },
    ],
  };
  // Dummy data for patient satisfaction
  const patientSatisfactionData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Satisfaction Rating',
        data: [4.2, 4.5, 4.7, 4.3, 4.6, 4.4],
        borderColor: 'rgba(75, 192, 192, 1)',
        fill: false,
      },
    ],
  };

  // Dummy data for patient visits
  const patientVisitsData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Patient Visits',
        data: [500, 600, 550, 700, 650, 600],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
      },
    ],
  };

  // Dummy data for wait times
  const waitTimesData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Wait Times',
        data: [20, 18, 22, 19, 21, 20],
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
      },
    ],
  };

  return (
    <div className="container mx-auto px-4 sm:px-6">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="bg-white rounded-lg shadow-md p-4">
          <h3 className="text-xl font-bold mb-2">Key Performance Indicators (KPIs)</h3>
          <p className="text-gray-600">
            Track and analyze various metrics such as patient visits, appointment wait times, revenue, and resource
            utilization.
          </p>
          <div>
            <label className="block font-semibold">Patient Visits:</label>
            <input
              type="number"
              className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={patientVisits}
              onChange={handlePatientVisitsChange}
            />
          </div>
          <div>
            <label className="block font-semibold">Wait Times (minutes):</label>
            <input
              type="number"
              className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={waitTimes}
              onChange={handleWaitTimesChange}
            />
          </div>
          <div className="mt-4">
            <Line data={patientVisitsData} />
          </div>
          <div className="mt-4">
            <Line data={waitTimesData} />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4">
          <h3 className="text-xl font-bold mb-2">Financials</h3>
          <p className="text-gray-600">
            Gain insights into the financial aspects of your diagnostic center, including revenue generation, expenses,
            profitability, and cost analysis.
          </p>
          <div>
            <label className="block font-semibold">Revenue:</label>
            <input
              type="number"
              className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={revenue}
              onChange={handleRevenueChange}
            />
          </div>
           <div>
            <label className="block font-semibold">Expenses:</label>
            <input
              type="number"
              className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={expense}
              onChange={handleExpenseChange}
            />
          </div>
          <div className="mt-4">
            <Line data={financialsData} />
          </div>
          <div className="mt-4">
            <Line data={financialsData1} />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4">
          <h3 className="text-xl font-bold mb-2">Patient Satisfaction</h3>
          <p className="text-gray-600">
            Measure and evaluate patient satisfaction levels through feedback and surveys, allowing you to identify areas
            for improvement and enhance the overall patient experience.
          </p>
          <div>
            <label className="block font-semibold">Satisfaction Rating:</label>
            <input
              type="number"
              step="0.1"
              min="0"
              max="5"
              className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={patientSatisfaction}
              onChange={handlePatientSatisfactionChange}
            />
          </div>
          <div className="mt-4">
            <Doughnut data={patientSatisfactionData} />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4">
          <h3 className="text-xl font-bold mb-2">Cost Analysis with Coupons and Cashbacks</h3>
          <p className="text-gray-600">
            Conduct detailed cost analysis by considering discounts, coupons, cashbacks, and other promotional offers.
            This enables you to assess the impact of these incentives on your financial performance.
          </p>
          <div className="mt-4">
            <Bar data={costAnalysisData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsAndInsights;
