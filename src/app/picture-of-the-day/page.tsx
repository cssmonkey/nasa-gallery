import Title from "@/components/Title/Title";
import { makeRequest } from "@/utilities/api";
import Image from "next/image";

type ImageData = {
    url: string;
    title: string;
    copyright: string;
    explanation: string;
    date: string;
};

type Reponse = ImageData[];

type RequestParams = {
    start_date: string;
    end_date: string;
};

const getPictureOfTheDay = async () => {
    const queryParams: RequestParams = {
        start_date: "2024-05-20",
        end_date: "2024-05-30",
    };

    return await makeRequest<Reponse>({ path: "/apod", queryParams });
};

export default async function PictureOfTheDay() {
    const data = await getPictureOfTheDay();
    const firstImage = data[0];
    return (
        <main className="flex min-h-screen flex-col items-center gap-4 p-24">
            <Title className="mb-4">Picture of the day</Title>
            <Title level="h2" className="mb-4">
                {firstImage.title}
            </Title>
            <p>{firstImage.date}</p>
            {firstImage.url && (
                <Image
                    src={firstImage.url}
                    width={500}
                    height={500}
                    alt="Picture of the author"
                />
            )}
            <p>{firstImage.explanation}</p>
            {firstImage.copyright && <p>copyright {firstImage.copyright}</p>}
        </main>
    );
}
