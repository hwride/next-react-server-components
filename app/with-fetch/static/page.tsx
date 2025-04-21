import { DebugLink } from "@/components/DebugLink";

/**
 * Note how a fetch call inside a React Server Component will be cached at build time
 * if it does use any of what Next calls Dynamic APIs - e.g. query params, cookies, or headers.
 *
 * Make sure you run the build not dev mode to see this.
 */
export default async function StaticFetch() {
  const data = await fetch("http://localhost:4000/time");
  const json = await data.json();
  return (
    <div className="flex flex-col border p-3">
      <div>
        This is{" "}
        <code className="code-bright">app/with-fetch/static/page.tsx</code>
      </div>
      <DebugLink href="/" />

      <div>Time created in component: {new Date().toISOString()}</div>
      <div>
        Time from RSC <code>fetch</code> call: {json.time}
      </div>
    </div>
  );
}
