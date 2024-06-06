import DatePicker from "@/components/DatePicker/DatePicker";
import MediaViewer from "@/components/MediaViewer/MediaViewer";
import Title from "@/components/Title/Title";
import { makeRequest } from "@/utilities/api";
import { DateFormat } from "@/utilities/format-date";

type ImageData = {
    url: string;
    hdurl: string;
    title: string;
    copyright: string;
    explanation: string;
    date: string;
    media_type: "image" | "video";
};

type Reponse = ImageData;

type RequestParams = {
    date: string;
    start_date?: string;
    end_date?: string;
};

const getPictureOfTheDay = async (date: DateFormat) => {
    const [day, month, year] = date.split("-");

    const queryParams: RequestParams = {
        date: `${year}-${month}-${day}`,
    };

    return await makeRequest<Reponse>({ path: "/apod", queryParams });
};

export default async function PictureOfTheDay({
    params,
}: {
    params: { date: DateFormat };
}) {
    const data = await getPictureOfTheDay(params.date);

    return (
        <main className="flex min-h-screen flex-col gap-4 px-8 py-24">
            <Title endContent={<DatePicker date={params.date} />}>
                Picture of the day
            </Title>

            <MediaViewer
                title={data.title}
                text={data.explanation}
                url={data.url}
                copyright={data.copyright}
                mediaType={data.media_type}
            />
        </main>
    );
}
