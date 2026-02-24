import Link from 'next/link';
import { siteData } from "@/data/siteData";

export default function Navbar() {
    const { personal, socials } = siteData;

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md bg-black/50 border-b border-white/5">
            <Link href="/" className="text-xl font-bold tracking-tighter hover:opacity-80 transition-opacity">
                {personal.name}
            </Link>
            <div className="flex gap-4 items-center">
                {socials.map((social) => (
                    <Link key={social.name} href={social.url} target="_blank" className="text-zinc-400 hover:text-white transition-colors">
                        <social.icon size={20} />
                        <span className="sr-only">{social.name}</span>
                    </Link>
                ))}
            </div>
        </nav>
    );
}
