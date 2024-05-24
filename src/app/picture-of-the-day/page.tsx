import Title from "@/components/Title/Title";
import Image from "next/image";

type ImageData = {
    url: string;
    title: string;
    copyright: string;
    explanation: string;
    date: string;
};

const getPictureOfTheDay = async () => {
    const url = new URL(`${process.env.NASA_API_URI}/apod`);
    url.searchParams.set("api_key", process.env.NASA_API_KEY ?? "");

    const res = await fetch(url);

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    return res.json() as Promise<ImageData>;
};

export default async function PictureOfTheDay() {
    const data = await getPictureOfTheDay();
    return (
        <main className="flex min-h-screen flex-col items-center gap-4 p-24">
            <Title className="mb-4">Picture of the day</Title>
            <Title level="h2" className="mb-4">
                {data.title}
            </Title>
            <p>{data.date}</p>
            {data.url && (
                <Image
                    src={data.url}
                    width={500}
                    height={500}
                    alt="Picture of the author"
                />
            )}
            <p>{data.explanation}</p>
            {data.copyright && <p>copyright {data.copyright}</p>}
        </main>
    );
}
