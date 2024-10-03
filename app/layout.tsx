import "@/app/ui/global.css";
import { poppins } from "./ui/fonts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: { template: "%s | Acme Dashboard", default: "Acme Dashboard" },
  description: "The official Next.js Course Dashboard, built with App Router.",
  metadataBase: new URL("https://invoices-dashboard-gules.vercel.app/"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" title="teste">
      <body className={`${poppins.className} antialiased`}>{children}</body>
    </html>
  );
}
