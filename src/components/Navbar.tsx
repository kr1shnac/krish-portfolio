import Link from 'next/link';
import { siteData } from "@/data/siteData";
import { FileText, CalendarDays } from "lucide-react";

export default function Navbar() {
    const { personal, socials } = siteData;

    return (
        <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between px-6 py-3 backdrop-blur-md bg-black/40 border border-white/10 rounded-full w-[90%] max-w-2xl shadow-[0_0_20px_rgba(0,0,0,0.5)] group/dock">
            <Link href="/" className="text-sm font-bold tracking-tighter hover:opacity-80 transition-opacity">
                {personal.name.split(' ')[0]}
            </Link>
            <div className="flex gap-4 items-center">
                <Link
                    href={personal.resumeUrl}
                    target="_blank"
                    className="hidden sm:flex items-center text-xs font-medium text-zinc-300 hover:text-white transition-all duration-300 px-3 py-1.5 rounded-full hover:bg-white/[0.08] hover:scale-105 border border-transparent"
                >
                    <FileText size={14} strokeWidth={2} className="shrink-0" />
                    <span className="ml-1.5 font-medium">Resume</span>
                </Link>
                <div className="flex gap-4 items-center">
                    {socials.map((social) => (
                        <Link key={social.name} href={social.url} target="_blank" className="text-zinc-400 hover:text-white transition-all duration-300 hover:scale-110 hover:-translate-y-1">
                            <social.icon size={18} strokeWidth={2} />
                            <span className="sr-only">{social.name}</span>
                        </Link>
                    ))}
                    {/* Cal.com Schedule Link */}
                    <div className="w-[1px] h-4 bg-white/20 mx-1" />
                    <Link href="https://cal.com/kr1shnac" target="_blank" className="relative flex items-center justify-center text-black bg-white transition-all duration-300 hover:scale-110 rounded-full p-1.5 sm:px-3 sm:py-1.5 shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.6)] group" title="Schedule a call">
                        <CalendarDays size={16} strokeWidth={2.5} className="relative z-10" />
                        <span className="hidden sm:inline relative z-10 ml-1.5 text-xs font-bold">Book Call</span>
                        <span className="sr-only sm:hidden">Schedule a call</span>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
