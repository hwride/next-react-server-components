import Link from "next/link";

export default function Test1Page() {
    return <div className='flex flex-col'>
        <div>This is <code>test-1/page.tsx</code></div>
        <div>{new Date().toISOString()}</div>
        <a href='/test-1'>/test-1 - web link</a>
        <Link href='/test-1'>/test-1 - Next <code>{`<`}Link{`>`}</code></Link>
    </div>
}