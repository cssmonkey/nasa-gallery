import { FC } from "react";
import { YouTubeEmbed } from "@next/third-parties/google";

type VideoEmbedProps = {
    url: string;
};

const VideoEmbed: FC<VideoEmbedProps> = ({ url }) => {
    const videoUrl = new URL(url);
    const videoId = videoUrl.pathname.split("/").pop() ?? "";
    return (
        <div className="aspect-video ">
            <div className="p-4 border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-800 drop-shadow">
                <YouTubeEmbed
                    videoid={videoId}
                    params="controls=0"
                    style="margin: 0 auto;"
                />
            </div>
        </div>
    );
};

export default VideoEmbed;
