import Title from "@/components/Title/Title";

type RequestResponse = {
    url: string;
    title: string;
    copyright: string;
    explanation: string;
};

const getPictureOfTheDay = async () => {
    const url = new URL(`${process.env.NASA_API_URI}/apod`);
    url.searchParams.set("api_key", process.env.NASA_API_KEY ?? "");

    const res = await fetch(url);

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    return res.json() as Promise<RequestResponse>;
};

export default async function PictureOfTheDay() {
    const data = await getPictureOfTheDay();
    return (
        <main className="flex min-h-screen flex-col items-center gap-4 p-24">
            <Title>Picture of the day</Title>
            <p>{data.title}</p>
            <p>{data.url}</p>
            <p>{data.explanation}</p>
            <p>copyright {data.copyright}</p>
        </main>
    );
}
