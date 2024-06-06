import { FC, ReactNode } from "react";

type PictureOfTheDayLayout = {
    children: ReactNode;
};

const PictureOfTheDayLayout: FC<PictureOfTheDayLayout> = ({ children }) => {
    return <main className="flex flex-col gap-4 px-8 py-24">{children}</main>;
};

export default PictureOfTheDayLayout;
