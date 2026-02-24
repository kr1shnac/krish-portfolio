"use client";

import { TracingBeam } from "@/components/TracingBeam";

export const TracingBeamWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <TracingBeam>
            {children}
        </TracingBeam>
    );
};
