import { FC, ReactNode } from "react";
import { Divider } from "@nextui-org/react";

type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type TitleProps = {
    level?: HeadingLevel;
    className?: string;
    children: ReactNode;
    endContent?: ReactNode;
};

const darkThemeFontColor = "dark:text-gray-100";

const classes: Record<HeadingLevel, string> = {
    h1: `text-5xl font-extrabold ${darkThemeFontColor}`,
    h2: `text-4xl mb-6 font-extrabold ${darkThemeFontColor}`,
    h3: `text-3xl mb-6 font-bold ${darkThemeFontColor}`,
    h4: `text-2xl mb-4 font-bold ${darkThemeFontColor}`,
    h5: `text-xl mb-2 font-bold ${darkThemeFontColor}`,
    h6: `text-lg mb-2 font-bold ${darkThemeFontColor}`,
};

const Title: FC<TitleProps> = ({
    level = "h1",
    className = "",
    children,
    endContent,
}) => {
    const customClass = `${classes[level]} ${className}`;
    const Component = level;
    return (
        <>
            <div className="flex items-center justify-between">
                <Component className={customClass}>{children}</Component>
                {endContent}
            </div>
            {level === "h1" && <Divider className="mb-6" />}
        </>
    );
};

export default Title;
