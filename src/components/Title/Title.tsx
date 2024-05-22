import { FC, ReactNode } from "react";

type TitleProps = {
    level?: "h1" | "h2" | "h3" | "h4" | "h5";
    className?: string;
    children: ReactNode;
};

const Title: FC<TitleProps> = ({ level = "h1", className = "", children }) => {
    const customClass = `c-title c-title--${level} ${className}`;
    const Component = level;
    return <Component className={customClass}>{children}</Component>;
};

export default Title;
