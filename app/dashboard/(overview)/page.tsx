import { Card } from "@/app/ui/dashboard/cards";
import RevenueChart from "@/app/ui/dashboard/revenue-chart";
import LatestInvoices from "@/app/ui/dashboard/latest-invoices";
import { poppins } from "@/app/ui/fonts";
import { fetchCardData, fetchLatestInvoices } from "../../lib/data";
import { time } from "console";
import { Suspense } from "react";
import { RevenueChartSkeleton } from "@/app/ui/skeletons";

export default async function Dashboard() {
  const cardData = await fetchCardData();

  const latestInvoices = await fetchLatestInvoices();

  return (
    <main>
      <h1 className={`${poppins.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card
          title="Collected"
          value={cardData.totalPaidInvoices}
          type="collected"
        />
        <Card
          title="Pending"
          value={cardData.totalPendingInvoices}
          type="pending"
        />
        <Card
          title="Total Invoices"
          value={cardData.numberOfInvoices}
          type="invoices"
        />
        <Card
          title="Total Customers"
          value={cardData.numberOfCustomers}
          type="customers"
        />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<RevenueChartSkeleton />}>
          {" "}
          <RevenueChart />
        </Suspense>

        <LatestInvoices latestInvoices={latestInvoices} />
      </div>
    </main>
  );
}
