import { useState } from 'react';
import { Calendar, TrendingUp, TrendingDown } from 'lucide-react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import './Overview.css';

const Overview = () => {
  const [selectedDate] = useState('Today');

  // Mock data for Overall Occupancy chart
  const occupancyData = [
    { time: '8:00', count: 150 },
    { time: '9:00', count: 155 },
    { time: '10:00', count: 160 },
    { time: '11:00', count: 165 },
    { time: '12:00', count: 170 },
    { time: '13:00', count: 175 },
    { time: '14:00', count: 180 },
    { time: '15:00', count: 185 },
    { time: '16:00', count: 190 },
    { time: '17:00', count: 195 },
    { time: '18:00', count: 200 },
  ];

  // Mock data for Demographics Analysis
  const demographicsData = [
    { time: '8:00', male: 180, female: 150 },
    { time: '9:00', male: 185, female: 155 },
    { time: '10:00', male: 190, female: 160 },
    { time: '11:00', male: 195, female: 165 },
    { time: '12:00', male: 200, female: 170 },
    { time: '13:00', male: 205, female: 175 },
    { time: '14:00', male: 210, female: 180 },
    { time: '15:00', male: 215, female: 185 },
    { time: '16:00', male: 220, female: 190 },
    { time: '17:00', male: 225, female: 195 },
    { time: '18:00', male: 230, female: 200 },
  ];

  // Mock data for Demographics pie chart
  const pieData = [
    { name: 'Males', value: 55, color: '#5c9c9a' },
    { name: 'Females', value: 45, color: '#a8d5d3' },
  ];

  return (
    <div className="overview">
      <div className="overview-header">
        <h1>Overview</h1>
        <div className="date-selector">
          <Calendar size={18} />
          <span>{selectedDate}</span>
        </div>
      </div>

      {/* Occupancy Metrics */}
      <section className="metrics-section">
        <h2>Occupancy</h2>
        <div className="metrics-grid">
          <div className="metric-card">
            <h3>Live Occupancy</h3>
            <div className="metric-value">734</div>
            <div className="metric-change positive">
              <TrendingUp size={16} />
              <span>10% More than yesterday</span>
            </div>
          </div>
          <div className="metric-card">
            <h3>Today's Footfall</h3>
            <div className="metric-value">2,436</div>
            <div className="metric-change negative">
              <TrendingDown size={16} />
              <span>10% Less than yesterday</span>
            </div>
          </div>
          <div className="metric-card">
            <h3>Avg Dwell Time</h3>
            <div className="metric-value">08min 30sec</div>
            <div className="metric-change positive">
              <TrendingUp size={16} />
              <span>6% More than yesterday</span>
            </div>
          </div>
        </div>
      </section>

      {/* Overall Occupancy Chart */}
      <section className="chart-section">
        <h2>Overall Occupancy</h2>
        <div className="chart-container">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={occupancyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
              <XAxis
                dataKey="time"
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#666', fontSize: 12 }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#666', fontSize: 12 }}
                label={{ value: 'Count', angle: -90, position: 'insideLeft' }}
              />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="count"
                stroke="#5c9c9a"
                strokeWidth={2}
                dot={false}
                name="Occupancy"
              />
            </LineChart>
          </ResponsiveContainer>
          <div className="time-label">Time</div>
        </div>
      </section>

      {/* Demographics Section */}
      <section className="demographics-section">
        <h2>Demographics</h2>
        <div className="demographics-grid">
          {/* Pie Chart */}
          <div className="demographics-card">
            <h3>Chart of Demographics</h3>
            <div className="pie-chart-container">
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={90}
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="pie-center-label">
                <div>Total Crowd</div>
                <div className="percentage">100%</div>
              </div>
            </div>
            <div className="legend">
              <div className="legend-item">
                <div className="legend-dot" style={{ backgroundColor: '#5c9c9a' }}></div>
                <span>55% Males</span>
              </div>
              <div className="legend-item">
                <div className="legend-dot" style={{ backgroundColor: '#a8d5d3' }}></div>
                <span>45% Females</span>
              </div>
            </div>
          </div>

          {/* Demographics Analysis Chart */}
          <div className="demographics-card">
            <h3>Demographics Analysis</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={demographicsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                <XAxis
                  dataKey="time"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#666', fontSize: 12 }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#666', fontSize: 12 }}
                  label={{ value: 'Count', angle: -90, position: 'insideLeft' }}
                />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="male"
                  stroke="#5c9c9a"
                  strokeWidth={2}
                  dot={false}
                  name="Male"
                />
                <Line
                  type="monotone"
                  dataKey="female"
                  stroke="#a8d5d3"
                  strokeWidth={2}
                  dot={false}
                  name="Female"
                />
              </LineChart>
            </ResponsiveContainer>
            <div className="time-label">Time</div>
            <div className="chart-legend">
              <div className="legend-item">
                <div className="legend-dot" style={{ backgroundColor: '#5c9c9a' }}></div>
                <span>Male</span>
              </div>
              <div className="legend-item">
                <div className="legend-dot" style={{ backgroundColor: '#a8d5d3' }}></div>
                <span>Female</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Overview;
