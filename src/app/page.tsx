import Card from "@/components/Card/Card";
import Title from "@/components/Title/Title";
import Link from "next/link";

import { getTodaysDate } from "@/utilities/format-date";

export default function Home() {
    const today = getTodaysDate();
    return (
        <main className="flex min-h-screen flex-col items-center gap-8 p-24">
            <Title>NASA image galleries</Title>
            <div className="w-full max-w-5xl items-center justify-between flex gap-4">
                <Card
                    heading="💫 Astronomy picture of the day"
                    customClass="flex-1"
                >
                    <Link href={`/picture-of-the-day/${today}`}>
                        View images
                        <span className="sr-only">
                            from Astronomy Picture of the day
                        </span>
                    </Link>
                </Card>

                <Card heading="🌍 Earth" customClass="flex-1">
                    <Link href="/earth">
                        View images <span className="sr-only">of Earth</span>
                    </Link>
                </Card>
            </div>
        </main>
    );
}
