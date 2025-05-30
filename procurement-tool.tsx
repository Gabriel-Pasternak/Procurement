import React, { useState, useEffect } from 'react';
import { 
  Package, Users, FileText, TrendingUp, CheckCircle, XCircle, Clock, User, LogOut, 
  Plus, Edit, Eye, Search, Filter, Download, Send, Bell, Upload, FileCheck, 
  AlertCircle, DollarSign, Building, Mail, Database, Paperclip, ChevronDown,
  Calendar, RefreshCw, Settings, Award, File, CheckSquare, Square, ChevronRight
} from 'lucide-react';

const AdvancedProcurementSystem = () => {
  // User Management
  const [users] = useState([
    { id: 1, username: 'admin', password: 'admin123', role: 'admin', name: 'Admin User', email: 'admin@company.com' },
    { id: 2, username: 'buyer1', password: 'buyer123', role: 'buyer', name: 'John Buyer', email: 'john@company.com' },
    { id: 3, username: 'approver1', password: 'approver123', role: 'approver', name: 'Sarah Approver', email: 'sarah@company.com' },
    { id: 4, username: 'supplier1', password: 'supplier123', role: 'supplier', name: 'Tech Supplies Inc.', email: 'contact@techsupplies.com' }
  ]);

  const [currentUser, setCurrentUser] = useState(null);
  const [activeView, setActiveView] = useState('dashboard');
  const [notifications, setNotifications] = useState([
    { id: 1, type: 'info', message: 'New RFQ response received', timestamp: new Date().toISOString(), read: false },
    { id: 2, type: 'warning', message: 'Invoice pending approval', timestamp: new Date().toISOString(), read: false }
  ]);

  // Enhanced Vendor/Supplier Management
  const [suppliers, setSuppliers] = useState([
    { 
      id: 1, 
      name: 'Tech Supplies Inc.', 
      category: 'IT Equipment', 
      contact: 'contact@techsupplies.com',
      rating: 4.5,
      status: 'active',
      onboardingStatus: 'completed',
      documents: ['Business License', 'Tax Certificate', 'Insurance'],
      performanceScore: 92,
      responseTime: '2 hours'
    },
    { 
      id: 2, 
      name: 'Office Essentials Ltd.', 
      category: 'Office Supplies', 
      contact: 'sales@officeessentials.com',
      rating: 4.2,
      status: 'active',
      onboardingStatus: 'completed',
      documents: ['Business License', 'Tax Certificate'],
      performanceScore: 88,
      responseTime: '4 hours'
    },
    {
      id: 3,
      name: 'New Supplier Co.',
      category: 'Machinery',
      contact: 'info@newsupplier.com',
      rating: 0,
      status: 'pending',
      onboardingStatus: 'in-progress',
      documents: [],
      performanceScore: 0,
      responseTime: 'N/A'
    }
  ]);

  // RFQ/RFP Management
  const [rfqs, setRfqs] = useState([
    {
      id: 'RFQ-2024-001',
      title: 'IT Equipment for New Office',
      type: 'RFQ',
      description: 'Need 50 laptops and accessories for new office setup',
      items: [
        { description: 'Laptop - Intel i7, 16GB RAM, 512GB SSD', quantity: 50, specifications: 'Windows 11 Pro' },
        { description: 'Wireless Mouse', quantity: 50, specifications: 'Bluetooth 5.0' },
        { description: 'Laptop Bags', quantity: 50, specifications: 'Professional, Black' }
      ],
      createdBy: 'John Buyer',
      createdDate: '2024-01-20',
      dueDate: '2024-02-05',
      status: 'active',
      invitedSuppliers: ['Tech Supplies Inc.', 'Office Essentials Ltd.'],
      responses: [
        {
          supplierId: 1,
          supplierName: 'Tech Supplies Inc.',
          submittedDate: '2024-01-22',
          totalAmount: 75000,
          items: [
            { description: 'Laptop - Intel i7, 16GB RAM, 512GB SSD', unitPrice: 1200, total: 60000 },
            { description: 'Wireless Mouse', unitPrice: 50, total: 2500 },
            { description: 'Laptop Bags', unitPrice: 250, total: 12500 }
          ],
          deliveryTime: '2 weeks',
          paymentTerms: 'Net 30',
          warranty: '3 years'
        },
        {
          supplierId: 2,
          supplierName: 'Office Essentials Ltd.',
          submittedDate: '2024-01-23',
          totalAmount: 72000,
          items: [
            { description: 'Laptop - Intel i7, 16GB RAM, 512GB SSD', unitPrice: 1150, total: 57500 },
            { description: 'Wireless Mouse', unitPrice: 40, total: 2000 },
            { description: 'Laptop Bags', unitPrice: 250, total: 12500 }
          ],
          deliveryTime: '3 weeks',
          paymentTerms: 'Net 45',
          warranty: '2 years'
        }
      ]
    }
  ]);

  // Purchase Orders with Invoice Tracking
  const [purchaseOrders, setPurchaseOrders] = useState([
    {
      id: 'PO-2024-001',
      rfqId: 'RFQ-2024-001',
      supplier: 'Tech Supplies Inc.',
      items: [
        { description: 'Ergonomic Office Chair', quantity: 10, unitPrice: 300, total: 3000 },
        { description: 'Standing Desk', quantity: 5, unitPrice: 500, total: 2500 }
      ],
      totalAmount: 5500,
      status: 'delivered',
      createdDate: '2024-01-13',
      expectedDelivery: '2024-01-20',
      actualDelivery: '2024-01-19',
      invoice: {
        id: 'INV-2024-001',
        amount: 5500,
        status: 'matched',
        submittedDate: '2024-01-20',
        dueDate: '2024-02-20'
      }
    }
  ]);

  // Document Management
  const [documents, setDocuments] = useState([
    {
      id: 1,
      name: 'Q1 Budget Report.pdf',
      type: 'Budget',
      uploadedBy: 'Admin User',
      uploadDate: '2024-01-15',
      size: '2.3 MB',
      tags: ['budget', 'q1', 'finance']
    },
    {
      id: 2,
      name: 'Supplier Agreement - Tech Supplies.docx',
      type: 'Contract',
      uploadedBy: 'Sarah Approver',
      uploadDate: '2024-01-10',
      size: '456 KB',
      tags: ['contract', 'supplier', 'legal']
    }
  ]);

  // ERP Integration Status (Simulated)
  const [erpStatus] = useState({
    connected: true,
    system: 'SAP S/4HANA',
    lastSync: '2024-01-25 14:30:00',
    syncStatus: 'success',
    pendingItems: 3
  });

  // Login state
  const [loginForm, setLoginForm] = useState({ username: '', password: '' });
  const [loginError, setLoginError] = useState('');

  // Notification Functions
  const addNotification = (type, message) => {
    const newNotification = {
      id: notifications.length + 1,
      type,
      message,
      timestamp: new Date().toISOString(),
      read: false
    };
    setNotifications([newNotification, ...notifications]);
  };

  const markNotificationRead = (id) => {
    setNotifications(notifications.map(n => 
      n.id === id ? { ...n, read: true } : n
    ));
  };

  // Login handler
  const handleLogin = () => {
    const user = users.find(u => 
      u.username === loginForm.username && u.password === loginForm.password
    );
    
    if (user) {
      setCurrentUser(user);
      setLoginError('');
      addNotification('info', `Welcome back, ${user.name}!`);
    } else {
      setLoginError('Invalid username or password');
    }
  };

  // Logout handler
  const handleLogout = () => {
    setCurrentUser(null);
    setActiveView('dashboard');
    setLoginForm({ username: '', password: '' });
  };

  // Create RFQ/RFP
  const [showNewRfq, setShowNewRfq] = useState(false);
  const [newRfq, setNewRfq] = useState({
    title: '',
    type: 'RFQ',
    description: '',
    dueDate: '',
    items: [{ description: '', quantity: 1, specifications: '' }],
    invitedSuppliers: []
  });

  const handleCreateRfq = () => {
    const rfq = {
      id: `${newRfq.type}-${new Date().getFullYear()}-${String(rfqs.length + 1).padStart(3, '0')}`,
      ...newRfq,
      createdBy: currentUser.name,
      createdDate: new Date().toISOString().split('T')[0],
      status: 'active',
      responses: []
    };
    
    setRfqs([rfq, ...rfqs]);
    addNotification('success', `${newRfq.type} created successfully`);
    setShowNewRfq(false);
    setNewRfq({
      title: '',
      type: 'RFQ',
      description: '',
      dueDate: '',
      items: [{ description: '', quantity: 1, specifications: '' }],
      invitedSuppliers: []
    });
  };

  // Supplier Onboarding
  const [showSupplierOnboarding, setShowSupplierOnboarding] = useState(false);
  const [onboardingStep, setOnboardingStep] = useState(1);
  const [newSupplierData, setNewSupplierData] = useState({
    name: '',
    category: '',
    contact: '',
    taxId: '',
    address: '',
    bankDetails: '',
    documents: []
  });

  // Login Screen
  if (!currentUser) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
          <div className="text-center mb-8">
            <Package className="w-16 h-16 text-blue-600 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-gray-800">Advanced Procurement System</h1>
            <p className="text-gray-600 mt-2">Streamlined Procurement Lifecycle</p>
          </div>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Username</label>
              <input
                type="text"
                value={loginForm.username}
                onChange={(e) => setLoginForm({ ...loginForm, username: e.target.value })}
                onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter username"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <input
                type="password"
                value={loginForm.password}
                onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter password"
              />
            </div>
            
            {loginError && (
              <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-2 rounded-lg text-sm">
                {loginError}
              </div>
            )}
            
            <button
              onClick={handleLogin}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200 font-medium"
            >
              Sign In
            </button>
          </div>
          
          <div className="mt-6 text-sm text-gray-600">
            <p className="font-medium mb-2">Demo Credentials:</p>
            <p>Admin: admin / admin123</p>
            <p>Buyer: buyer1 / buyer123</p>
            <p>Approver: approver1 / approver123</p>
            <p>Supplier: supplier1 / supplier123</p>
          </div>
        </div>
      </div>
    );
  }

  // Main Application
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Package className="w-8 h-8 text-blue-600 mr-3" />
              <h1 className="text-xl font-bold text-gray-800">Advanced Procurement System</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* ERP Status Indicator */}
              <div className="flex items-center space-x-2 text-sm">
                <Database className={`w-4 h-4 ${erpStatus.connected ? 'text-green-500' : 'text-red-500'}`} />
                <span className="text-gray-600">{erpStatus.system}</span>
              </div>
              
              {/* Notifications */}
              <div className="relative">
                <button className="relative text-gray-500 hover:text-gray-700">
                  <Bell className="w-5 h-5" />
                  {notifications.filter(n => !n.read).length > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {notifications.filter(n => !n.read).length}
                    </span>
                  )}
                </button>
              </div>
              
              {/* User Info */}
              <div className="text-sm text-gray-600">
                <span className="font-medium">{currentUser.name}</span>
                <span className="ml-2 px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs uppercase">
                  {currentUser.role}
                </span>
              </div>
              
              <button
                onClick={handleLogout}
                className="text-gray-500 hover:text-gray-700 transition"
              >
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex h-screen pt-16">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-md">
          <nav className="p-4 space-y-2">
            <button
              onClick={() => setActiveView('dashboard')}
              className={`w-full flex items-center space-x-3 px-4 py-2 rounded-lg transition ${
                activeView === 'dashboard' ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'
              }`}
            >
              <TrendingUp className="w-5 h-5" />
              <span>Dashboard</span>
            </button>
            
            {(currentUser.role === 'buyer' || currentUser.role === 'admin') && (
              <>
                <button
                  onClick={() => setActiveView('rfq')}
                  className={`w-full flex items-center space-x-3 px-4 py-2 rounded-lg transition ${
                    activeView === 'rfq' ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'
                  }`}
                >
                  <FileText className="w-5 h-5" />
                  <span>RFQ/RFP</span>
                </button>
                
                <button
                  onClick={() => setActiveView('quotes')}
                  className={`w-full flex items-center space-x-3 px-4 py-2 rounded-lg transition ${
                    activeView === 'quotes' ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'
                  }`}
                >
                  <DollarSign className="w-5 h-5" />
                  <span>Quote Comparison</span>
                </button>
              </>
            )}
            
            <button
              onClick={() => setActiveView('purchase-orders')}
              className={`w-full flex items-center space-x-3 px-4 py-2 rounded-lg transition ${
                activeView === 'purchase-orders' ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'
              }`}
            >
              <Package className="w-5 h-5" />
              <span>Purchase Orders</span>
            </button>
            
            <button
              onClick={() => setActiveView('invoices')}
              className={`w-full flex items-center space-x-3 px-4 py-2 rounded-lg transition ${
                activeView === 'invoices' ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'
              }`}
            >
              <FileCheck className="w-5 h-5" />
              <span>Invoice Matching</span>
            </button>
            
            <button
              onClick={() => setActiveView('suppliers')}
              className={`w-full flex items-center space-x-3 px-4 py-2 rounded-lg transition ${
                activeView === 'suppliers' ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'
              }`}
            >
              <Users className="w-5 h-5" />
              <span>Suppliers</span>
            </button>
            
            <button
              onClick={() => setActiveView('documents')}
              className={`w-full flex items-center space-x-3 px-4 py-2 rounded-lg transition ${
                activeView === 'documents' ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'
              }`}
            >
              <File className="w-5 h-5" />
              <span>Documents</span>
            </button>
            
            {currentUser.role === 'admin' && (
              <button
                onClick={() => setActiveView('integration')}
                className={`w-full flex items-center space-x-3 px-4 py-2 rounded-lg transition ${
                  activeView === 'integration' ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'
                }`}
              >
                <Settings className="w-5 h-5" />
                <span>Integrations</span>
              </button>
            )}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto">
          <div className="p-8">
            {/* Dashboard View */}
            {activeView === 'dashboard' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Dashboard</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  <div className="bg-white rounded-lg shadow p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-sm font-medium text-gray-600">Active RFQs</h3>
                      <FileText className="w-5 h-5 text-blue-500" />
                    </div>
                    <p className="text-2xl font-bold text-gray-800">
                      {rfqs.filter(r => r.status === 'active').length}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">Awaiting responses</p>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-sm font-medium text-gray-600">Pending Invoices</h3>
                      <FileCheck className="w-5 h-5 text-yellow-500" />
                    </div>
                    <p className="text-2xl font-bold text-gray-800">
                      {purchaseOrders.filter(po => po.invoice && po.invoice.status === 'pending').length}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">Requiring 2-way match</p>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-sm font-medium text-gray-600">Active Suppliers</h3>
                      <Users className="w-5 h-5 text-green-500" />
                    </div>
                    <p className="text-2xl font-bold text-gray-800">
                      {suppliers.filter(s => s.status === 'active').length}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">Fully onboarded</p>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-sm font-medium text-gray-600">ERP Sync</h3>
                      <Database className="w-5 h-5 text-purple-500" />
                    </div>
                    <p className="text-2xl font-bold text-gray-800">{erpStatus.pendingItems}</p>
                    <p className="text-xs text-gray-500 mt-1">Items pending sync</p>
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg shadow">
                    <div className="p-6 border-b">
                      <h3 className="text-lg font-semibold text-gray-800">Recent RFQ Responses</h3>
                    </div>
                    <div className="p-6">
                      <div className="space-y-4">
                        {rfqs.slice(0, 3).map(rfq => (
                          <div key={rfq.id} className="flex items-center justify-between">
                            <div>
                              <p className="font-medium text-gray-800">{rfq.title}</p>
                              <p className="text-sm text-gray-500">
                                {rfq.responses.length} responses • Due {rfq.dueDate}
                              </p>
                            </div>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              rfq.status === 'active' ? 'bg-green-100 text-green-700' :
                              'bg-gray-100 text-gray-700'
                            }`}>
                              {rfq.status}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow">
                    <div className="p-6 border-b">
                      <h3 className="text-lg font-semibold text-gray-800">Supplier Performance</h3>
                    </div>
                    <div className="p-6">
                      <div className="space-y-4">
                        {suppliers.filter(s => s.status === 'active').slice(0, 3).map(supplier => (
                          <div key={supplier.id} className="flex items-center justify-between">
                            <div className="flex-1">
                              <p className="font-medium text-gray-800">{supplier.name}</p>
                              <div className="flex items-center space-x-4 text-sm text-gray-500 mt-1">
                                <span>Score: {supplier.performanceScore}%</span>
                                <span>Response: {supplier.responseTime}</span>
                              </div>
                            </div>
                            <div className="flex items-center">
                              <span className="text-yellow-500">★</span>
                              <span className="text-sm font-medium text-gray-700 ml-1">
                                {supplier.rating}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* RFQ/RFP View */}
            {activeView === 'rfq' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-800">RFQ/RFP Management</h2>
                  <button
                    onClick={() => setShowNewRfq(true)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition flex items-center space-x-2"
                  >
                    <Plus className="w-5 h-5" />
                    <span>Create RFQ/RFP</span>
                  </button>
                </div>

                {/* Create RFQ Modal */}
                {showNewRfq && (
                  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
                      <div className="p-6 border-b">
                        <h3 className="text-xl font-semibold text-gray-800">Create New RFQ/RFP</h3>
                      </div>
                      
                      <div className="p-6 space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
                            <select
                              value={newRfq.type}
                              onChange={(e) => setNewRfq({ ...newRfq, type: e.target.value })}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                            >
                              <option value="RFQ">RFQ (Request for Quote)</option>
                              <option value="RFP">RFP (Request for Proposal)</option>
                            </select>
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Due Date</label>
                            <input
                              type="date"
                              value={newRfq.dueDate}
                              onChange={(e) => setNewRfq({ ...newRfq, dueDate: e.target.value })}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                            />
                          </div>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                          <input
                            type="text"
                            value={newRfq.title}
                            onChange={(e) => setNewRfq({ ...newRfq, title: e.target.value })}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter RFQ/RFP title"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                          <textarea
                            value={newRfq.description}
                            onChange={(e) => setNewRfq({ ...newRfq, description: e.target.value })}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                            rows="3"
                            placeholder="Enter detailed description"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Items</label>
                          <div className="space-y-2">
                            {newRfq.items.map((item, index) => (
                              <div key={index} className="grid grid-cols-3 gap-2">
                                <input
                                  type="text"
                                  placeholder="Description"
                                  value={item.description}
                                  onChange={(e) => {
                                    const items = [...newRfq.items];
                                    items[index].description = e.target.value;
                                    setNewRfq({ ...newRfq, items });
                                  }}
                                  className="px-3 py-2 border border-gray-300 rounded-lg text-sm"
                                />
                                <input
                                  type="number"
                                  placeholder="Quantity"
                                  value={item.quantity}
                                  onChange={(e) => {
                                    const items = [...newRfq.items];
                                    items[index].quantity = parseInt(e.target.value) || 0;
                                    setNewRfq({ ...newRfq, items });
                                  }}
                                  className="px-3 py-2 border border-gray-300 rounded-lg text-sm"
                                />
                                <input
                                  type="text"
                                  placeholder="Specifications"
                                  value={item.specifications}
                                  onChange={(e) => {
                                    const items = [...newRfq.items];
                                    items[index].specifications = e.target.value;
                                    setNewRfq({ ...newRfq, items });
                                  }}
                                  className="px-3 py-2 border border-gray-300 rounded-lg text-sm"
                                />
                              </div>
                            ))}
                            <button
                              onClick={() => {
                                setNewRfq({
                                  ...newRfq,
                                  items: [...newRfq.items, { description: '', quantity: 1, specifications: '' }]
                                });
                              }}
                              className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                            >
                              + Add Item
                            </button>
                          </div>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Invite Suppliers</label>
                          <div className="space-y-2">
                            {suppliers.filter(s => s.status === 'active').map(supplier => (
                              <label key={supplier.id} className="flex items-center space-x-2">
                                <input
                                  type="checkbox"
                                  checked={newRfq.invitedSuppliers.includes(supplier.name)}
                                  onChange={(e) => {
                                    if (e.target.checked) {
                                      setNewRfq({ 
                                        ...newRfq, 
                                        invitedSuppliers: [...newRfq.invitedSuppliers, supplier.name] 
                                      });
                                    } else {
                                      setNewRfq({ 
                                        ...newRfq, 
                                        invitedSuppliers: newRfq.invitedSuppliers.filter(s => s !== supplier.name) 
                                      });
                                    }
                                  }}
                                  className="w-4 h-4 text-blue-600 rounded"
                                />
                                <span className="text-sm">{supplier.name}</span>
                              </label>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-6 border-t flex justify-end space-x-3">
                        <button
                          onClick={() => setShowNewRfq(false)}
                          className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={handleCreateRfq}
                          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                        >
                          Create {newRfq.type}
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* RFQ List */}
                <div className="bg-white rounded-lg shadow overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ID</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Title</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Due Date</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Responses</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {rfqs.map(rfq => (
                        <tr key={rfq.id}>
                          <td className="px-6 py-4 text-sm font-medium text-gray-900">{rfq.id}</td>
                          <td className="px-6 py-4 text-sm text-gray-600">{rfq.title}</td>
                          <td className="px-6 py-4 text-sm text-gray-600">{rfq.type}</td>
                          <td className="px-6 py-4 text-sm text-gray-600">{rfq.dueDate}</td>
                          <td className="px-6 py-4 text-sm text-gray-600">{rfq.responses.length}</td>
                          <td className="px-6 py-4">
                            <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                              rfq.status === 'active' ? 'bg-green-100 text-green-700' :
                              'bg-gray-100 text-gray-700'
                            }`}>
                              {rfq.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-sm">
                            <button
                              onClick={() => setActiveView('quotes')}
                              className="text-blue-600 hover:text-blue-900"
                            >
                              View Quotes
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Quote Comparison View */}
            {activeView === 'quotes' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Quote Comparison Engine</h2>
                
                {rfqs.filter(rfq => rfq.responses.length > 0).map(rfq => (
                  <div key={rfq.id} className="mb-8">
                    <div className="bg-white rounded-lg shadow p-6">
                      <div className="mb-4">
                        <h3 className="text-lg font-semibold text-gray-800">{rfq.title}</h3>
                        <p className="text-sm text-gray-600">{rfq.id} • {rfq.responses.length} responses received</p>
                      </div>
                      
                      {/* Comparison Table */}
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead className="bg-gray-50">
                            <tr>
                              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Supplier</th>
                              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Total Amount</th>
                              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Delivery Time</th>
                              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Payment Terms</th>
                              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Warranty</th>
                              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Action</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-200">
                            {rfq.responses.map((response, index) => (
                              <tr key={index} className={index === 0 ? 'bg-green-50' : ''}>
                                <td className="px-4 py-3 text-sm font-medium text-gray-900">
                                  {response.supplierName}
                                  {index === 0 && (
                                    <span className="ml-2 text-xs bg-green-600 text-white px-2 py-1 rounded">
                                      Best Price
                                    </span>
                                  )}
                                </td>
                                <td className="px-4 py-3 text-sm font-bold text-gray-900">
                                  ${response.totalAmount.toLocaleString()}
                                </td>
                                <td className="px-4 py-3 text-sm text-gray-600">{response.deliveryTime}</td>
                                <td className="px-4 py-3 text-sm text-gray-600">{response.paymentTerms}</td>
                                <td className="px-4 py-3 text-sm text-gray-600">{response.warranty}</td>
                                <td className="px-4 py-3 text-sm">
                                  <button className="text-blue-600 hover:text-blue-900 font-medium">
                                    Create PO
                                  </button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      
                      {/* Item-wise Comparison */}
                      <div className="mt-6">
                        <h4 className="font-medium text-gray-700 mb-3">Item-wise Price Comparison</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {rfq.responses[0].items.map((item, itemIndex) => (
                            <div key={itemIndex} className="bg-gray-50 rounded-lg p-4">
                              <p className="font-medium text-gray-800 mb-2">{item.description}</p>
                              <div className="space-y-1">
                                {rfq.responses.map((response, respIndex) => (
                                  <div key={respIndex} className="flex justify-between text-sm">
                                    <span className="text-gray-600">{response.supplierName}:</span>
                                    <span className="font-medium">
                                      ${response.items[itemIndex].unitPrice}/unit
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Purchase Orders View */}
            {activeView === 'purchase-orders' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Purchase Orders</h2>
                
                <div className="bg-white rounded-lg shadow overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">PO Number</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Supplier</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Delivery</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Invoice</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {purchaseOrders.map(po => (
                        <tr key={po.id}>
                          <td className="px-6 py-4 text-sm font-medium text-gray-900">{po.id}</td>
                          <td className="px-6 py-4 text-sm text-gray-600">{po.supplier}</td>
                          <td className="px-6 py-4 text-sm font-medium text-gray-900">
                            ${po.totalAmount.toLocaleString()}
                          </td>
                          <td className="px-6 py-4">
                            <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                              po.status === 'delivered' ? 'bg-green-100 text-green-700' :
                              po.status === 'sent' ? 'bg-blue-100 text-blue-700' :
                              'bg-gray-100 text-gray-700'
                            }`}>
                              {po.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-600">
                            {po.actualDelivery || po.expectedDelivery}
                          </td>
                          <td className="px-6 py-4">
                            {po.invoice ? (
                              <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                                po.invoice.status === 'matched' ? 'bg-green-100 text-green-700' :
                                'bg-yellow-100 text-yellow-700'
                              }`}>
                                {po.invoice.status}
                              </span>
                            ) : (
                              <span className="text-gray-400">No invoice</span>
                            )}
                          </td>
                          <td className="px-6 py-4 text-sm">
                            <button className="text-blue-600 hover:text-blue-900">View Details</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Invoice Matching View */}
            {activeView === 'invoices' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Invoice 2-Way Matching</h2>
                
                <div className="space-y-6">
                  {purchaseOrders.filter(po => po.invoice).map(po => (
                    <div key={po.id} className="bg-white rounded-lg shadow p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-800">
                            Invoice {po.invoice.id}
                          </h3>
                          <p className="text-sm text-gray-600">
                            PO: {po.id} • Supplier: {po.supplier}
                          </p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          po.invoice.status === 'matched' ? 'bg-green-100 text-green-700' :
                          'bg-yellow-100 text-yellow-700'
                        }`}>
                          {po.invoice.status === 'matched' ? 'Matched' : 'Pending Match'}
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-8">
                        <div>
                          <h4 className="font-medium text-gray-700 mb-3">Purchase Order Details</h4>
                          <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-600">PO Amount:</span>
                              <span className="font-medium">${po.totalAmount.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-600">Order Date:</span>
                              <span>{po.createdDate}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-600">Delivery Date:</span>
                              <span>{po.actualDelivery || po.expectedDelivery}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-medium text-gray-700 mb-3">Invoice Details</h4>
                          <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-600">Invoice Amount:</span>
                              <span className="font-medium">${po.invoice.amount.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-600">Invoice Date:</span>
                              <span>{po.invoice.submittedDate}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-600">Due Date:</span>
                              <span>{po.invoice.dueDate}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-4 pt-4 border-t">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            {po.totalAmount === po.invoice.amount ? (
                              <CheckCircle className="w-5 h-5 text-green-500" />
                            ) : (
                              <AlertCircle className="w-5 h-5 text-yellow-500" />
                            )}
                            <span className="text-sm font-medium">
                              {po.totalAmount === po.invoice.amount ? 
                                'Amounts match perfectly' : 
                                `Variance: $${Math.abs(po.totalAmount - po.invoice.amount).toLocaleString()}`
                              }
                            </span>
                          </div>
                          
                          {po.invoice.status !== 'matched' && (
                            <div className="space-x-3">
                              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                                Reject
                              </button>
                              <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
                                Approve Match
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Suppliers View */}
            {activeView === 'suppliers' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-800">Supplier Management</h2>
                  <button
                    onClick={() => setShowSupplierOnboarding(true)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition flex items-center space-x-2"
                  >
                    <Plus className="w-5 h-5" />
                    <span>Onboard Supplier</span>
                  </button>
                </div>

                {/* Supplier Onboarding Modal */}
                {showSupplierOnboarding && (
                  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                      <div className="p-6 border-b">
                        <h3 className="text-xl font-semibold text-gray-800">Supplier Onboarding</h3>
                        <div className="flex items-center mt-4 space-x-2">
                          {[1, 2, 3, 4].map(step => (
                            <div key={step} className="flex items-center">
                              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                                step <= onboardingStep ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
                              }`}>
                                {step}
                              </div>
                              {step < 4 && (
                                <div className={`w-16 h-1 ${
                                  step < onboardingStep ? 'bg-blue-600' : 'bg-gray-200'
                                }`} />
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="p-6">
                        {onboardingStep === 1 && (
                          <div className="space-y-4">
                            <h4 className="font-medium text-gray-700 mb-4">Basic Information</h4>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                              <input
                                type="text"
                                value={newSupplierData.name}
                                onChange={(e) => setNewSupplierData({ ...newSupplierData, name: e.target.value })}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                              <select
                                value={newSupplierData.category}
                                onChange={(e) => setNewSupplierData({ ...newSupplierData, category: e.target.value })}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                              >
                                <option value="">Select category</option>
                                <option value="IT Equipment">IT Equipment</option>
                                <option value="Office Supplies">Office Supplies</option>
                                <option value="Machinery">Machinery</option>
                                <option value="Services">Services</option>
                              </select>
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">Contact Email</label>
                              <input
                                type="email"
                                value={newSupplierData.contact}
                                onChange={(e) => setNewSupplierData({ ...newSupplierData, contact: e.target.value })}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                              />
                            </div>
                          </div>
                        )}
                        
                        {onboardingStep === 2 && (
                          <div className="space-y-4">
                            <h4 className="font-medium text-gray-700 mb-4">Legal Information</h4>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">Tax ID</label>
                              <input
                                type="text"
                                value={newSupplierData.taxId}
                                onChange={(e) => setNewSupplierData({ ...newSupplierData, taxId: e.target.value })}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">Business Address</label>
                              <textarea
                                value={newSupplierData.address}
                                onChange={(e) => setNewSupplierData({ ...newSupplierData, address: e.target.value })}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                                rows="3"
                              />
                            </div>
                          </div>
                        )}
                        
                        {onboardingStep === 3 && (
                          <div className="space-y-4">
                            <h4 className="font-medium text-gray-700 mb-4">Banking Information</h4>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">Bank Details</label>
                              <textarea
                                value={newSupplierData.bankDetails}
                                onChange={(e) => setNewSupplierData({ ...newSupplierData, bankDetails: e.target.value })}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                                rows="3"
                                placeholder="Account name, number, routing, etc."
                              />
                            </div>
                          </div>
                        )}
                        
                        {onboardingStep === 4 && (
                          <div className="space-y-4">
                            <h4 className="font-medium text-gray-700 mb-4">Document Upload</h4>
                            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                              <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                              <p className="text-gray-600">Upload required documents</p>
                              <p className="text-sm text-gray-500 mt-1">Business License, Tax Certificate, Insurance</p>
                              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                                Select Files
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                      
                      <div className="p-6 border-t flex justify-between">
                        <button
                          onClick={() => {
                            if (onboardingStep > 1) setOnboardingStep(onboardingStep - 1);
                            else {
                              setShowSupplierOnboarding(false);
                              setOnboardingStep(1);
                            }
                          }}
                          className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
                        >
                          {onboardingStep === 1 ? 'Cancel' : 'Previous'}
                        </button>
                        <button
                          onClick={() => {
                            if (onboardingStep < 4) setOnboardingStep(onboardingStep + 1);
                            else {
                              // Complete onboarding
                              addNotification('success', 'Supplier onboarding initiated');
                              setShowSupplierOnboarding(false);
                              setOnboardingStep(1);
                            }
                          }}
                          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                        >
                          {onboardingStep === 4 ? 'Complete' : 'Next'}
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Suppliers Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {suppliers.map(supplier => (
                    <div key={supplier.id} className="bg-white rounded-lg shadow p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-800">{supplier.name}</h3>
                          <p className="text-sm text-gray-600">{supplier.category}</p>
                        </div>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          supplier.status === 'active' ? 'bg-green-100 text-green-700' :
                          'bg-yellow-100 text-yellow-700'
                        }`}>
                          {supplier.status}
                        </span>
                      </div>
                      
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Performance Score:</span>
                          <span className="font-medium">{supplier.performanceScore}%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Response Time:</span>
                          <span className="font-medium">{supplier.responseTime}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Rating:</span>
                          <div className="flex items-center">
                            <span className="text-yellow-500">★</span>
                            <span className="font-medium ml-1">{supplier.rating}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-4 pt-4 border-t">
                        {supplier.onboardingStatus === 'completed' ? (
                          <div className="flex items-center text-sm text-green-600">
                            <CheckCircle className="w-4 h-4 mr-1" />
                            <span>Fully Onboarded</span>
                          </div>
                        ) : (
                          <div className="flex items-center text-sm text-yellow-600">
                            <Clock className="w-4 h-4 mr-1" />
                            <span>Onboarding In Progress</span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Documents View */}
            {activeView === 'documents' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-800">Document Management</h2>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition flex items-center space-x-2">
                    <Upload className="w-5 h-5" />
                    <span>Upload Document</span>
                  </button>
                </div>
                
                <div className="bg-white rounded-lg shadow">
                  <div className="p-4 border-b">
                    <div className="flex items-center space-x-4">
                      <div className="flex-1">
                        <input
                          type="text"
                          placeholder="Search documents..."
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition flex items-center space-x-2">
                        <Filter className="w-4 h-4" />
                        <span>Filter</span>
                      </button>
                    </div>
                  </div>
                  
                  <div className="divide-y divide-gray-200">
                    {documents.map(doc => (
                      <div key={doc.id} className="p-4 hover:bg-gray-50 transition">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <File className="w-10 h-10 text-gray-400" />
                            <div>
                              <p className="font-medium text-gray-800">{doc.name}</p>
                              <p className="text-sm text-gray-500">
                                {doc.type} • {doc.size} • Uploaded by {doc.uploadedBy} on {doc.uploadDate}
                              </p>
                              <div className="flex items-center space-x-2 mt-1">
                                {doc.tags.map((tag, index) => (
                                  <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <button className="text-blue-600 hover:text-blue-900">
                              <Eye className="w-5 h-5" />
                            </button>
                            <button className="text-blue-600 hover:text-blue-900">
                              <Download className="w-5 h-5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Integration View */}
            {activeView === 'integration' && currentUser.role === 'admin' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">ERP Integration</h2>
                
                <div className="bg-white rounded-lg shadow p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <Database className={`w-12 h-12 ${erpStatus.connected ? 'text-green-500' : 'text-red-500'}`} />
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800">{erpStatus.system}</h3>
                        <p className="text-sm text-gray-600">
                          Status: <span className={erpStatus.connected ? 'text-green-600' : 'text-red-600'}>
                            {erpStatus.connected ? 'Connected' : 'Disconnected'}
                          </span>
                        </p>
                      </div>
                    </div>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center space-x-2">
                      <RefreshCw className="w-4 h-4" />
                      <span>Sync Now</span>
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-sm text-gray-600 mb-1">Last Sync</p>
                      <p className="font-medium text-gray-800">{erpStatus.lastSync}</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-sm text-gray-600 mb-1">Sync Status</p>
                      <p className="font-medium text-green-600 capitalize">{erpStatus.syncStatus}</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-sm text-gray-600 mb-1">Pending Items</p>
                      <p className="font-medium text-gray-800">{erpStatus.pendingItems}</p>
                    </div>
                  </div>
                  
                  <div className="border-t pt-6">
                    <h4 className="font-medium text-gray-700 mb-4">Integration Settings</h4>
                    <div className="space-y-4">
                      <label className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Auto-sync Purchase Orders</span>
                        <input type="checkbox" defaultChecked className="w-4 h-4 text-blue-600 rounded" />
                      </label>
                      <label className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Auto-sync Invoices</span>
                        <input type="checkbox" defaultChecked className="w-4 h-4 text-blue-600 rounded" />
                      </label>
                      <label className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Auto-sync Vendor Master</span>
                        <input type="checkbox" defaultChecked className="w-4 h-4 text-blue-600 rounded" />
                      </label>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 bg-white rounded-lg shadow p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Email Notification Settings</h3>
                  <div className="space-y-4">
                    <label className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-700">RFQ/RFP Notifications</p>
                        <p className="text-xs text-gray-500">Send emails when new RFQs are created or responses received</p>
                      </div>
                      <input type="checkbox" defaultChecked className="w-4 h-4 text-blue-600 rounded" />
                    </label>
                    <label className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-700">Approval Notifications</p>
                        <p className="text-xs text-gray-500">Notify approvers of pending items</p>
                      </div>
                      <input type="checkbox" defaultChecked className="w-4 h-4 text-blue-600 rounded" />
                    </label>
                    <label className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-700">Invoice Matching Alerts</p>
                        <p className="text-xs text-gray-500">Alert on invoice discrepancies</p>
                      </div>
                      <input type="checkbox" defaultChecked className="w-4 h-4 text-blue-600 rounded" />
                    </label>
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdvancedProcurementSystem;