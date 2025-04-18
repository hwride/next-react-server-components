import Link from "next/link";

export default function Home() {
    return (
        <main className='border p-4 flex flex-col'>
            <div>This is <code className='code-bright'>app/page.tsx</code></div>
            <div>{new Date().toISOString()}</div>
            <Link href='/static'>/static - Next <code>{`<`}Link{`>`}</code></Link>
            <a href='/static'>/static - web link</a>
        </main>
    );
}
