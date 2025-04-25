import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";

const titillium = localFont({
  src: [
    {
      path: "../public/font/TitilliumWeb-SemiBold.otf",
      weight: "500",
      style: "medium",
    },
    {
      path: "../public/font/TitilliumWeb-Regular.otf",
      weight: "400",
      style: "regular",
    },
  ],
});

export const metadata: Metadata = {
  title: {
    template: "%s / sarthak",
    default: "sarthak",
  },
  description: "Web Developer, AI Engineer.",
  openGraph: {
    title: "Sarthak Jain",
    description: "Web Developer, AI Engineer.",
    images: "/og.png",
    url: "https://sarthak-wiz.vercel.app/",
  },
  alternates: {
    canonical: "https://sarthak-wiz.vercel.app/",
  },
  twitter: {
    site: "@sarthxk20",
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(titillium.className, "p-4 py-10 md:p-12 bg select-none")}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
