import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

import Header from "./Header";
import Footer from "./Footer";

export const metadata = {
  title: "Secrets",
  description: "Share secrets the anon way",
};

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" className="h-100">
      <body className="d-flex flex-column h-100">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
