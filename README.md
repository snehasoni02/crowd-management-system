# Kloudspot Dashboard

A modern, responsive dashboard for visualizing crowd analytics and occupancy data.

## Features

- **Overview Dashboard**: Real-time occupancy metrics, footfall tracking, and dwell time analytics
- **Interactive Charts**: Line charts for occupancy trends and demographics analysis
- **Demographics Visualization**: Pie chart and dual-line chart for gender-based crowd analysis
- **Responsive Design**: Matches the Figma design with modern UI/UX
- **Navigation**: Sidebar navigation with Overview and Crowd Entries pages
- **Authentication**: Login with username/password or Google OAuth
- **Google Sign-In**: Click "Continue with Google" to open Google account selection popup
- **Account Creation**: Modal for account creation information

## Tech Stack

- **React 18** with TypeScript
- **Vite** for fast development and building
- **React Router** for navigation
- **Recharts** for data visualization
- **Lucide React** for icons

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Google OAuth Setup (Optional)

To enable real Google Sign-In:

1. See detailed instructions in [GOOGLE_OAUTH_SETUP.md](./GOOGLE_OAUTH_SETUP.md)
2. Create a Google Cloud project and OAuth credentials
3. Update the Client ID in `src/pages/Login.tsx`

**Note:** The app works without OAuth setup - the button will open Google's login screen and simulate authentication for demo purposes.

### Build

```bash
npm run build
```

### Preview

```bash
npm run preview
```

## Project Structure

```
kloudspot-dashboard/
├── src/
│   ├── components/
│   │   ├── Sidebar.tsx          # Sidebar navigation component
│   │   └── Sidebar.css
│   ├── pages/
│   │   ├── Overview.tsx         # Main dashboard page
│   │   ├── Overview.css
│   │   ├── CrowdEntries.tsx     # Crowd entries page
│   │   └── CrowdEntries.css
│   ├── App.tsx                  # Main app component with routing
│   ├── App.css
│   ├── main.tsx                 # Entry point
│   └── index.css                # Global styles
├── public/
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## API Integration

The dashboard is designed to work with Kloudspot APIs. To integrate with real data:

1. Create an `src/api` folder
2. Add API service files for data fetching
3. Replace mock data in components with API calls

### Example API Structure

```typescript
// src/api/analytics.ts
export const fetchOccupancyData = async () => {
  const response = await fetch('/api/occupancy');
  return response.json();
};

export const fetchDemographicsData = async () => {
  const response = await fetch('/api/demographics');
  return response.json();
};
```

### Example Usage in Component

```typescript
import { useEffect, useState } from 'react';
import { fetchOccupancyData } from '../api/analytics';

// In component
useEffect(() => {
  const loadData = async () => {
    const data = await fetchOccupancyData();
    setOccupancyData(data);
  };
  loadData();
}, []);
```

## Design Specifications

The dashboard matches the provided Figma design with:

- **Sidebar Color**: Teal gradient (#2d5f5d to #1e3d3c)
- **Primary Chart Color**: #5c9c9a
- **Secondary Chart Color**: #a8d5d3
- **Background**: #f5f5f5
- **Cards**: White with subtle shadows
- **Typography**: System fonts with proper weights and sizes

## Current Features

### Overview Page
- **Live Occupancy**: Current occupancy count with trend indicator
- **Today's Footfall**: Total visitor count with comparison
- **Avg Dwell Time**: Average time spent with trend
- **Overall Occupancy Chart**: Time-based line chart showing occupancy throughout the day
- **Demographics Pie Chart**: Gender distribution visualization
- **Demographics Analysis**: Dual-line chart comparing male/female trends

### Crowd Entries Page
- Placeholder for future implementation

## Future Enhancements

- Real-time data updates
- Date range selection
- Export functionality
- Additional analytics views
- Historical data comparison
- Alert notifications

## Browser Support

- Chrome (recommended)
- Edge
- Safari
- Firefox

## License

MIT
