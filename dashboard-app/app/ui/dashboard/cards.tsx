import {
  BanknotesIcon,
  ClockIcon,
  UserGroupIcon,
  InboxIcon,
} from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import { fetchCardData } from '@/app/lib/data';

const iconMap = {
  collected: BanknotesIcon,
  customers: UserGroupIcon,
  pending: ClockIcon,
  invoices: InboxIcon,
};

export default async function CardWrapper() {
  const { invoiceCount, customerCount, paidInvoices, pendingInvoices } = await fetchCardData();

  const cardData = [
    {
      title: 'Collected',
      value: paidInvoices,
      type: 'collected' as const,
    },
    {
      title: 'Pending',
      value: pendingInvoices,
      type: 'pending' as const,
    },
    {
      title: 'Total Invoices',
      value: invoiceCount,
      type: 'invoices' as const,
    },
    {
      title: 'Total Customers',
      value: customerCount,
      type: 'customers' as const,
    },
  ];

  return (
    <>
      {cardData.map((item) => (
        <Card key={item.title} {...item} />
      ))}
    </>
  );
}

export function Card({
  title,
  value,
  type,
}: {
  title: string;
  value: string | number;
  type: 'invoices' | 'customers' | 'pending' | 'collected';
}) {
  const Icon = iconMap[type];

  return (
    <div className="rounded-lg bg-gray-50 p-2 shadow-sm">
      <div className="flex p-4">
        {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null}
        <h3 className="ml-2 text-sm font-medium text-gray-900">{title}</h3>
      </div>
      <p className={`${lusitana.className} rounded-md bg-white px-4 py-8 text-center text-2xl whitespace-nowrap overflow-hidden text-ellipsis min-h-20 flex items-center justify-center w-full`}>
        {value}
      </p>
    </div>
  );
}
