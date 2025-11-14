import { CheckIcon, ClockIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

export default function InvoiceStatus({ status }: { status: string }) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full px-2 py-1 text-sm font-medium',
        {
          'bg-gray-100 text-gray-900': status === 'pending',
          'bg-green-100 text-green-900': status === 'paid',
        },
      )}
    >
      {status === 'pending' ? (
        <>
          <ClockIcon className="mr-1 h-4 w-4" />
          Pending
        </>
      ) : null}
      {status === 'paid' ? (
        <>
          <CheckIcon className="mr-1 h-4 w-4" />
          Paid
        </>
      ) : null}
    </span>
  );
}
