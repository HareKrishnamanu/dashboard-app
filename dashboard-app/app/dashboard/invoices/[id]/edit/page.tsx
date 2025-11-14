import EditInvoiceForm from '@/app/ui/invoices/edit-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { lusitana } from '@/app/ui/fonts';
import { CustomerField, InvoiceForm } from '@/app/lib/definitions';
import { customers, invoices } from '@/app/lib/placeholder-data';

export const metadata = {
  title: 'Edit Invoice',
};

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  // Find the invoice from placeholder data
  const invoice = invoices.find((inv: any) => inv.id === resolvedParams.id);
  
  // Use placeholder data for customers
  const customersData: CustomerField[] = customers.map(c => ({
    id: c.id,
    name: c.name,
  }));

  const invoiceForm: InvoiceForm = {
    id: resolvedParams.id,
    customer_id: invoice?.customer_id || '',
    amount: invoice?.amount || 0,
    status: (invoice?.status === 'paid' ? 'paid' : 'pending'),
  };

  return (
    <main className="p-6">
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Edit Invoice',
            href: `/dashboard/invoices/${resolvedParams.id}/edit`,
            active: true,
          },
        ]}
      />
      <h1 className={`${lusitana.className} mb-8 text-2xl`}>Edit Invoice</h1>
      <EditInvoiceForm invoice={invoiceForm} customers={customersData} />
    </main>
  );
}
