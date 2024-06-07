import { FC, ReactNode } from "react";
import Title from "@/components/Title/Title";
import Image from "next/image";
import { Divider } from "@nextui-org/react";
import VideoEmbed from "../VideoEmbed/VideoEmbed";
import { MediaType } from "@/types";

type MediaViewerProps = {
    title: string;
    copyright?: string;
    mediaType: MediaType;
    url: string;
    text: string;
    children?: ReactNode;
};

const renderMedia = (mediaType: MediaType, title: string, url: string) => {
    switch (mediaType) {
        case "image": {
            return (
                <Image
                    src={url}
                    className="object-contain p-4 border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-800 drop-shadow"
                    alt={title}
                    fill
                />
            );
        }
        case "video": {
            return <VideoEmbed url={url} />;
        }
    }
};

const MediaViewer: FC<MediaViewerProps> = ({
    title,
    copyright,
    mediaType,
    url,
    text,
    children,
}) => {
    return (
        <>
            <div className="mx-auto max-w-8xl flex flex-row gap-6 flex-1">
                <div className="w-3/6 relative">
                    {renderMedia(mediaType, title, url)}
                </div>
                <div className="flex-1 space-y-4">
                    <Title level="h2">{title}</Title>
                    <p>{text}</p>
                    {copyright && (
                        <p className="text-gray-600 dark:text-gray-300">
                            copyright {copyright}
                        </p>
                    )}
                </div>
            </div>
            <Divider className="mt-6" />
            {children}
        </>
    );
};

export default MediaViewer;
