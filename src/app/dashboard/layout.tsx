import { SiteFooter } from "@/components/site-footer";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="flex-1">{children}</div>
      <SiteFooter />
    </>
  );
}
