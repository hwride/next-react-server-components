import Image from "next/image";

export default function Home() {
    return (
        <main className='border p-4'>
            <span>This is <code>page.tsx</code></span>
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
