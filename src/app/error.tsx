"use client";

import Title from "@/components/Title/Title";

export default function Error() {
    return (
        <main className="flex min-h-screen flex-col items-center gap-4 p-24">
            <Title>Error</Title>
            <p>Something went wrong</p>
        </main>
    );
}
