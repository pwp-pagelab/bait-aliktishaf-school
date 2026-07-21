import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "مدارس بيت الاكتشاف الأهلية | جدة",
  description: "تعليم متميز للروضة والمرحلة الابتدائية في حي النعيم بمدينة جدة.",
  openGraph: {
    title: "مدارس بيت الاكتشاف الأهلية",
    description: "رحلة تعليمية تبدأ بالاكتشاف.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
