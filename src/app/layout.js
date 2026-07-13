import "./globals.css";

export const metadata = {
  title: "Dhairya Rastogi | Associate Product Manager",
  description:
    "Portfolio of Dhairya Rastogi — aspiring Associate Product Manager. Product discovery, activation & growth, and data-driven decisions across fintech and insurance.",
  authors: [{ name: "Dhairya Rastogi" }],
  openGraph: {
    title: "Dhairya Rastogi | Associate Product Manager",
    description:
      "Product discovery, activation & growth, and data-driven decisions across fintech and insurance.",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#0a0a0a",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
