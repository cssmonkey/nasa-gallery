import CalendarModal from "@/components/CalendarModal/CalendarModal";
import MediaViewer from "@/components/MediaViewer/MediaViewer";
import Title from "@/components/Title/Title";
import { MediaType } from "@/types";
import { makeRequest } from "@/utilities/api";
import { DateFormat } from "@/utilities/format-date";

type ImageData = {
    url: string;
    hdurl: string;
    title: string;
    copyright: string;
    explanation: string;
    date: string;
    media_type: MediaType;
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
        <>
            <Title endContent={<CalendarModal selectedDate={params.date} />}>
                Picture of the day
            </Title>

            <MediaViewer
                title={data.title}
                text={data.explanation}
                url={data.url}
                copyright={data.copyright}
                mediaType={data.media_type}
            />
        </>
    );
}
