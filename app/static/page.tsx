import Link from "next/link";

export default function Test1Page() {
  return (
    <div className="border p-4 flex flex-col">
      <div>
        This is <code className="code-bright">static/page.tsx</code>
      </div>
      <div>{new Date().toISOString()}</div>
      <Link href="/">
        / - Next{" "}
        <code>
          {`<`}Link{`>`}
        </code>
      </Link>
      <a href="/">/ - web link</a>
    </div>
  );
}
