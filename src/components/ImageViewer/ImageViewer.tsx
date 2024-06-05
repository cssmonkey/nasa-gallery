import { FC, ReactNode } from "react";
import Title from "@/components/Title/Title";
import Image from "next/image";
import { Divider } from "@nextui-org/react";

type ImageViewerProps = {
    title: string;
    copyright?: string;
    imageUrl: string;
    text: string;
    children?: ReactNode;
};

const ImageViewer: FC<ImageViewerProps> = ({
    title,
    copyright,
    imageUrl,
    text,
    children,
}) => {
    return (
        <>
            <div className="mx-auto max-w-8xl flex flex-row gap-6 flex-1">
                {imageUrl && (
                    <div className="w-3/6 relative">
                        <Image
                            src={imageUrl}
                            className="object-contain p-4 border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-800 drop-shadow"
                            alt={title}
                            fill
                        />
                    </div>
                )}
                <div className="flex-1">
                    <Title level="h2">{title}</Title>
                    <p>{text}</p>
                    {copyright && <p>copyright {copyright}</p>}
                </div>
            </div>
            <Divider className="mt-6" />
            {children}
        </>
    );
};

export default ImageViewer;
