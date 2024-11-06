Project Overview
The Supplier Compliance Monitor & Insights Dashboard helps procurement teams track supplier performance and ensure compliance with contract terms (e.g., delivery times, quality standards, and agreed discounts). It uses AI to analyze compliance data and generate insights to improve supplier relationships.

Key Features
Supplier Management:

View Suppliers: List of suppliers with compliance scores and recent issues.
Supplier Details: View detailed compliance data, including metrics like delivery times and quality.
Compliance Monitoring:

Upload Data: Procurement teams can upload compliance data (e.g., late deliveries, quality issues).
AI Analysis: OpenAI analyzes data to identify patterns (e.g., frequent delays) and categorize issues (e.g., 'late deliveries').
Insights & Suggestions: AI provides actionable recommendations to improve compliance, like adjusting contract terms or adding penalties.
API Endpoints:

GET /suppliers: Fetch a list of suppliers.
POST /suppliers: Add new suppliers.
GET /suppliers/{id}: View detailed compliance data for a specific supplier.
POST /suppliers/check-compliance: Upload and analyze compliance data.
GET /suppliers/insights: Get AI-generated insights on improving compliance.
Tech Stack
Backend: FastAPI with PostgreSQL to manage supplier data and compliance records.
Frontend: React.js for a simple and clean UI with components like a Supplier List, Compliance Dashboard, and Data Upload Form.
AI Integration: OpenAI for analyzing compliance issues and suggesting improvements.
Extra Features (Optional)
Automated Alerts: Notify users when a supplier’s compliance score drops below a threshold.
Compliance Trends: Visualize supplier compliance trends over time.
Conclusion
This dashboard streamlines supplier management, improves decision-making through AI-driven insights, and helps procurement teams stay proactive about compliance.
