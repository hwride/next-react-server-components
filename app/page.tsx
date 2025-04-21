import { DebugLink } from "@/components/DebugLink";

export default function Home() {
  return (
    <main className="flex flex-col border p-3">
      <div>
        This is <code className="code-bright">app/page.tsx</code>
      </div>
      <div>{new Date().toISOString()}</div>
      <DebugLink href="/static" />
      <a href="/static">/static - web link</a>
      <DebugLink href="/nested-layout" />
      <DebugLink href="/with-fetch/static" />
    </main>
  );
}
