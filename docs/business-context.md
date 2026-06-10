# Business Context

## The Problem

Small e-commerce businesses in Colombia often manage orders through spreadsheets and WhatsApp. This makes real-time tracking, bottleneck detection and operational metrics nearly impossible.

This dashboard prototype provides a centralized view of all orders and statuses without requiring a complex backend.

## Why Dashboards Matter in Logistics

- Instantly identify orders pending, in transit, or delivered
- Detect problems early (high return or cancellation rates)
- Prioritize follow-up with carriers
- Make faster data-driven decisions

## Metrics Visualized

| Metric | Description |
|---|---|
| Total Orders | All orders in the system |
| New | Received, not yet confirmed |
| Confirmed | Accepted and ready to process |
| In Process | Being packed or prepared |
| Dispatched | Handed to the carrier |
| Delivered | Successfully delivered |
| Returned | Rejected or returned by customer |
| Cancelled | Cancelled before dispatch |

## Future Integration Potential

- REST API backend (Node.js, Spring Boot)
- Real carrier APIs (Servientrega, Coordinadora, TCC)
- Shopify or WooCommerce webhooks
- PostgreSQL or MongoDB database
- Scheduled jobs for auto-status updates

> All data in this prototype is completely fictional. No real customers or operations are involved.
