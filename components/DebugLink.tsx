import Link from "next/link";

/**
 * A link that renders its href as text for easy debugging.
 */
export function DebugLink({ href }: { href: string }) {
  return (
    <Link href={href}>
      {href} - Next{" "}
      <code>
        {`<`}Link{`>`}
      </code>
    </Link>
  );
}
