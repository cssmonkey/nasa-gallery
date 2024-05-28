import { FC, ReactNode } from "react";

type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type TitleProps = {
    level?: HeadingLevel;
    className?: string;
    children: ReactNode;
};

const darkThemeFontColor = "dark:text-gray-100";

const classes: Record<HeadingLevel, string> = {
    h1: `text-5xl font-extrabold ${darkThemeFontColor}`,
    h2: `text-4xl font-extrabold ${darkThemeFontColor}`,
    h3: `text-3xl font-bold ${darkThemeFontColor}`,
    h4: `text-2xl font-bold ${darkThemeFontColor}`,
    h5: `text-xl font-bold ${darkThemeFontColor}`,
    h6: `text-lg font-bold ${darkThemeFontColor}`,
};

const Title: FC<TitleProps> = ({ level = "h1", className = "", children }) => {
    const customClass = `${classes[level]} ${className}`;
    const Component = level;
    return <Component className={customClass}>{children}</Component>;
};

export default Title;
