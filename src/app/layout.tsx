import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Playfair_Display } from "next/font/google";
import { Poppins } from "next/font/google";



export const metadata: Metadata = {
  title: 'Tibet Momo IG2 - Pondicherry\'s Most Loved Momo Experience',
  description: 'Handcrafted Tibetan Momos, Signature Sauces & Flavor-Packed Bowls Served Fresh Daily In Pondicherry. Authentic street food with a premium casual dining feel.',
  openGraph: {
    "title": "Tibet Momo IG2 - Pondicherry's Most Loved Momo Experience",
    "description": "Handcrafted Tibetan Momos, Signature Sauces & Flavor-Packed Bowls Served Fresh Daily In Pondicherry. Authentic street food with a premium casual dining feel.",
    "url": "https://tibetmomoig2.com",
    "siteName": "Tibet Momo IG2",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/side-view-traditional-asian-dumplings-with-meat-vegetables-served-with-soy-sauce-plate-rustic_141793-11564.jpg",
        "alt": "Steaming momos and happy customers"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Tibet Momo IG2 - Pondicherry's Most Loved Momo Experience",
    "description": "Handcrafted Tibetan Momos, Signature Sauces & Flavor-Packed Bowls Served Fresh Daily In Pondicherry. Authentic street food with a premium casual dining feel.",
    "images": [
      "http://img.b2bpic.net/free-photo/side-view-traditional-asian-dumplings-with-meat-vegetables-served-with-soy-sauce-plate-rustic_141793-11564.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"]
});
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${playfairDisplay.variable} ${poppins.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
