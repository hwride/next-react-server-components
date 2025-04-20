import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next Testing App",
  description: "App for testing Next.js features",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="p-3 antialiased">
        This is <code className="code-bright">app/layout.tsx</code>
        <div>{new Date().toISOString()}</div>
        {children}
      </body>
    </html>
  );
}
