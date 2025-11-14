import { lusitana } from '@/app/ui/fonts';
import Search from '@/app/ui/search';
import { InvoiceTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
import { CreateInvoice } from '@/app/ui/invoices/buttons';
import InvoicesTable from '@/app/ui/invoices/table';
import Pagination from '@/app/ui/invoices/pagination';
import { fetchFilteredInvoices, getInvoicesPages } from '@/app/lib/data';

export const metadata = {
  title: 'Invoices',
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

  const { invoices: invoicesData, total } = await fetchFilteredInvoices(query, currentPage);
  const totalPages = await getInvoicesPages(query);

  return (
    <div className="w-full p-6">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Invoices</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search invoices..." />
        <CreateInvoice />
      </div>
      <Suspense key={query + currentPage} fallback={<InvoiceTableSkeleton />}>
        <InvoicesTable invoices={invoicesData} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} currentPage={currentPage} />
      </div>
    </div>
  );
}
