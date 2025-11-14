import { lusitana } from '@/app/ui/fonts';
import Search from '@/app/ui/search';
import { InvoiceTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
import CustomersTable from '@/app/ui/customers/table';
import { fetchFilteredCustomers, getCustomersPages } from '@/app/lib/data';

export const metadata = {
  title: 'Customers',
};

export default async function Page({
  searchParams,
}: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const params = await searchParams;
  const query = params?.query || '';
  const currentPage = Number(params?.page) || 1;

  const { customers: customersData, total } = await fetchFilteredCustomers(query, currentPage);
  const totalPages = await getCustomersPages(query);

  return (
    <div className="w-full p-6">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Customers</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search customers..." />
      </div>
      <Suspense key={query + currentPage} fallback={<InvoiceTableSkeleton />}>
        <CustomersTable customers={customersData} />
      </Suspense>
    </div>
  );
}
