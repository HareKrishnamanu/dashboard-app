import { invoices, customers, revenue } from '@/app/lib/placeholder-data';
import type {
  Invoice,
  Customer,
  Revenue,
  LatestInvoiceRaw,
  LatestInvoice,
  InvoicesTable,
  CustomersTableType,
  FormattedCustomersTable,
} from '@/app/lib/definitions';

// Simulate database delays
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export async function fetchRevenue(): Promise<Revenue[]> {
  try {
    await delay(100);
    return revenue;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch revenue data.');
  }
}

export async function fetchLatestInvoices(): Promise<LatestInvoice[]> {
  try {
    await delay(100);
    const latestInvoices = invoices
      .sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 5)
      .map((invoice: any) => {
        const customer = customers.find(c => c.id === invoice.customer_id);
        return {
          id: invoice.id || Math.random().toString(36).substr(2, 9),
          name: customer?.name || 'Unknown',
          image_url: customer?.image_url || '',
          email: customer?.email || '',
          amount: (invoice.amount / 100).toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
          }),
        };
      });

    return latestInvoices;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch latest invoices.');
  }
}

export async function fetchCardData() {
  try {
    await delay(100);
    const invoiceCountPromise = invoices.length;
    const customerCountPromise = customers.length;
    const invoiceStatusPromise = invoices.reduce(
      (acc: any, inv: any) => {
        if (inv.status === 'paid') {
          acc.paid += inv.amount;
        } else {
          acc.pending += inv.amount;
        }
        return acc;
      },
      { paid: 0, pending: 0 }
    );

    const [invoiceCount, customerCount, invoiceStatus] = await Promise.all([
      Promise.resolve(invoiceCountPromise),
      Promise.resolve(customerCountPromise),
      Promise.resolve(invoiceStatusPromise),
    ]);

    return {
      invoiceCount,
      customerCount,
      paidInvoices: (invoiceStatus.paid / 100).toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
      }),
      pendingInvoices: (invoiceStatus.pending / 100).toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
      }),
    };
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch card data.');
  }
}

export async function fetchFilteredInvoices(
  query: string,
  currentPage: number,
  itemsPerPage: number = 6
): Promise<{ invoices: InvoicesTable[]; total: number }> {
  try {
    await delay(100);
    
    const searchQuery = query.toLowerCase();
    const filtered = invoices.filter((invoice: any) => {
      const customer = customers.find(c => c.id === invoice.customer_id);
      return (
        customer?.name.toLowerCase().includes(searchQuery) ||
        customer?.email.toLowerCase().includes(searchQuery) ||
        invoice.date.includes(searchQuery) ||
        invoice.status.includes(searchQuery)
      );
    });

    const total = filtered.length;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const paginatedInvoices = filtered
      .sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(startIndex, endIndex)
      .map((invoice: any) => {
        const customer = customers.find(c => c.id === invoice.customer_id);
        return {
          id: invoice.id || Math.random().toString(36).substr(2, 9),
          customer_id: invoice.customer_id,
          name: customer?.name || 'Unknown',
          email: customer?.email || '',
          image_url: customer?.image_url || '',
          date: invoice.date,
          amount: invoice.amount,
          status: invoice.status as 'pending' | 'paid',
        };
      });

    return { invoices: paginatedInvoices, total };
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch invoices.');
  }
}

export async function fetchInvoiceById(id: string): Promise<InvoicesTable | undefined> {
  try {
    await delay(100);
    const invoice = invoices.find((inv: any) => inv.id === id);
    if (!invoice) return undefined;

    const customer = customers.find(c => c.id === invoice.customer_id);
    return {
      id: id,
      customer_id: invoice.customer_id,
      name: customer?.name || 'Unknown',
      email: customer?.email || '',
      image_url: customer?.image_url || '',
      date: invoice.date,
      amount: invoice.amount,
      status: invoice.status as 'pending' | 'paid',
    };
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch invoice.');
  }
}

export async function fetchFilteredCustomers(
  query: string,
  currentPage: number = 1,
  itemsPerPage: number = 6
): Promise<{ customers: FormattedCustomersTable[]; total: number }> {
  try {
    await delay(100);

    const searchQuery = query.toLowerCase();
    const filtered = customers.filter(
      customer =>
        customer.name.toLowerCase().includes(searchQuery) ||
        customer.email.toLowerCase().includes(searchQuery)
    );

    const total = filtered.length;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const paginatedCustomers = filtered
      .slice(startIndex, endIndex)
      .map((customer: Customer) => {
        const customerInvoices = invoices.filter(
          (inv: any) => inv.customer_id === customer.id
        );
        const totalPending = customerInvoices
          .filter((inv: any) => inv.status === 'pending')
          .reduce((sum: number, inv: any) => sum + inv.amount, 0);
        const totalPaid = customerInvoices
          .filter((inv: any) => inv.status === 'paid')
          .reduce((sum: number, inv: any) => sum + inv.amount, 0);

        return {
          id: customer.id,
          name: customer.name,
          email: customer.email,
          image_url: customer.image_url,
          total_invoices: customerInvoices.length,
          total_pending: (totalPending / 100).toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
          }),
          total_paid: (totalPaid / 100).toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
          }),
        };
      });

    return { customers: paginatedCustomers, total };
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch customers.');
  }
}

export async function getInvoicesPages(query: string): Promise<number> {
  try {
    await delay(100);
    const searchQuery = query.toLowerCase();
    const filtered = invoices.filter((invoice: any) => {
      const customer = customers.find(c => c.id === invoice.customer_id);
      return (
        customer?.name.toLowerCase().includes(searchQuery) ||
        customer?.email.toLowerCase().includes(searchQuery) ||
        invoice.date.includes(searchQuery) ||
        invoice.status.includes(searchQuery)
      );
    });

    return Math.ceil(filtered.length / 6);
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch invoice pages.');
  }
}

export async function getCustomersPages(query: string): Promise<number> {
  try {
    await delay(100);
    const searchQuery = query.toLowerCase();
    const filtered = customers.filter(
      customer =>
        customer.name.toLowerCase().includes(searchQuery) ||
        customer.email.toLowerCase().includes(searchQuery)
    );

    return Math.ceil(filtered.length / 6);
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch customer pages.');
  }
}
