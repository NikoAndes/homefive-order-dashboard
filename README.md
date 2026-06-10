# HomeFive Order Dashboard

![Language](https://img.shields.io/badge/Language-JavaScript-yellow) ![Frontend](https://img.shields.io/badge/Frontend-React-61DAFB) ![Backend](https://img.shields.io/badge/Backend-Node.js-green) ![License](https://img.shields.io/badge/License-MIT-blue) ![Status](https://img.shields.io/badge/Status-Active-brightgreen)

## Overview

Full-stack order management dashboard built for a food delivery business context. Features a React frontend that displays real-time order status, revenue metrics, and customer analytics. The Node.js/Express backend exposes a REST API and uses simulated order data to demonstrate a production-like workflow without requiring a live database.

## Features

- Order list with status filters (Pending, In Progress, Delivered, Cancelled)
- Revenue summary cards with daily/weekly/monthly breakdown
- Customer table with sortable columns
- REST API with CRUD endpoints for orders
- Simulated JSON data seeder for demo purposes
- Responsive layout with mobile-friendly design

## Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React 18, React Router, Recharts |
| Backend | Node.js, Express.js |
| Styling | CSS Modules / Tailwind CSS |
| Data | JSON seed files (simulated) |
| HTTP Client | Axios |
| Dev Tools | Vite, Nodemon, ESLint |

## Project Structure

```
homefive-order-dashboard/
├── client/                  # React frontend
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/           # Dashboard, Orders, Customers
│   │   ├── services/        # Axios API calls
│   │   └── App.jsx
│   └── package.json
├── server/                  # Express backend
│   ├── routes/
│   │   └── orders.js        # Order CRUD endpoints
│   ├── data/
│   │   └── orders-seed.json # Simulated order data
│   └── index.js
├── .gitignore
├── LICENSE
└── README.md
```

## How to Run

### Prerequisites
- Node.js v18+ and npm

### Backend
```bash
cd server
npm install
npm run dev
# API runs on http://localhost:5000
```

### Frontend
```bash
cd client
npm install
npm run dev
# App runs on http://localhost:5173
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/orders | List all orders |
| GET | /api/orders/:id | Get order by ID |
| POST | /api/orders | Create new order |
| PUT | /api/orders/:id | Update order status |
| DELETE | /api/orders/:id | Delete order |

## What I Learned

- Building a full-stack application from scratch with React and Node.js
- RESTful API design and Express middleware patterns
- State management and data fetching in React with hooks
- Chart integration for business metrics visualization (Recharts)
- Structuring a monorepo with separate client/server workspaces
- Simulating realistic data for portfolio and testing purposes

## Future Improvements

- [ ] Add authentication with JWT (login/logout)
- [ ] Connect to a real database (PostgreSQL or MongoDB)
- [ ] Implement WebSocket for live order updates
- [ ] Deploy frontend to Vercel and backend to Railway
- [ ] Add unit and integration tests with Jest
- [ ] Export reports to PDF/CSV

## Author

**Nicolas Isaza Sierra** — [GitHub @NikoAndes](https://github.com/NikoAndes)

Mechatronics engineering student | Full-stack developer in training | UMNG, Colombia

## License

MIT License — see [LICENSE](LICENSE) for details.
