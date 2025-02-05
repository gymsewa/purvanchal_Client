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

export const metadata = {
  metadataBase: new URL('https://purvanchalprojects.com'),
  title: "Purvanchal Projects New Launch in Sector 22D Yamuna Expressway | Premium Real Estate",
  description: "Book your dream home at Purvanchal Projects' newest launch in Sector 22D, Yamuna Expressway. Luxury 2,3,4 BHK apartments with world-class amenities. Pre-launch offers available. Best investment opportunity in Noida Extension. Puruvanchal, Purevanchal, Puravanchal - Experience luxury living at its finest.",
  keywords: [
    // Project Specific Keywords
    "Purvanchal Projects New Launch", "Purvanchal Royal City", "Purvanchal Royal Park", 
    "Puruvanchal Projects", "Purevanchal Projects", "Puravanchal Projects", // Common misspellings
    "Sector 22D Yamuna Expressway", "Yamuna Expressway Projects",
    
    // Property Types
    "2 BHK Apartments in Yamuna Expressway", "3 BHK Apartments in Yamuna Expressway",
    "4 BHK Luxury Apartments", "Premium Residential Projects",
    "Ready to Move Flats", "Under Construction Projects",
    
    // Location Based
    "Properties near Noida Airport", "Real Estate Yamuna Expressway",
    "Noida Extension Properties", "Greater Noida West Projects",
    "Residential Projects Near Jewar Airport", "Properties Near F1 Track",
    
    // Investment Related
    "Real Estate Investment Yamuna Expressway", "Property Investment Noida",
    "Best Investment Property Noida", "ROI Focused Properties",
    "Pre-Launch Offers", "Under Construction Discount",
    
    // Amenities
    "Gated Community Projects", "24x7 Security",
    "Swimming Pool", "Club House",
    "Modern Amenities", "Smart Homes",
    "Green Building", "Sustainable Living",
    
    // Price Related
    "Affordable Luxury Homes", "Premium Housing",
    "Best Price Properties", "Value for Money Homes",
    "Investment Opportunity", "Capital Appreciation",
    
    // Features
    "Vastu Compliant Homes", "Premium Specifications",
    "Modern Architecture", "Italian Marble Flooring",
    "Modular Kitchen", "Power Backup",
    
    // Locality Features
    "Near Metro Station", "Near Shopping Mall",
    "Near Schools", "Near Hospitals",
    "Near IT Parks", "Educational Hub"
  ].join(', '),
  alternates: {
    canonical: 'https://purvanchalprojects.com/new-launch-sector-22d',
    languages: {
      'en-US': 'https://purvanchalprojects.com/en-us',
      'hi-IN': 'https://purvanchalprojects.com/hi'
    }
  },
  authors: [{ name: "Purvanchal Projects", url: "https://purvanchalprojects.com" }],
  generator: "Next.js",
  applicationName: "Purvanchal Projects New Launch",
  referrer: "origin-when-cross-origin",
  creator: "Purvanchal Projects Development Team",
  publisher: "Purvanchal Projects",
  category: "Real Estate",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/purvanchal-logo.png" },
      { url: "/purvanchal-logo.png", sizes: "16x16", type: "image/png" },
      { url: "/purvanchal-logo.png", sizes: "32x32", type: "image/png" },
      { url: "/purvanchal-logo.png", sizes: "48x48", type: "image/png" },
      { url: "/purvanchal-logo.png", sizes: "192x192", type: "image/png" },
      { url: "/purvanchal-logo.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: ["/purvanchal-logo.png"],
    apple: [
      { url: "/purvanchal-logo.png" },
      { url: "/purvanchal-logo.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://purvanchalprojects.com/new-launch-sector-22d",
    siteName: "Purvanchal Projects New Launch",
    title: "Purvanchal Projects New Launch - Luxury Homes in Sector 22D Yamuna Expressway",
    description: "Experience luxury living at Purvanchal Projects' newest launch in Sector 22D, Yamuna Expressway. Premium 2,3,4 BHK apartments with world-class amenities. Best investment opportunity near upcoming Noida Airport.",
    images: [
      {
        url: "/project-front-view.jpg",
        width: 1200,
        height: 630,
        alt: "Purvanchal Projects New Launch in Sector 22D",
      },
      {
        url: "/amenities-view.jpg",
        width: 1200,
        height: 630,
        alt: "World Class Amenities at Purvanchal Projects",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Purvanchal Projects New Launch - Luxury Homes in Sector 22D Yamuna Expressway",
    description: "Premium 2,3,4 BHK apartments with world-class amenities. Best investment opportunity near upcoming Noida Airport. Book now for pre-launch offers!",
    images: ["/project-front-view.jpg"],
    creator: "@purvanchalgroup",
    site: "@purvanchalgroup",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "yandex-verification-code",
    yahoo: "yahoo-verification-code"
  },
  other: {
    "facebook-domain-verification": "your-facebook-domain-verification",
    "geo.region": "IN-UP",
    "geo.placename": "Noida",
    "geo.position": "28.5355;77.3910",
    "ICBM": "28.5355, 77.3910"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
         {/* Google Tag (gtag.js) */}
         <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=AW-16848535568"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-16848535568');
          `}
        </Script>
        <link rel="canonical" href="https://purvanchalprojects.com/new-launch-sector-22d" />
        <link rel="icon" href="/purvanchal-logo.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/purvanchal-logo.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/purvanchal-logo.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/purvanchal-logo.png" />
        <link rel="apple-touch-icon" href="/purvanchal-logo.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/purvanchal-logo.png" />
        <meta name="geo.region" content="IN-UP" />
        <meta name="geo.placename" content="Noida" />
        <meta name="geo.position" content="28.5355;77.3910" />
        <meta name="ICBM" content="28.5355, 77.3910" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="revisit-after" content="1 days" />
        <meta name="rating" content="General" />
        <meta name="distribution" content="Global" />
        <meta name="copyright" content="Purvanchal Projects" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        itemScope itemType="https://schema.org/WebPage"
      >
        {children}
      </body>
    </html>
  );
}