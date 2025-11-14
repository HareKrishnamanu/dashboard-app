import CardWrapper from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { Suspense } from 'react';
import {
  RevenueChartSkeleton,
  CardsSkeleton,
  LatestInvoicesSkeleton,
} from '@/app/ui/skeletons';
import { fetchRevenue } from '@/app/lib/data';

export const metadata = {
  title: 'Dashboard',
};

async function RevenueChartWrapper() {
  const data = await fetchRevenue();
  return <RevenueChart data={data} />;
}

export default async function Page() {
  return (
    <main className="p-6">
      <h1 className="mb-4 text-xl font-bold md:text-2xl">Dashboard</h1>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
        <Suspense fallback={<CardsSkeleton />}>
          <CardWrapper />
        </Suspense>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChartWrapper />
        </Suspense>
        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <LatestInvoices />
        </Suspense>
      </div>
    </main>
  );
}
