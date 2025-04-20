export default function NestedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="border p-3">
      This is <code className="code-bright">app/nested-layout/layout.tsx</code>
      <div>{new Date().toISOString()}</div>
      {children}
    </div>
  );
}
