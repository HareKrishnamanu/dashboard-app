# Dashboard App

A modern Next.js 15 dashboard application with data fetching, real-time updates, and a beautiful UI built with Tailwind CSS.

## Features

- 📊 Dashboard with revenue charts and metrics
- 📋 Invoice management with search and pagination
- 👥 Customer management with invoice tracking
- 🔐 Authentication ready (Next Auth integration)
- 📱 Responsive design (mobile and desktop)
- ⚡ Server-side rendering with React Suspense
- 🎨 Beautiful UI with Tailwind CSS and Heroicons

## Tech Stack

- **Framework**: Next.js 15.5.6
- **Language**: TypeScript 5.7.3
- **Styling**: Tailwind CSS 3.4.17
- **Icons**: Heroicons 2.2.0
- **Database**: PostgreSQL (configurable)
- **Authentication**: NextAuth 5.0.0-beta.25

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
app/
  ├── layout.tsx           # Root layout
  ├── page.tsx             # Home page
  ├── dashboard/           # Dashboard routes
  │   ├── layout.tsx       # Dashboard layout with sidebar
  │   ├── page.tsx         # Dashboard home
  │   ├── invoices/        # Invoices management
  │   └── customers/       # Customers management
  ├── login/               # Authentication page
  ├── lib/
  │   ├── data.ts          # Data fetching functions
  │   ├── definitions.ts   # TypeScript types
  │   ├── placeholder-data.ts # Sample data
  │   └── utils.ts         # Utility functions
  └── ui/                  # Reusable components
      ├── dashboard/
      ├── invoices/
      ├── customers/
      └── ...
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run seed` - Seed database with sample data

## Data Layer

The app uses async data fetching functions in `/app/lib/data.ts`:

- `fetchRevenue()` - Get revenue data
- `fetchLatestInvoices()` - Get latest 5 invoices
- `fetchCardData()` - Get dashboard metrics
- `fetchFilteredInvoices()` - Search/filter invoices with pagination
- `fetchInvoiceById()` - Get single invoice details
- `fetchFilteredCustomers()` - Search/filter customers with pagination
- `getInvoicesPages()` - Get total pages for invoice pagination
- `getCustomersPages()` - Get total pages for customer pagination

## Database Setup

The app is configured to work with PostgreSQL. To set up your database:

1. Create a PostgreSQL database
2. Update `DATABASE_URL` in `.env.local`
3. Run migrations (when implemented)

## Deployment to Vercel

This project is optimized for deployment to Vercel:

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Add environment variables:
   - `DATABASE_URL` - Your PostgreSQL connection string
5. Deploy!

Vercel will automatically detect the Next.js app and use optimal build settings.

## Components

### Dashboard Components
- `CardWrapper` - Stats cards with icon and metrics
- `RevenueChart` - Line chart of revenue over time
- `LatestInvoices` - Table of 5 most recent invoices

### Invoice Components
- `InvoicesTable` - Full invoices list with status
- `InvoiceForm` - Create/edit invoice form
- `InvoiceButtons` - Action buttons (create, update, delete)
- `Pagination` - Navigate through pages

### Customer Components
- `CustomersTable` - List customers with invoice metrics
- `Search` - Search/filter component
- `Breadcrumbs` - Navigation breadcrumbs

### UI Components
- `Button` - Styled button component
- `LoginForm` - Login page form
- `Skeleton` - Loading placeholder screens

## Styling

The app uses Tailwind CSS with custom configuration:

- Grid layouts for responsive design
- Tailwind Forms plugin for form styling
- Custom color scheme with gray-900 accents
- Mobile-first responsive approach

## Response Times

- Development: ~1.5-2s initial load
- Dashboard compilation: ~1.5s
- Pages are server-rendered with React Suspense for streaming

## License

MIT
