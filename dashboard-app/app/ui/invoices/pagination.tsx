import clsx from 'clsx';
import Link from 'next/link';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

interface PaginationProps {
  totalPages: number;
  currentPage?: number;
}

export default function Pagination({ totalPages, currentPage = 1 }: PaginationProps) {
  const allNumbers = generatePagination(currentPage, totalPages);
  const isPreviousDisabled = currentPage <= 1;
  const isNextDisabled = currentPage >= totalPages;

  return (
    <div className="inline-flex">
      <PaginationArrow
        direction="left"
        href={`?page=${currentPage - 1}`}
        isDisabled={isPreviousDisabled}
      />

      <div className="flex">
        {allNumbers.map((number, index) => {
          let position: 'first' | 'last' | 'single' | 'middle' | undefined;

          if (index === 0) position = 'first';
          if (index === allNumbers.length - 1) position = 'last';
          if (allNumbers.length === 1) position = 'single';
          if (position !== 'first' && position !== 'last') position = 'middle';

          return (
            <PaginationNumber
              key={`${number}-${index}`}
              href={`?page=${number}`}
              page={number}
              position={position}
              isActive={currentPage === number}
            />
          );
        })}
      </div>

      <PaginationArrow
        direction="right"
        href={`?page=${currentPage + 1}`}
        isDisabled={isNextDisabled}
      />
    </div>
  );
}

function PaginationNumber({
  page,
  href,
  isActive,
  position,
}: {
  page: number | string;
  href: string;
  position?: 'first' | 'last' | 'middle' | 'single';
  isActive: boolean;
}) {
  const className = clsx(
    'flex h-10 w-10 items-center justify-center text-sm border',
    {
      'rounded-l-md': position === 'first' || position === 'single',
      'rounded-r-md': position === 'last' || position === 'single',
      'z-10 bg-blue-600 border-blue-600 text-white': isActive,
      'hover:bg-gray-100 border-gray-300': !isActive && position !== 'middle',
      'border-gray-300': !isActive && position === 'middle',
    },
  );

  return isActive || position === 'middle' ? (
    <div className={className}>{page}</div>
  ) : (
    <Link href={href} className={className}>
      {page}
    </Link>
  );
}

function PaginationArrow({
  href,
  direction,
  isDisabled,
}: {
  href: string;
  direction: 'left' | 'right';
  isDisabled?: boolean;
}) {
  const className = clsx(
    'flex items-center justify-center rounded-md border h-10 w-10 cursor-pointer',
    {
      'pointer-events-none text-gray-400': isDisabled,
      'hover:bg-gray-100': !isDisabled,
      'mr-2': direction === 'left',
      'ml-2': direction === 'right',
    },
  );

  const icon =
    direction === 'left' ? (
      <ArrowLeftIcon className="w-4" />
    ) : (
      <ArrowRightIcon className="w-4" />
    );

  return isDisabled ? (
    <div className={className}>{icon}</div>
  ) : (
    <Link href={href} className={className}>
      {icon}
    </Link>
  );
}

function generatePagination(currentPage: number, totalPages: number) {
  // If the total number of pages is 7 or less,
  // display all pages without any ellipsis.
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  // If the current page is among the first 3 pages,
  // show the first 3, an ellipsis, and the last 2 pages.
  if (currentPage <= 3) {
    return [1, 2, 3, '...', totalPages - 1, totalPages];
  }

  // If the current page is among the last 3 pages,
  // show the first 2, an ellipsis, and the last 3 pages.
  if (currentPage >= totalPages - 2) {
    return [1, 2, '...', totalPages - 2, totalPages - 1, totalPages];
  }

  // If the current page is somewhere in the middle,
  // show the first page, an ellipsis, the current page and its neighbors,
  // another ellipsis, and the last page.
  return [
    1,
    '...',
    currentPage - 1,
    currentPage,
    currentPage + 1,
    '...',
    totalPages,
  ];
}
