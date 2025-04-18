import Link from "next/link";

export default function Test1Page() {
    return <div className='flex flex-col'>
        <div>This is <code>static/page.tsx</code></div>
        <div>{new Date().toISOString()}</div>
        <a href='/'>/ - web link</a>
        <Link href='/'>/ - Next <code>{`<`}Link{`>`}</code></Link>
    </div>
}