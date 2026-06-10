# HomeFive Order Dashboard

![Language](https://img.shields.io/badge/Language-JavaScript-yellow) ![Frontend](https://img.shields.io/badge/Frontend-HTML%2FCSS%2FJS-blue) ![License](https://img.shields.io/badge/License-MIT-blue) ![Status](https://img.shields.io/badge/Status-Active-brightgreen)

A responsive logistics dashboard prototype for e-commerce order tracking, operational metrics and order status visualization. Built with vanilla HTML, CSS and JavaScript — no frameworks required.

> All data is fictional. This project is a portfolio prototype inspired by real e-commerce logistics workflows.

## Overview

Small e-commerce businesses in Colombia often manage orders through spreadsheets and WhatsApp, making real-time tracking nearly impossible. This dashboard simulates a centralized operations view: all orders, key metrics and status filters in one place.

## Features

- 8 real-time metric cards (Total, New, Confirmed, In Process, Dispatched, Delivered, Returned, Cancelled)
- Filterable orders table by status
- Live search by customer name, city or order ID
- 30 fictional orders with Colombian cities and carriers
- Fully responsive (mobile + desktop)
- Dark theme with professional design system
- No dependencies — pure HTML, CSS, JavaScript
- Fallback data if `orders.json` fails to load

## Tech Stack

- HTML5
- CSS3 (custom properties, grid, flexbox)
- Vanilla JavaScript (ES6+)
- JSON (local data source)

## Project Structure

```
homefive-order-dashboard/
├── index.html          # Main dashboard page
├── styles.css          # Design system and layout
├── app.js              # Application logic
├── data/
│   └── orders.json     # 30 fictional orders
├── docs/
│   ├── business-context.md
│   └── roadmap.md
├── .gitignore
├── LICENSE
└── README.md
```

## How to Run

1. Clone the repository:
   ```bash
   git clone https://github.com/NikoAndes/homefive-order-dashboard.git
   cd homefive-order-dashboard
   ```

2. Open `index.html` directly in your browser.
   - Or use Live Server in VS Code for best results.

> **Note:** Opening via `file://` may block the JSON fetch due to CORS. Use a local server (VS Code Live Server, Python's `http.server`, etc.) to load orders from `data/orders.json`.

## Screenshots

> Screenshots will be added soon.

## What I Learned

- Structuring a frontend project without a framework
- Dynamic DOM manipulation and event-driven UI patterns
- CSS custom properties and dark theme design systems
- Responsive layouts with CSS Grid and Flexbox
- JSON data loading with `fetch()` and error handling
- Mapping real business logic (e-commerce logistics) into a UI prototype

## Future Improvements

- Node.js/Express REST API backend
- User authentication and role-based access
- PostgreSQL or MongoDB database
- Date range filters and analytics charts
- Integration with Shopify and Colombian carrier APIs
- Export to Excel/PDF

## Author

**Nicolas Isaza Sierra**  
GitHub: [@NikoAndes](https://github.com/NikoAndes)

## License

MIT License — see [LICENSE](LICENSE) for details.
