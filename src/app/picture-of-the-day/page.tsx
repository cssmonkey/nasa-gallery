import DatePicker from "@/components/DatePicker/DatePicker";
import ImageViewer from "@/components/ImageViewer/ImageViewer";
import Title from "@/components/Title/Title";
import { makeRequest } from "@/utilities/api";

type ImageData = {
    url: string;
    title: string;
    copyright: string;
    explanation: string;
    date: string;
};

type Reponse = ImageData;

type RequestParams = {
    date: string;
    start_date?: string;
    end_date?: string;
};

const getPictureOfTheDay = async () => {
    const queryParams: RequestParams = {
        date: "2024-06-03",
    };

    return await makeRequest<Reponse>({ path: "/apod", queryParams });
};

export default async function PictureOfTheDay() {
    const data = await getPictureOfTheDay();
    return (
        <main className="flex min-h-screen flex-col gap-4 px-8 py-24">
            <Title>Picture of the day</Title>

            <ImageViewer
                title={data.title}
                text={data.explanation}
                imageUrl={data.url}
                copyright={data.copyright}
            >
                <DatePicker />
            </ImageViewer>
        </main>
    );
}
