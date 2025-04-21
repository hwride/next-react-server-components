import { DebugLink } from "@/components/DebugLink";

export default function Test1Page() {
  return (
    <div className="flex flex-col border p-3">
      <div>
        This is <code className="code-bright">app/static/page.tsx</code>
      </div>
      <div>{new Date().toISOString()}</div>
      <DebugLink href="/" />
      {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
      <a href="/">/ - web link</a>
    </div>
  );
}
