import { FC, ReactNode } from "react";

type CardProps = {
    headingLevel?: "h2" | "h3" | "h4" | "h5";
    customClass?: string;
    heading: string;
    children: ReactNode;
};

const Card: FC<CardProps> = ({
    headingLevel = "h2",
    customClass = "",
    heading,
    children,
}) => {
    const HeadingComponent = headingLevel;
    return (
        <div
            className={`border rounded border-gray-300 bg-white drop-shadow ${customClass}`}
        >
            <div className="border-b border-gray-300 p-4 ">
                <HeadingComponent className="card-title">
                    {heading}
                </HeadingComponent>
            </div>
            <div className="p-4">{children}</div>
        </div>
    );
};

export default Card;
