export function InvoicesSkeleton() {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between border-b border-gray-100 py-4">
        <div className="flex items-center">
          <div className="mr-2 h-8 w-8 rounded-full bg-gray-200"></div>
          <div className="min-w-0">
            <div className="h-5 w-40 rounded bg-gray-200"></div>
            <div className="mt-2 h-4 w-12 rounded bg-gray-100"></div>
          </div>
        </div>
        <div className="mt-2 flex justify-end gap-2">
          <div className="h-10 w-10 rounded bg-gray-200"></div>
          <div className="h-10 w-10 rounded bg-gray-200"></div>
        </div>
      </div>
    </div>
  );
}

export function LatestInvoicesSkeleton() {
  return (
    <div className="flex w-full flex-col">
      <h2 className="mb-4 h-8 w-36 rounded-md bg-gray-200"></h2>
      <div className="flex grow flex-col justify-between rounded-lg bg-gray-50 p-4">
        <div className="bg-white px-6">
          <div className="flex flex-row items-center justify-between border-b border-gray-100 py-4">
            <div className="flex items-center">
              <div className="mr-4 h-8 w-8 rounded-full bg-gray-200"></div>
              <div className="min-w-0">
                <div className="h-5 w-40 rounded bg-gray-200"></div>
                <div className="mt-2 h-4 w-12 rounded bg-gray-100"></div>
              </div>
            </div>
            <div className="h-6 w-16 rounded bg-gray-200"></div>
          </div>
        </div>
        <div className="flex items-center justify-center pb-2 pt-6">
          <div className="h-5 w-5 rounded-full bg-gray-200"></div>
          <div className="ml-2 h-4 w-20 rounded bg-gray-200"></div>
        </div>
      </div>
    </div>
  );
}

export function CardsSkeleton() {
  return (
    <>
      <div className="rounded-xl bg-gray-100 p-2 shadow-sm">
        <div className="flex p-4">
          <div className="h-5 w-5 rounded-md bg-gray-200"></div>
          <div className="ml-2 h-6 w-16 rounded bg-gray-200"></div>
        </div>
        <div className="px-4 py-8">
          <div className="h-7 w-28 rounded bg-gray-200"></div>
        </div>
      </div>
    </>
  );
}

export function CardSkeleton() {
  return (
    <div className="rounded-xl bg-gray-100 p-2 shadow-sm">
      <div className="flex p-4">
        <div className="h-5 w-5 rounded-md bg-gray-200"></div>
        <div className="ml-2 h-6 w-16 rounded bg-gray-200"></div>
      </div>
      <div className="px-4 py-8">
        <div className="h-7 w-28 rounded bg-gray-200"></div>
      </div>
    </div>
  );
}

export function RevenueChartSkeleton() {
  return (
    <div className="w-full md:col-span-4">
      <div className="rounded-xl bg-gray-100 p-4 shadow-sm">
        <div className="h-7 w-20 rounded bg-gray-200"></div>
        <div className="mt-4 h-96 rounded bg-gray-200"></div>
        <div className="mt-4 flex gap-2">
          <div className="h-5 w-5 rounded-full bg-gray-200"></div>
          <div className="h-4 w-20 rounded bg-gray-200"></div>
        </div>
      </div>
    </div>
  );
}

export function InvoiceTableSkeleton() {
  return (
    <div className="mt-6 flow-root">
      <div className="overflow-x-auto">
        <div className="inline-block min-w-full align-middle">
          <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
            <div className="md:hidden">
              <div className="mb-2 w-full rounded-md bg-white p-4">
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 h-6 w-32 rounded bg-gray-100"></div>
                    <div className="h-6 w-16 rounded bg-gray-100"></div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="hidden rounded bg-gray-100 p-2 md:block">
                      <div className="h-6 w-6 rounded bg-gray-200"></div>
                    </div>
                  </div>
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <div className="h-6 w-16 rounded bg-gray-100"></div>
                  </div>
                  <div className="flex justify-end gap-2">
                    <div className="h-10 w-10 rounded bg-gray-100"></div>
                    <div className="h-10 w-10 rounded bg-gray-100"></div>
                  </div>
                </div>
              </div>
            </div>
            <table className="hidden min-w-full md:table">
              <thead className="rounded-lg text-left text-sm font-normal">
                <tr>
                  <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                    <div className="h-6 w-24 rounded bg-gray-100"></div>
                  </th>
                  <th scope="col" className="px-3 py-5 font-medium">
                    <div className="h-6 w-24 rounded bg-gray-100"></div>
                  </th>
                  <th scope="col" className="px-3 py-5 font-medium">
                    <div className="h-6 w-24 rounded bg-gray-100"></div>
                  </th>
                  <th scope="col" className="px-3 py-5 font-medium">
                    <div className="h-6 w-24 rounded bg-gray-100"></div>
                  </th>
                  <th scope="col" className="relative px-3 py-5 pl-6">
                    <div className="h-6 w-24 rounded bg-gray-100"></div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="whitespace-nowrap px-4 py-5 sm:pl-6">
                    <div className="h-6 w-24 rounded bg-gray-100"></div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-5">
                    <div className="h-6 w-24 rounded bg-gray-100"></div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-5">
                    <div className="h-6 w-24 rounded bg-gray-100"></div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-5">
                    <div className="h-6 w-24 rounded bg-gray-100"></div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-5">
                    <div className="h-6 w-24 rounded bg-gray-100"></div>
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-4 py-5 sm:pl-6">
                    <div className="h-6 w-24 rounded bg-gray-100"></div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-5">
                    <div className="h-6 w-24 rounded bg-gray-100"></div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-5">
                    <div className="h-6 w-24 rounded bg-gray-100"></div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-5">
                    <div className="h-6 w-24 rounded bg-gray-100"></div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-5">
                    <div className="h-6 w-24 rounded bg-gray-100"></div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
