# Dashboard App

A modern **Next.js 15** dashboard application built with the **App Router**, featuring real-time data fetching, responsive UI, and role-based access patterns. This project implements chapters 1–10 of the [Next.js Dashboard App tutorial](https://nextjs.org/learn/dashboard-app).

## 🚀 Live Demo

**Deployed on Vercel:** [dashboard-app.vercel.app](https://dashboard-app.vercel.app)

## ✨ Features

- **Next.js App Router** — Modern server-side rendering and dynamic routing
- **TypeScript** — Full type safety across the codebase
- **Tailwind CSS** — Utility-first responsive design with form components
- **Server Components** — Efficient data fetching and rendering
- **Dynamic Routes** — Invoice detail and edit pages with `[id]` segments
- **Search & Pagination** — Filter and navigate through invoices and customers
- **Responsive Design** — Mobile-first UI built with Tailwind CSS
- **Demo Authentication** — Client-side login form with hardcoded credentials
- **Data Layer** — Simulated async data fetching (customers, invoices, revenue)

## 📋 Project Structure

```
dashboard-app/
├── app/
│   ├── dashboard/
│   │   ├── invoices/
│   │   │   ├── [id]/
│   │   │   │   └── edit/page.tsx
│   │   │   └── page.tsx
│   │   ├── customers/
│   │   │   └── page.tsx
│   │   └── page.tsx
│   ├── ui/
│   │   ├── dashboard/
│   │   │   ├── cards.tsx
│   │   │   ├── latest-invoices.tsx
│   │   │   └── revenue-chart.tsx
│   │   └── ...
│   ├── lib/
│   │   ├── data.ts              # Simulated data layer
│   │   ├── definitions.ts       # TypeScript types
│   │   └── utils.ts             # Helper functions
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
│   └── customers/               # Avatar images
├── prisma/
│   └── schema.prisma            # Database schema
├── package.json
├── tsconfig.json
└── README.md
```

## 🛠️ Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org) (App Router)
- **Language:** [TypeScript 5.7](https://www.typescriptlang.org)
- **Styling:** [Tailwind CSS 3.4](https://tailwindcss.com)
- **Database:** [Prisma](https://www.prisma.io) (Optional — currently using simulated data)
- **Icons:** [@heroicons/react](https://heroicons.com)
- **Linting:** [ESLint](https://eslint.org) with Next.js config

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+ and npm (or yarn/pnpm)
- Git

### Clone & Install

```bash
# Clone the repository
git clone https://github.com/HareKrishnamanu/dashboard-app.git
cd dashboard-app/dashboard-app

# Install dependencies
npm install
```

### Environment Variables

Create a `.env.local` file in the `dashboard-app` root (copy from `.env` if provided):

```env
# Optional: Database connection (Prisma)
DATABASE_URL="your-database-url-here"
```

## 🚀 Running Locally

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm run start
```

## 📖 Tutorial Progress

This project completes the first **10 chapters** of the [Next.js Dashboard App tutorial](https://nextjs.org/learn/dashboard-app):

- ✅ **Chapter 1:** Getting Started
- ✅ **Chapter 2:** CSS Styling
- ✅ **Chapter 3:** Optimizing Fonts and Images
- ✅ **Chapter 4:** Creating Layouts and Pages
- ✅ **Chapter 5:** Navigating Between Pages
- ✅ **Chapter 6:** Setting Up Your Database
- ✅ **Chapter 7:** Fetching Data
- ✅ **Chapter 8:** Static and Dynamic Rendering
- ✅ **Chapter 9:** Streaming
- ✅ **Chapter 10:** Partial Pre-rendering

## 🔑 Demo Credentials

**Login Page:** [/login](http://localhost:3000/login)

```
Email: user@example.com
Password: password
```

## 📱 Key Pages

| Route | Description |
|-------|-------------|
| `/` | Home page |
| `/login` | Demo login (client-side) |
| `/dashboard` | Main dashboard with key metrics |
| `/dashboard/invoices` | Invoices list with search & pagination |
| `/dashboard/invoices/[id]/edit` | Edit invoice form (dynamic route) |
| `/dashboard/customers` | Customers list with search |

## 🎨 UI Components

Reusable components built in `app/ui/`:

- `cards.tsx` — Dashboard metric cards with async data fetching
- `latest-invoices.tsx` — Recent invoices preview
- `revenue-chart.tsx` — Revenue visualization (SVG chart)
- `search.tsx` — Search input with debouncing
- `pagination.tsx` — Pagination controls
- `buttons.tsx` — Action buttons (create, update, delete)
- `table.tsx` — Data tables with responsive design

## 🌐 Deployment

Deployed on **Vercel** (recommended for Next.js):

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or use the Vercel dashboard to import this GitHub repo directly.

## 🧪 Linting & Type Checking

```bash
# Run ESLint
npx eslint app

# Check TypeScript
npx tsc --noEmit

# Build check (runs both)
npm run build
```

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js Dashboard App Tutorial](https://nextjs.org/learn/dashboard-app)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Prisma Documentation](https://www.prisma.io/docs)

## 📝 License

This project is open source and available under the MIT License.

## 👤 Author

**HareKrishnamanu**  
[GitHub](https://github.com/HareKrishnamanu) | [Repository](https://github.com/HareKrishnamanu/dashboard-app)

---

**Built with ❤️ as a Next.js learning exercise**
