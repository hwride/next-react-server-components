import { DebugLink } from "@/components/DebugLink";

export default function Test1Page() {
  return (
    <div className="flex flex-col border p-3">
      <div>
        This is{" "}
        <code className="code-bright">app/double-nested-layout/page.tsx</code>
      </div>
      <div>{new Date().toISOString()}</div>
      <DebugLink href="/" />
      <DebugLink href="/nested-layout" />
    </div>
  );
}
