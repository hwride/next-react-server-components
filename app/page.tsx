import Image from "next/image";

export default function Home() {
    return (
        <main className='border p-4'>
            <div>This is <code>page.tsx</code></div>
            <div>{new Date().toISOString()}</div>
            <Image
                className="dark:invert"
                src="/next.svg"
                alt="Next.js logo"
                width={180}
                height={38}
                priority
            />
        </main>
    );
}
