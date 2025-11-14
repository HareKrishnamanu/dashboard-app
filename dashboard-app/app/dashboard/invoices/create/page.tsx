import Form from '@/app/ui/invoices/create-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { lusitana } from '@/app/ui/fonts';
import { CustomerField } from '@/app/lib/definitions';
import { customers } from '@/app/lib/placeholder-data';

export const metadata = {
  title: 'Create Invoice',
};

export default async function Page() {
  // Use placeholder data for now
  const customersData: CustomerField[] = customers.map(c => ({
    id: c.id,
    name: c.name,
  }));

  return (
    <main className="p-6">
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Create Invoice',
            href: '/dashboard/invoices/create',
            active: true,
          },
        ]}
      />
      <h1 className={`${lusitana.className} mb-8 text-2xl`}>Create Invoice</h1>
      <Form customers={customersData} />
    </main>
  );
}
