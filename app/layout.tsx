import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { AnnouncementBanner } from "@/components/layout/announcement-banner";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "1-to-1 Pediatrics | Hometown Care for Your Child",
  description: "Personalized pediatric care in Danville, California. Providing old-school, relationship-based healthcare with a modern approach.",
  keywords: ["pediatrics", "concierge pediatrics", "Danville pediatrician", "concussion care", "newborn care", "Dr. Nash", "Dr. Borden"],
  authors: [{ name: "1-to-1 Pediatrics" }],
  openGraph: {
    title: "1-to-1 Pediatrics | Hometown Care for Your Child",
    description: "Personalized pediatric care in Danville, California",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <AnnouncementBanner />
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
