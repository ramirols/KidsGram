import type { Metadata, Viewport } from "next";
import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#E25C1C',
};

export const metadata: Metadata = {
  title: "Kidsgram | Explora las Regiones del Perú",
  description: "Descubre la magia de las regiones del Perú - Costa, Sierra y Selva - a través de una experiencia educativa única para niños. Aprende sobre nuestra diversa cultura, geografía y tradiciones.",
  keywords: "Perú para niños, regiones del Perú, Costa peruana, Sierra peruana, Selva peruana, educación infantil, cultura peruana",
  authors: [{ name: "Kidsgram" }],
  creator: "Kidsgram",
  publisher: "Kidsgram",
  openGraph: {
    title: "Kidsgram | Explora las Regiones del Perú",
    description: "Descubre la magia de las regiones del Perú - Costa, Sierra y Selva - a través de una experiencia educativa única para niños.",
    type: "website",
    locale: "es_PE",
    siteName: "Kidsgram",
    url: "https://kids-gram.vercel.app/",
    images: [
      {
        url: "https://kids-gram.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mapa educativo del Perú para niños",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kidsgram | Explora las Regiones del Perú",
    description: "Descubre la magia de las regiones del Perú - Costa, Sierra y Selva - a través de una experiencia educativa única para niños.",
    images: ["https://kids-gram.vercel.app/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://kids-gram.vercel.app/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="google-site-verification" content="" />
        <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="format-detection" content="telephone=no, email=no, address=no" />
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "Kidsgram",
              url: "https://kids-gram.vercel.app/",
              logo: "https://kids-gram.vercel.app/logo.png",
              description: "Plataforma educativa interactiva para niños sobre el Perú.",
            }),
          }}
        />
      </body>
    </html>
  );
}