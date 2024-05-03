import type { Metadata } from "next";
import "../styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


export const metadata: Metadata = {
  title: "Omil Staffing Services",
  description: "Omil Staffing Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <div className="flex w-full flex-col">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </div>
      </body>
    </html>
  );
}
