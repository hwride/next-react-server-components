import Link from "next/link";

export default function Test1Page() {
  return (
    <div className="flex flex-col border p-3">
      <div>
        This is <code className="code-bright">app/nested-layout/page.tsx</code>
      </div>
      <div>{new Date().toISOString()}</div>
      <Link href="/">
        / - Next{" "}
        <code>
          {`<`}Link{`>`}
        </code>
      </Link>
      <Link href="/nested-layout/double-nested-layout">
        /nested-layout/double-nested-layout - Next{" "}
        <code>
          {`<`}Link{`>`}
        </code>
      </Link>
    </div>
  );
}
