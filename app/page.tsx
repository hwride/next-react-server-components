import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <main className='border p-4 flex flex-col'>
            <Image
                className="dark:invert"
                src="/next.svg"
                alt="Next.js logo"
                width={180}
                height={38}
                priority
            />
            <div>This is <code>page.tsx</code></div>
            <div>{new Date().toISOString()}</div>
            <a href='/test-1'>/test-1 - web link</a>
            <Link href='/test-1'>/test-1 - Next <code>{`<`}Link{`>`}</code></Link>
        </main>
    );
}
