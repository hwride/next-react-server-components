import type {Metadata} from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className='antialiased p-4'
      >
        This is <code className='code-bright'>app/layout.tsx</code>
        <div>{new Date().toISOString()}</div>
        {children}
      </body>
    </html>
  );
}
