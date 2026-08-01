import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Արամ և Սաթեն",
  description: "Արամ և Սաթեն",
  openGraph: {
    title: "Արամի և Սաթենի հարսանեկան հրավիրատոմս",
    description: "Հրավիրատոմս",
    url: "https://l019.vercel.app/",
    siteName: "Արամ և Սաթեն",
    images: [
      {
        url: "/img1.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="mx-auto max-w-md overflow-x-hidden " style={{ whiteSpace: "pre-line" }}
      >
        {children}
      </body>
    </html>
  );
}
