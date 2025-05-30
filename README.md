# Procurement Management Tool Frontend using React

Key Features Implemented:
1. User Authentication & Roles

Login system with three roles: Admin, Buyer, and Approver
Demo credentials provided on login screen:

Admin: admin / admin123
Buyer: buyer1 / buyer123
Approver: approver1 / approver123



2. Requisition Management

Buyers can create purchase requisitions with:

Multiple line items
Vendor selection
Priority levels (High/Medium/Low)
Department assignment


View and track all requisitions
Real-time total calculation

3. Approval Workflow

Approvers see pending requisitions in dedicated view
Can approve or reject with one click
Status tracking (pending, approved, rejected)
Approval details recorded

4. Purchase Order Creation

Convert approved requisitions to POs
Auto-generated PO numbers
Track delivery dates
Send POs to vendors

5. Vendor Management

View all vendors with ratings
Add new vendors (admin only)
Categories and contact information
Integration with requisition creation

6. Dashboard

Overview metrics (total requisitions, pending approvals, etc.)
Recent requisitions list
Top vendors by rating
Visual status indicators

7. Audit Logging

Tracks all system actions
Timestamps and user details
Admin-only visibility
Comprehensive activity history

Technical Implementation:

Built with React using hooks for state management
Modern, responsive UI with Tailwind CSS
Role-based access control throughout
All data stored in React state (no browser storage)
Real-time updates and calculations
