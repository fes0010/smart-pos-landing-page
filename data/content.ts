import { AIFeature, Benefit, POSFeatureCategory } from '@/types'

export const heroContent = {
  headline: 'The AI-Powered Point of Sale That Handles the Numbers While You Grow Your Business',
  subheadline: 'Automated daily reports, real-time M-Pesa sales, and smart inventory insights. Built for Kenyan dukas, big and small, to finally make more money effortlessly.',
  primaryCTA: {
    text: 'Try Live Demo',
    href: 'https://demopos.munene.shop',
    variant: 'primary' as const,
  },
  secondaryCTA: {
    text: 'Chat on WhatsApp',
    href: 'https://wa.me/254741047776?text=Hi%2C%20I%27d%20like%20to%20request%20a%20free%20demo%20of%20Smart%20POS',
    variant: 'outline' as const,
  },
}

export const aiFeatures: AIFeature[] = [
  {
    id: 'daily-report',
    title: 'Daily Business Report AI Agent',
    description: 'Your automated business analyst that works at closing time',
    icon: 'DocumentReport',
    highlights: [
      'Runs automatically at your closing time (Kenya time)',
      'Complete daily report with executive summary, profit analysis, and staff performance',
      'Top products, category performance, and inventory alerts',
      'Returns analysis and customer insights',
      'Practical recommendations in simple language',
    ],
  },
  {
    id: 'conversational-assistant',
    title: 'Conversational AI Assistant',
    description: 'Ask anything about your business in plain language',
    icon: 'Chat',
    highlights: [
      'Natural language questions about sales, profit, and stock',
      'Compare performance across different time periods',
      'Identify trends and opportunities instantly',
      'Safe stock adjustments with confirmation',
      'Available 24/7 to answer your questions',
    ],
    exampleQuestions: [
      '"How did my shop perform today compared to yesterday?"',
      '"Which products are low on stock right now?"',
      '"What\'s today\'s profit by category?"',
    ],
  },
  {
    id: 'audit-safety',
    title: 'Audit Trails & Safety',
    description: 'Complete transparency and accountability',
    icon: 'Shield',
    highlights: [
      'Every AI action is logged with full details',
      'See what changed, when, and why',
      'Confirmation required before any stock changes',
      'Dangerous operations automatically blocked',
      'Full audit trail for accountability',
    ],
  },
]

export const benefits: Benefit[] = [
  {
    id: 'freedom',
    title: 'Freedom from Manual Work',
    problem: 'Stuck in Spreadsheet Hell?',
    description: 'Drowning in manual reports and end-of-day calculations eating your valuable time? Smart POS frees you completely.',
    icon: 'Sparkles',
    outcomes: [
      'AI closes your day with a complete report—automatically',
      'Never manually pull reports or build spreadsheets again',
      'Spend your time growing the business, not counting stock',
    ],
  },
  {
    id: 'convenience',
    title: 'Ultimate Convenience',
    problem: 'Tired of Digging Through Reports?',
    description: 'Need quick answers but hate navigating complex software? Just ask in plain language and get instant clarity.',
    icon: 'Lightning',
    outcomes: [
      'Ask questions in plain language, get clear answers',
      'No need to learn complex software or reports',
      'Access from your phone, tablet, or computer',
    ],
  },
  {
    id: 'clarity',
    title: 'Clarity & Control',
    problem: 'Confused by Your Own Numbers?',
    description: 'Business data shouldn\'t feel like a mystery. Get insights explained simply so you always know where you stand.',
    icon: 'Eye',
    outcomes: [
      'Numbers explained in simple language, not technical jargon',
      'See exactly what happened and why',
      'Every AI action is traceable and transparent',
    ],
  },
  {
    id: 'safety',
    title: 'Safety & Trust',
    problem: 'Worried About Hidden Changes?',
    description: 'Staff making changes you don\'t know about? Every action is logged and important changes need your approval first.',
    icon: 'Lock',
    outcomes: [
      'All important changes require your confirmation',
      'Full audit trail of every action',
      'Dangerous operations automatically blocked',
    ],
  },
]

export const posFeatures: POSFeatureCategory[] = [
  {
    id: 'sales',
    category: 'Point of Sale',
    features: [
      {
        id: 'dual-mode',
        title: 'Dual-Mode POS',
        description: 'Handle both retail and wholesale from the same system',
        icon: 'ShoppingCart',
      },
      {
        id: 'fast-search',
        title: 'Fast Product Search',
        description: 'Smart, fuzzy matching by name, SKU, or category',
        icon: 'Search',
      },
      {
        id: 'payments',
        title: 'Multiple Payment Methods',
        description: 'Cash, M-Pesa, bank, transfer, and on-credit',
        icon: 'CreditCard',
      },
      {
        id: 'receipts',
        title: 'Automatic Receipts',
        description: 'Professional receipts with thermal printer support',
        icon: 'Receipt',
      },
    ],
  },
  {
    id: 'inventory',
    category: 'Inventory Management',
    features: [
      {
        id: 'catalog',
        title: 'Product Catalog',
        description: 'Full catalog with images, variants, and units',
        icon: 'Package',
      },
      {
        id: 'stock-tracking',
        title: 'Real-Time Stock Tracking',
        description: 'Automatic deduction on sales, restoration on returns',
        icon: 'TrendingUp',
      },
      {
        id: 'restock',
        title: 'Restock Workflows',
        description: 'Easy restocking with reason codes and audit trail',
        icon: 'RefreshCw',
      },
      {
        id: 'alerts',
        title: 'Low Stock Alerts',
        description: 'Never run out with automatic minimum stock alerts',
        icon: 'Bell',
      },
    ],
  },
  {
    id: 'customers',
    category: 'Customer Management',
    features: [
      {
        id: 'database',
        title: 'Customer Database',
        description: 'Central database with contact info and history',
        icon: 'Users',
      },
      {
        id: 'credit',
        title: 'Credit Management',
        description: 'Credit limits, outstanding balance, payment history',
        icon: 'DollarSign',
      },
      {
        id: 'debt-tracking',
        title: 'Debt Tracking',
        description: 'Aging, status, and easy follow-up',
        icon: 'FileText',
      },
    ],
  },
  {
    id: 'analytics',
    category: 'Analytics & Reports',
    features: [
      {
        id: 'dashboard',
        title: 'Analytics Dashboard',
        description: 'Real profit, revenue, inventory value, and more',
        icon: 'BarChart',
      },
      {
        id: 'product-performance',
        title: 'Product Performance',
        description: 'Units sold, revenue, profit, margin, return rate',
        icon: 'PieChart',
      },
      {
        id: 'export',
        title: 'CSV Export',
        description: 'Export data for accountants and analysis',
        icon: 'Download',
      },
    ],
  },
  {
    id: 'team',
    category: 'Team & Access',
    features: [
      {
        id: 'users',
        title: 'User Management',
        description: 'Create users, assign roles, reset passwords',
        icon: 'UserPlus',
      },
      {
        id: 'roles',
        title: 'Role-Based Access',
        description: 'Admin and Sales Person roles with different permissions',
        icon: 'Key',
      },
      {
        id: 'activity',
        title: 'Activity Tracking',
        description: 'See who did what and when',
        icon: 'Activity',
      },
    ],
  },
  {
    id: 'ai',
    category: 'AI Insights',
    features: [
      {
        id: 'inventory-ai',
        title: 'Inventory AI',
        description: 'Low-stock detection and reorder recommendations',
        icon: 'Brain',
      },
      {
        id: 'sales-assistant',
        title: 'Sales Assistant',
        description: 'Cross-sell and upsell suggestions',
        icon: 'Lightbulb',
      },
      {
        id: 'forecasting',
        title: 'Business Intelligence',
        description: 'Weekly/monthly summaries and forecasts',
        icon: 'TrendingUp',
      },
    ],
  },
]

export const advantages = [
  {
    id: 'one-system',
    title: 'One System for Everything',
    description: 'Replaces spreadsheets and multiple disconnected tools with a single, integrated POS + inventory + analytics solution.',
    icon: 'Grid',
  },
  {
    id: 'real-profit',
    title: 'Real, Accurate Profit',
    description: 'Includes cost of goods, returns, and business expenses, so you see actual profit, net revenue, and where the money is really going.',
    icon: 'DollarSign',
  },
  {
    id: 'stock-control',
    title: 'Fewer Stock-Outs',
    description: 'Real-time inventory plus AI-assisted recommendations reduce lost sales from stock-outs and tie-up of cash in slow-moving items.',
    icon: 'Package',
  },
  {
    id: 'credit-control',
    title: 'Stronger Credit Control',
    description: 'Clear credit limits, debt aging, and payment tracking lower the risk of bad debts and make it easy to follow up.',
    icon: 'Shield',
  },
  {
    id: 'fraud-prevention',
    title: 'Reduced Fraud & Errors',
    description: 'Every stock change and return is audited with who/when/why, making it harder to hide mistakes or theft.',
    icon: 'Lock',
  },
  {
    id: 'faster-sales',
    title: 'Faster, Professional Sales',
    description: 'Quick search, parked carts, variants, and instant receipts make checkout smoother and faster.',
    icon: 'Zap',
  },
  {
    id: 'scalable',
    title: 'Ready for Growth',
    description: 'Role-based access lets you safely add more staff as you grow. Scales from a small shop to a busy wholesale/retail operation.',
    icon: 'TrendingUp',
  },
  {
    id: 'data-driven',
    title: 'Data-Driven Decisions',
    description: 'Built-in analytics and AI insights help you understand which products make the most profit and where you\'re losing money.',
    icon: 'BarChart',
  },
  {
    id: 'data-ownership',
    title: 'Your Data, Your Control',
    description: 'Self-hosted option means you keep full control over your data. No vendor lock-in or forced monthly SaaS fees.',
    icon: 'Database',
  },
]
