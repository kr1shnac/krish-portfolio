import { notFound } from "next/navigation";
import { siteData } from "@/data/siteData";
import Link from "next/link";
import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";
import { AutoClawBot } from "@/components/AutoClawBot";

export function generateStaticParams() {
    return siteData.projects.map((p) => ({
        id: p.id,
    }));
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const project = siteData.projects.find((p) => p.id === id) as any;

    if (!project) {
        notFound();
    }

    return (
        <article className="w-full font-sans text-zinc-400 mt-8 pb-32">
            {/* Header Section */}
            <div className="mb-10">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 mb-4">
                    {project.id === "autoclaw" ? (
                        <h1 className="font-incognito font-bold tracking-tight sm:text-5xl text-3xl text-zinc-100 relative inline-block">
                            {project.title}
                            <div className="absolute left-[-90px] top-[-15px] z-[100] pointer-events-none">
                                <div className="animate-page-bot-roam opacity-0">
                                    <AutoClawBot className="scale-[0.5] md:scale-[0.6] origin-center" />
                                </div>
                            </div>
                        </h1>
                    ) : (
                        <h1 className="font-incognito font-bold tracking-tight sm:text-5xl text-3xl text-zinc-100 relative inline-block">
                            {project.title}
                        </h1>
                    )}

                    <div className="flex flex-wrap items-center gap-x-4">
                        {project.url && project.url !== "#" ? (
                            <a
                                className="flex items-center gap-x-2 bg-zinc-800/20 text-white border border-transparent rounded-md px-4 py-2 duration-200 cursor-pointer hover:border-zinc-700 text-sm font-medium"
                                href={project.url}
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                <ExternalLink className="w-4 h-4" />
                                Live URL
                            </a>
                        ) : (
                            <span className="flex items-center gap-x-2 bg-zinc-800/20 text-zinc-500 border border-transparent rounded-md px-4 py-2 duration-200 cursor-not-allowed text-sm font-medium">
                                <ExternalLink className="w-4 h-4 opacity-50" />
                                Coming Soon
                            </span>
                        )}

                        {project.github && (
                            <a
                                className="flex items-center gap-x-2 bg-zinc-800/20 text-white border border-transparent rounded-md px-4 py-2 duration-200 cursor-pointer hover:border-zinc-700 text-sm font-medium"
                                href={project.github}
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                <Github className="w-4 h-4" />
                                GitHub
                            </a>
                        )}
                    </div>
                </div>
            </div>

            {/* Hero Image */}
            {project.images && project.images.length > 0 && (
                <div className="w-full rounded-xl overflow-hidden border border-zinc-800 bg-[#111111] mb-12">
                    <Image
                        src={project.images[0].url}
                        alt={project.images[0].caption || `${project.title} screenshot`}
                        width={1920}
                        height={1080}
                        className="w-full h-auto"
                        unoptimized
                    />
                    {project.images[0].caption && (
                        <p className="mt-4 text-center text-sm text-zinc-500 pb-4">
                            {project.images[0].caption}
                        </p>
                    )}
                </div>
            )}

            {/* Content Sections */}
            <div className="flex flex-col gap-10 text-zinc-400">

                {/* Overview */}
                {project.description && (
                    <section>
                        <h2 className="font-incognito text-2xl font-bold tracking-tight text-zinc-100 mb-4">
                            Overview
                        </h2>
                        <p className="text-base leading-relaxed text-zinc-400">
                            {project.description}
                        </p>
                    </section>
                )}

                {/* Key Features Section */}
                {project.keyFeatures && project.keyFeatures.length > 0 && (
                    <section>
                        <h2 className="font-incognito text-2xl font-bold tracking-tight text-zinc-100 mb-4">
                            Key Features
                        </h2>

                        <div className="mt-5 space-y-8">
                            {project.keyFeatures.map((feature: any, idx: number) => {
                                const featureText = typeof feature === "string" ? feature : feature.text;
                                const featureImage = typeof feature === "object" ? feature.image : null;
                                const featureCaption = typeof feature === "object" ? feature.caption : null;
                                const [boldPart, ...rest] = featureText.includes(":") ? featureText.split(":") : [featureText, ""];
                                return (
                                    <div key={idx}>
                                        <ul className="list-[square] ml-5 text-zinc-400 marker:text-zinc-500">
                                            <li>
                                                {rest.length > 0 ? (
                                                    <>
                                                        <strong className="font-bold text-zinc-300">{boldPart}:</strong>
                                                        {rest.join(":")}
                                                    </>
                                                ) : (
                                                    <>{boldPart}</>
                                                )}
                                            </li>
                                        </ul>
                                        {featureImage && (
                                            <div className="mt-4 flex flex-col gap-2">
                                                <div className="relative w-full rounded-xl overflow-hidden border border-zinc-800 bg-[#111111]">
                                                    <Image
                                                        src={featureImage}
                                                        alt={featureCaption || `${project.title} feature screenshot`}
                                                        width={1920}
                                                        height={1080}
                                                        className="w-full h-auto"
                                                        unoptimized
                                                    />
                                                </div>
                                                {featureCaption && (
                                                    <p className="text-center text-sm text-zinc-500">
                                                        {featureCaption}
                                                    </p>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </section>
                )}

                {/* What I Built Section */}
                {project.whatIBuilt && project.whatIBuilt.length > 0 && (
                    <section>
                        <h2 className="font-incognito text-2xl font-bold tracking-tight text-zinc-100 mb-4">
                            How I Built It
                        </h2>
                        <ul className="list-[square] mt-5 ml-5 text-zinc-400 marker:text-zinc-500 space-y-4">
                            {project.whatIBuilt.map((item: string, idx: number) => (
                                <li key={idx}>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </section>
                )}

                {/* Tech Stack Section */}
                {project.techStackDetailed && project.techStackDetailed.length > 0 && (
                    <section>
                        <h2 className="font-incognito text-2xl font-bold tracking-tight text-zinc-100 mb-4">
                            Tech Stack
                        </h2>
                        <ul className="list-[square] mt-5 ml-5 text-zinc-400 marker:text-zinc-500 space-y-4">
                            {project.techStackDetailed.map((stack: string, idx: number) => {
                                const [boldPart, ...rest] = stack.includes(":") ? stack.split(":") : [stack, ""];
                                return (
                                    <li key={idx}>
                                        {rest.length > 0 ? (
                                            <>
                                                <strong className="font-bold text-zinc-300">{boldPart}:</strong>
                                                {rest.join(":")}
                                            </>
                                        ) : (
                                            <strong className="font-bold text-zinc-300">{boldPart}</strong>
                                        )}
                                    </li>
                                );
                            })}
                        </ul>
                    </section>
                )}

                {/* Why I Built It Section */}
                {project.whyIBuiltIt && (
                    <section>
                        <h2 className="font-incognito text-2xl font-bold tracking-tight text-zinc-100 mb-4">
                            Why I Built It
                        </h2>
                        <p className="text-base text-zinc-400 leading-relaxed">
                            {project.whyIBuiltIt}
                        </p>

                        {/* Additional Images (if any) */}
                        {project.images && project.images.length > 3 && (
                            <div className="mt-10 flex flex-col gap-10">
                                {project.images.slice(3).map((img: any, idx: number) => (
                                    <div key={idx} className="flex flex-col gap-2 relative">
                                        <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden border border-zinc-800 bg-[#111111]">
                                            <Image
                                                src={img.url}
                                                alt={img.caption || `${project.title} screenshot ${idx + 3}`}
                                                fill
                                                className="object-cover"
                                                unoptimized
                                            />
                                        </div>
                                        {img.caption && (
                                            <p className="mt-4 text-center text-sm text-zinc-500">
                                                {img.caption}
                                            </p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </section>
                )}
            </div>
        </article>
    );
}

