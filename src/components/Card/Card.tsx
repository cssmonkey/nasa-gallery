import { FC, ReactNode } from "react";

type CardProps = {
    headingLevel?: "h2" | "h3" | "h4" | "h5";
    heading: string;
    className?: string;
    children: ReactNode;
};

const Card: FC<CardProps> = ({
    className = "",
    headingLevel = "h2",
    heading,
    children,
}) => {
    const customClass = `c-card ${className}`;
    const HeadingComponent = headingLevel;
    return (
        <div className={customClass}>
            <div className="c-card__header">
                <HeadingComponent className="c-card__title">
                    {heading}
                </HeadingComponent>
            </div>
            <div className="c-card-body">{children}</div>
        </div>
    );
};

export default Card;
